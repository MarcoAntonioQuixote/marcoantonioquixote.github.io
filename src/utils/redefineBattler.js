export function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function cap1st(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const refineBattler = async (battler) => {
    if (battler.refined === true) return battler;
    let pURL = `https://pokeapi.co/api/v2/pokemon`;
    let dbURL = `https://6464f7669c09d77a62dfaf08.mockapi.io`;
    let pokemon = [];

    for (let x = 0; x < 3; x++) {
        let p = await fetch(`${pURL}/${randNum(1,151)}`, {cache: 'force-cache'});
        p = await p.json();
        p = {
            name: cap1st(p.name),
            level: randNum(5,99),
            type: p.types[0].type.name,
            avatar: p.sprites.front_default,
            p_id: p.id,
        }
        pokemon.push(p);

        fetch(`${dbURL}/students/${battler.id}/pokemon`,{
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(p)
        })
    }
    
    let b = await fetch(`${dbURL}/students/${battler.id}/`, {
        method: 'PUT',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({refined: true})
    });
    b = await b.json();
    battler = b;
    battler.pokemon = pokemon;
    return battler;
}

export default refineBattler;