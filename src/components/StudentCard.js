import React from 'react';
import {Card,CardBody,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap';

function StudentCard({student, addABattler}) {
  return (
	<Card className='card'>
		<img className='studentImg' alt={`pic of ${student.name}`} src={student.avatar} />
		<CardBody>
			<CardTitle tag="h5"> {student.name}	</CardTitle>
			<CardSubtitle tag="h6"> Level {student.level} </CardSubtitle>
			<br/>
			<Button color='primary' onClick={() => addABattler(student)}> Select for Battle </Button>
		</CardBody>
	</Card>
  )
}

export default StudentCard