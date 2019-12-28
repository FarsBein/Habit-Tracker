import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Card, Button, Form } from 'react-bootstrap';

const OneNote = ({match}) => {
    const [singleNotes, setSingleNotes] = useState([])
    const [loading,setLoading] = useState(true)
    const [edit,setEdit] = useState(false)
    const [updated,setUpdated] = useState({
        username: '',
        description: '',
        duration: 0,
        date: ''
    })

    const getData = async () => {
        const {data} = await axios.get(`http://localhost:5000/notes/${match.params.id}`)
        setSingleNotes(data)
        setLoading(false)
        return
    }

    const updateData = () => {
        axios.post(`http://localhost:5000/notes/update/${match.params.id}`,updated)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getData();
    }, [])

    const HandleSubmit = async (event) => {
        setEdit(!edit)
    }

    const HandleChange = (event) => {
        setUpdated({
            ...updated,
            [event.target.name]: event.target.value
        })
    }

    const HandleDone = (event) => {
        updateData()

    }


    return (
        <div>
            {loading ? 'loading...' : 
            edit ? 
            <div style={{  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <br />
                    <Form>
                        <Form.Group>
                            <Form.Label>Topic</Form.Label>
                            <Form.Control type="text" name='username' placeholder="Enter Topic" onChange={HandleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Duration</Form.Label>
                            <Form.Control type="number" placeholder="Duration" onChange={HandleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control name='description' as="textarea" rows="3" onChange={HandleChange}/>
                        </Form.Group>
                        <br/>
                        <Form.Text className="text-muted">
                            If you leave any box empty it will retain the prevues information
                        </Form.Text>
                        <br />
                        <Button variant="primary" type="submit" onClick={HandleDone}>
                            Submit
                        </Button>
                    </Form>
                <br />
            </div>            
            :
            <div style={{  display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                <br />
                    <Card border="success" style={{ width: '25rem' }}>
                        <Card.Header>{singleNotes.username}</Card.Header>
                        <Card.Body>
                            <Card.Title>Duration: {singleNotes.duration}</Card.Title>
                            <Card.Title>Date: {singleNotes.date}</Card.Title>
                            <Card.Text>
                                {singleNotes.description}
                            </Card.Text>
                        </Card.Body>
                        <Button onClick={HandleSubmit} variant="info">Edit</Button>
                    </Card>                
                <br />
            </div>
            
            }
        </div>
    );
}

export default OneNote;
