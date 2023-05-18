import React, { useState,useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function Profile() {
    let url = `https://6464f7669c09d77a62dfaf08.mockapi.io`;
    const {id} = useParams();

    const [student,setStudent] = useState({});

    useEffect(() => {
        fetch(`${url}/students/${id}`)
            .then(res => res.json())
            .then(data => setStudent(data))
    }, [])

    const showPokemon = student.pokemon?.map((p,i) => {
        return (
            <div key={i} className='profile'>
                <Link className='prof' to={`/poke/${p.p_id}`}>
                    <img src={p.avatar} alt="" />
                </Link>
                <div className='prof3'>
                    <p>{p.name}</p>
                    <p>Lv. {p.level} - {p.type}</p>
                </div>
            </div>
        )
    })

    return (
        //div with photo with description
        //3 pokemon by side.
        <div className='profile'>
            <div className='prof'>
                <img className='studentPic' src={student.avatar} alt="" />
                <h1>{student.name}</h1>
            </div>
            <div className='prof3'>
                {showPokemon}
            </div>
        </div>
    )
}

export default Profile