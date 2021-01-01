import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

export default function Todo({ todos }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    return (
        todos.map(
            (todo, index) => (
            <div
                className='todo-row'
                key={index}
            >
                <div key={todo.id}>
                    {todo.text}
                </div>

                <div className="icons">
                    <RiCloseCircleLine />
                    <TiEdit />
                </div>
            </div>
            )
        )
    )
}