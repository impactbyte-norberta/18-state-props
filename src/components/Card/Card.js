import React, { useState } from 'react';

function Card(props) {
    const [name, setName] = useState('sarah');
    const [age, setAge] = useState(24);

    function changeState() {
        setName('budi');
        setAge(30);
    }

    return (
        <div>
            <img src={props.image} alt='' />
            <h1>{props.title}</h1>
            <span>{name}</span>
            <span>{age}</span>

            <button onClick={changeState}>Ubah state</button>
        </div>
    );
}

export default Card;
