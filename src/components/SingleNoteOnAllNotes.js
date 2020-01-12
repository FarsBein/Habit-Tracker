import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SingleNoteOnAllNotes = ({updateData,notes}) => {


    const HandleDone = () =>{
        console.log('notes from SingleNotesOnAll: '+notes.done)
        updateData(notes._id)
            .then(window.location.reload())
    }

    const HandleDelete = (id) => {
        axios.delete(`http://localhost:5000/notes/delete/${notes._id}`)
            .then(() => console.log('Note is deleted'))
            .catch((err) => console.log("Error: "+ err))
            .then(window.location.reload())
    }



    return (
        <div>
        <br />
            <Card bg={notes.done ? "success" : "danger"} style={{ width: '18rem' }} >
                <Link to={`/oneNote/${notes._id}`} style={{ textDecoration: 'none' ,color: 'white' }}>
                    <Card.Header >{notes.topic}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {notes.description}
                        </Card.Text>
                    </Card.Body>
                </Link>
                <Card.Header >{notes.done ?
                <Button onClick={HandleDone} variant="danger">Not Done</Button> : 
                <Button onClick={HandleDone} variant="success">Done Today</Button>}
                <Button onClick={HandleDelete} variant="warning">Delete</Button>
                </Card.Header>
            </Card>  
        <br />
    </div>    
    );
}

export default SingleNoteOnAllNotes;
