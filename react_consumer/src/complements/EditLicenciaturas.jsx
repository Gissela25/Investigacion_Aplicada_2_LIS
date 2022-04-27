import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://127.0.0.1:8000/api/licencituras';
    
const EditLicenciaturas = () => {
    const [codigo, setCodigo] = useState('');
    const [carrera, setCarrera] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [duracion, setDuracion] = useState('');
    const [asignaturas, setAsignaturas] = useState(0);
    const [uv, setUV] = useState(0);
    const {licenciatura} = useParams()
    const navigate = useNavigate();
    const update = async (e) =>{
        e.preventDefault()
        await axios.put(`${endpoint}/edit/${licenciatura}`,{
            codigo: codigo, 
            carrera: carrera,
             descripcion: descripcion,
              duracion: duracion,
               asignaturas:asignaturas,
                uv:uv}
                )
        navigate('/')
    }
    useEffect( ()=>{
        const getLicenciaturaById = async()=>{
            const response = await axios.get(`${endpoint}/search/${licenciatura}`)
            setCodigo(response.data.codigo)
            setCarrera(response.data.carrera)
            setDescripcion(response.data.descripcion)
            setDuracion(response.data.duracion)
            setAsignaturas(response.data.asignaturas)
            setUV(response.data.uv)

        }
        getLicenciaturaById()
    }, [])
    return (
        <div><h3>Editar Carrera</h3>
        <form onSubmit={update}>
            <div className="mb-3">
            <label htmlFor="" className="form-label">Codigo</label>
            <input
            value={codigo}
            onChange= {(e)=> setCodigo(e.target.value)}
            type='text'
            className="form-control"
            />
            </div>
            <div className="mb-3">
            <label htmlFor="" className="form-label">Carrera</label>
            <input
            value={carrera}
            onChange= {(e)=> setCarrera(e.target.value)}
            type='text'
            className="form-control"
            />
            </div>
            <div className="mb-3">
            <label htmlFor="" className="form-label">Descripcion</label>
            <input
            value={descripcion}
            onChange= {(e)=> setDescripcion(e.target.value)}
            type='text'
            className="form-control"
            />
            </div>
            <div className="mb-3">
            <label htmlFor="" className="form-label">Duración</label>
            <input
            value={duracion}
            onChange= {(e)=> setDuracion(e.target.value)}
            type='text'
            className="form-control"
            />
            </div>
            <div className="mb-3">
            <label htmlFor="" className="form-label">Asignaturas</label>
            <input
            value={asignaturas}
            onChange= {(e)=> setAsignaturas(e.target.value)}
            type='number'
            className="form-control"
            />
            </div>
            <div className="mb-3">
            <label htmlFor="" className="form-label">Unidades Valorativas (UV)</label>
            <input
            value={uv}
            onChange= {(e)=> setUV(e.target.value)}
            type='number'
            className="form-control"
            />
            </div>
           <button type='submit' className="btn btn-success">Store</button>        
        </form>
        </div>
    )
}
export default EditLicenciaturas