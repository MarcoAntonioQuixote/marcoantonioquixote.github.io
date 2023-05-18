import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Card,CardBody,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap';

function BattlerCard({battler}) {
    let url = `https://6464f7669c09d77a62dfaf08.mockapi.io`;
    let [poke, setPoke] = useState([]);

    useEffect(() => {
        fetch(`${url}/students/${battler.id}/pokemon`)
            .then(res => res.json())
            .then(data => setPoke(data));
    },[])

    const showPoke = poke.map((p,i) => {
        return (
            <img key={i} className='pokeImg' src={p.avatar} alt={p.name} />
        )
    })

  return (
        <div className="battler">
            <Link to={`/students/${battler.id}`}>
                <img className="battlerImg" src={battler.avatar}/>
            </Link>            
            <div className="poke">
                {showPoke}
            </div>
        </div>
  )
}

export default BattlerCard