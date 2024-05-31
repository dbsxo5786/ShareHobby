import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';

const Login = () =>{

    const [message, setMessage] = useState('');
    
    useEffect(() => {
        axios.get('http://localhost:8080/api/test')
        .then(response => {
            setMessage(response.data);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }, []);
    return(

        <div>
            <h3>{message}</h3>
        </div>
    );
};
export default Login;