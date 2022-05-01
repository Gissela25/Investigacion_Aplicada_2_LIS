import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api';
const ShowIngenierias = () => {
    const [ingenierias, setIngenierias] = useState([]);
    useEffect(() => {
        getAllIngenierias();
    }, [])

    const getAllIngenierias = async () => {
        const response = await axios.get(`${endpoint}/ingenierias`)
        setIngenierias(response.data);
    }
    const deleteingenierias = async (id) => {
        await axios.delete(`${endpoint}/ingenieria/${id}`);
        getAllIngenierias();
        // eslint-disable-next-line
    }
    return (

        <div>
            <div class="row mx-5 mt-5">
                <div class="col ml-5">
                    <Link to="/create" className='btn btn-info btn-lg mt-2 mb-2 text-white' > Crear </Link>
                    <table className='table table-striped text-dark'>
                        <thead className='bg-secondary text-white' >
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
                            {ingenierias.map((ingenieria) => (
                                <tr key={ingenieria.id}>
                                    <td>{ingenieria.codigo}</td>
                                    <td>{ingenieria.carrera}</td>
                                    <td>{ingenieria.descripcion}</td>
                                    <td>{ingenieria.duracion}</td>
                                    <td>{ingenieria.asignaturas}</td>
                                    <td>{ingenieria.uv}</td>
                                    <td>
                                        <Link to={`/edit/${ingenieria.id}`} className='btn btn-info'>Editar</Link>

                                        <button onClick={() => deleteingenierias(ingenieria.id)} className='btn btn-info'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ShowIngenierias