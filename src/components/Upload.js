import {useRef as ref} from 'react';
import React, {useState} from 'react';
import http from '../plugins/Fetch'

function Upload(set) {
    const name = ref()
    const age = ref()
    const mail = ref()
    const password = ref()


    const post = () => {
        const data = {
            name: name.current.value,
            age: age.current.value,
            mail: mail.current.value,
            password: password.current.value,
        }
        http.post('/upload', data).then(res => {
            set(res.user)
        })
    }

    return (
        <div>
            <input ref={name} type="text"  placeholder='Vardas'/>
            <input ref={age} type="number" placeholder='Amžius'/>
            <input ref={mail} type="text" placeholder='Paštas'/>
            <input ref={password} type="password" placeholder='Slaptažodis'/>
            <button onClick={post}>Pridėti įrašą</button>

        </div>

    );
}

export default Upload;