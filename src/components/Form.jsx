import React, { useState } from 'react';
import './form.css';

export const Form = () => {

    const [name, setName] = useState('');
    const [fullname, setFullName] = useState('');

    const onChance = (e) => {
        setName(e.target.value);
    }

    const onSubmit = () => {
        setFullName(name);
    }

    return (
        <>
            <div className="autor">GDcode</div>
            <div className="container">
                <h1>Bienvenido! 👋 {fullname.length > 0 ? (<p> {fullname} un gusto en conocerte 😉</p>) : null}</h1>
                <input type="text" className="input" placeholder="Ingresa un nombre" onChange={onChance} value={name}/>
                <button className="btn" onClick={onSubmit}>Click 👍</button>
            </div>
        </>
    )
}