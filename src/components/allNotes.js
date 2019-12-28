import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllNotes = () => {
    const [notes, setNotes] = useState([])
    const [loading,setLoading] = useState(true)

    const getData = async () => {
        const {data} = await axios.get('http://localhost:5000/notes/')
        setNotes(data)
        setLoading(false)
        return
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap'}}>
            {loading ? 'loading...' : 
            notes.map(item => 
                <Link to={`/oneNote/${item._id}`} style={{ textDecoration: 'none' ,color: 'white' }}>
                    <br />
                        <Card bg="info" style={{ width: '18rem' }} >
                            <Card.Header >{item.username}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    <br />                    
                </Link>
            )}
        </div>
    );
}

export default AllNotes;

