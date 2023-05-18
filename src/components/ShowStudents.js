import React, { useState,useEffect } from 'react';
import StudentCard from './StudentCard';
import BattlerCard from './BattlerCard';
import refineBattler from '../utils/redefineBattler';

function ShowStudents() {

    const url = `https://6464f7669c09d77a62dfaf08.mockapi.io`;
    const [students,setStudents] = useState([]);
    const [battlers, setBattlers] = useState([]);
    
    useEffect(() => {
        fetchStudents();
    },[]);

    let fetchStudents = async () => {
        let students = await fetch(`${url}/students`);
        students = await students.json();
        setStudents(students);
    }

    const addABattler = async (battler) => {
        if (battlers.length >= 3) {return};
        battler = await refineBattler(battler);
        setBattlers(prev => [...prev,battler]);
    }

    const showStudents = students.map((student, i) => {
        return (
            <StudentCard key={i} student={student} addABattler={addABattler}/>
        )
    })

    const showBattlers = battlers?.map((battler, i) => {
        return (
            <BattlerCard key={i} battler={battler}/>
        )
    })

    return (
        <div>
            { battlers.length === 0 ? null : 
                <>                
                    <h5>These are the selected battlers</h5>
                    <div className='showStudents'>
                        {showBattlers}
                    </div>
                </>
            }
            { battlers.length >= 3 ? null :
                <>                
                    <h1>These are my students</h1>
                    <div className='showStudents'>
                        {showStudents}
                    </div>
                </>
            }
        </div>
    )
}

export default ShowStudents