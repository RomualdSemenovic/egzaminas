import React, {useState} from 'react';
import {useRef} from "react";

function Upload(props) {

    const nameRef = useRef()
    const quantityRef = useRef()
    const priceRef = useRef()

    const [getError, setError] = useState('Užpildykite visus laukelius!')


    function upload() {
        const data = {
            name: nameRef.current.value,
            quantity: quantityRef.current.value,
            price: priceRef.current.value
        }
        fetch('http://localhost:3001/upload', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    return setError(data.message)
                }
                if (!data.error) {
                    nameRef.current.value = ''
                    quantityRef.current.value = ''
                    priceRef.current.value = ''
                    return setError(data.message)
                }

            })
    }



    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='w-280 frame d-flex justify-content-center align-items-center flex-column'>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                    <input className='input' ref={nameRef} type="text" placeholder='Vardas'/>
                    <input className='input'  ref={quantityRef} type="text" placeholder='Amžius'/>
                    <input className='input'  ref={priceRef} type="password" placeholder='Slaptažodis'/>
                </div>
                <div onClick={upload} className='button-2'>Įkelti</div>
                <p className='text-center'>{getError}</p>
            </div>
        </div>
    );
}

export default Upload;