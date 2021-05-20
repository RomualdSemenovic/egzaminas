import {useRef as ref} from 'react';
import React, {useState} from 'react';

function Upload(props) {
    const name = ref()
    const age = ref()
    const mail = ref()
    const password = ref()

    const [getError, setError] = useState('Užpildykite visus laukelius!')

    function upload() {
    const data = {
        name: name.current.value,
        age: age.current.value,
        mail: mail.current.value,
        password: password.current.value,
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
                name.current.value = ''
                age.current.value = ''
                mail.current.value = ''
                password.current.value = ''
                return setError(data.message)
            }

        })
}

    return (
        <div>
            <input ref={name} type="text" placeholder='Vardas'/>
            <input ref={age} type="number" placeholder='Amžius'/>
            <input ref={mail} type="text" placeholder='Paštas'/>
            <input ref={password} type="password" placeholder='Slaptažodis'/>
            <button onClick={upload}>Pridėti įrašą</button>
            <p>{getError}</p>
        </div>

    );
}

export default Upload;