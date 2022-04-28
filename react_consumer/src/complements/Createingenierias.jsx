import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/ingenieria';
const Createingenierias = () => {
    const [codigo, setCodigo] = useState('');
    const [carrera, setCarrera] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [duracion, setDuracion] = useState('');
    const [asignaturas, setAsignaturas] = useState('');
    const [uv, setUV] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint,{codigo: codigo, carrera: carrera, descripcion: descripcion, duracion: duracion, asignaturas:asignaturas, uv:uv})
        navigate('/')
    }
  return (
    <div>
        <h3>Agregar una nueva carrera</h3>
        <form onSubmit={store}>
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

export default Createingenierias