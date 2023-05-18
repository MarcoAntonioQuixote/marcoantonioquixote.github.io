import React, { useState, useEffect } from 'react';
import {Form,FormGroup,Label,Input, FormText, Button} from 'reactstrap';
import { randNum } from '../utils/redefineBattler';


function AddAStudent() {

    let [student, setStudent] = useState({});

    const handleChange = (e) => {
        let prop = e.target.name;
        let val = e.target.value;
        setStudent(prev => ({...prev, [prop]: val}));
    }

    const handleSubmit = (e) => {
        let url = `https://6464f7669c09d77a62dfaf08.mockapi.io`;
        e.preventDefault();
        console.log('submitting for ',student);

        student.level = randNum(1,100);

        fetch(`${url}/students`, {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(student),
        })
    }

  return (
    <Form onSubmit={handleSubmit} >
        <Input
            name="name" onChange={handleChange}
            placeholder="What's your name, student?"
            type="text"
        />
        <Input
            name="avatar" onChange={handleChange}
            placeholder="Image URL of yourself"
            type="text"
        />
        <Button>
            Submit
        </Button>
    </Form>
  )
}

export default AddAStudent