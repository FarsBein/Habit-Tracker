import React,{useState} from 'react';
import { Form,Button } from 'react-bootstrap';
import Axios from 'axios';

const CreateNote = () => {
    const [newNote,setNewNote] = useState({
        username: '',
        description: '',
        duration: 0,
        date: ''
    })

    const handleChange = (event) => {
        setNewNote({
            ...newNote,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmits = (event) =>{
        event.preventDefault()
        const note = {
            ...newNote
        }
        console.log(note)
        Axios.post('http://localhost:5000/notes/add',note)
            .then((res) => console.log(res.data))
            .catch((err)=> console.log(err))

    }

    return (
        <div>
            <Form >
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Topic</Form.Label>
                    <Form.Control type="text" name='username' placeholder="Topic Name" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control type="number" name='duration' placeholder="Time" onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" name='date' placeholder="Date" onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" as="textarea" rows="3" onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" onClick={handleSubmits}>Submit</Button>
            </Form>
        </div>
    );
}

export default CreateNote;
