import React from 'react'
import './style.css'

const movie = ({ data }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Year</th>
                    </tr>
                </thead>
                {data.map((item) => {
                   return( <tbody>
                        <tr>
                            <td>{item.title} </td>
                            <td>{item.genre}</td>
                            <td>{item.year}</td>
                        </tr>
                    </tbody>
                   )
                })}
            </table>
        </div>
    )
}

export default movie