import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api';
const ShowLicenciaturas = () => {
    const [licenciaturas, setLicenciaturas] = useState( [] );
    useEffect(() => {
        getAllLicenciaturas();
    }, [])

    const getAllLicenciaturas = async() => {
        const response = await axios.get(`${endpoint}/licenciaturas`)
        setLicenciaturas(response.data);
    }
    const deleteLicenciaturas = async(licenciatura) => {
        axios.delete(`${endpoint}/licenciaturas/${licenciatura}`);
        getAllLicenciaturas();
        // eslint-disable-next-line
    }
    return ( <div>
        <div className = 'd-grid gap-2'>
        <Link to = "/create" className = 'btn btn-success btn-lg mt-2 mb-2 text-white' > Create </Link> </div>
        <table className='table table-striped text-dark'>
          <thead className='bg-primary text-white'>
          <tr>
                <th>Codigo</th>
                <th>Carrera</th>
                <th>Descripcion</th>
                <th>Duración</th>
                <th>Asignaturas</th>
                <th>UV</th>
                <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
              {licenciaturas.map((licenciatura)=>(
                  <tr key={licenciatura.id}>
                    <td>{licenciatura.codigo}</td>
                    <td>{licenciatura.carrera}</td>
                    <td>{licenciatura.descripcion}</td>
                    <td>{licenciatura.duracion}</td>
                    <td>{licenciatura.asignaturas}</td>
                    <td>{licenciatura.uv}</td>
                    <td>
                        <Link to={`/edit/${licenciatura.id}`} className='btn btn-warning'>Editar</Link>
                        <button onClick={()=>deleteLicenciaturas(licenciatura.id)} className='btn btn-danger'>Delete</button>
                    </td>
                  </tr>
              ))}
          </tbody>
        </table>
        </div> )
}

export default ShowLicenciaturas