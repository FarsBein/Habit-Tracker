import React,{useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const CreateUser = () => {
    const [username,setUsername] = useState({username: ''})
    
    const handleChange = (event) => {
        setUsername({username: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newUser = {
            username: username
        }
        console.log(newUser.username)

        axios.post('http://localhost:5000/users/add',newUser.username)
        .then((res) => console.log(res.data))
        .catch((err)=> console.log(err))
    }
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" onChange={handleChange}/>
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
