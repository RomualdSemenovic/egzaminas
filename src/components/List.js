import React from 'react';

import {useEffect, useState} from "react";

function List(props) {

    const [trigger, setTrigger] = useState(false)
    const [getItems, setItems] = useState(null)
    const [getStyle, setStyle] = useState({
        gridTemplateRows: 0
    })


    useEffect(() => {
        fetch('http://localhost:3001/list')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setStyle({gridTemplateRows: `repeat(${data.length + 1}, 50px)`})
            })
    }, [trigger])

    function addItem(id) {
        fetch(`http://localhost:3001/add/${id}`)
            .then(res => res.json())
            .then(data => {
                setTrigger(!trigger)
            })
    }
    function removeItem(id) {
        fetch(`http://localhost:3001/remove/${id}`)
            .then(res => res.json())
            .then(data => {
                setTrigger(!trigger)
            })
    }
    function deleteItem(id) {
        fetch(`http://localhost:3001/delete/${id}`)
            .then(res => res.json())
            .then(data => {
                setTrigger(!trigger)
            })
    }
    return (
        !!getItems ?
            <div>
                <div style={getStyle} className='frame grid'>
                    <div className='item'>
                        <div className='d-flex justify-content-center align-items-center b-r'>
                            <h2 className='m-0'>Pavadinimas</h2>
                        </div>
                        <div className='d-flex justify-content-center align-items-center b-r'>
                            <h2 className='m-0'>Kiekis</h2>
                        </div>
                        <div className='d-flex justify-content-center align-items-center b-r'>
                            <h2 className='m-0'>Kaina</h2>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <h2 className='m-0'>Bendra suma</h2>
                        </div>
                    </div>
                    {getItems.map((item, index) => (
                        <div className='item' key={index}>
                            <div className='d-flex justify-content-center align-items-center b-r'>
                                <p className='m-0'>{item.name}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center b-r'>
                                <h1 className='m-0 button-2' onClick={() => addItem(item._id)}>+</h1>
                                <p className='m-0'>{item.quantity}</p>
                                <h1 className='m-0 button-2' onClick={() => removeItem(item._id)} >-</h1>
                                <h1 className='button-3' onClick={() => deleteItem(item._id)}>Ištrinti</h1>
                            </div>
                            <div className='d-flex justify-content-center align-items-center b-r'>
                                <p className='m-0'>{item.price} $</p>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <p className='m-0'>{item.price * item.quantity} $</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> : null
    );
}

export default List;