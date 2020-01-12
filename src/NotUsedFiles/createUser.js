import React,{useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const CreateUser = () => {
    const [topic,settopic] = useState({topic: ''})
    
    const handleChange = (event) => {
        settopic({topic: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newUser = {
            topic: topic
        }
        console.log(newUser.topic)

        axios.post('http://localhost:5000/users/add',newUser.topic)
        .then((res) => console.log(res.data))
        .catch((err)=> console.log(err))
    }
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>topic</Form.Label>
                <Form.Control type="text" placeholder="Enter topic" onChange={handleChange}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    );
}

export default CreateUser;
