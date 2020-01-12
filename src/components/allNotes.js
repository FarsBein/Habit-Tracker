import React,{useEffect,useState} from 'react';
import axios from 'axios';
import SingleNoteOnAllNotes from './SingleNoteOnAllNotes';

const AllNotes = () => {
    const [notes, setNotes] = useState([])
    const [loading,setLoading] = useState(true)
    const [noteDone,setNoteDone] = useState({done:false})

    const getData = async () => {
        const {data} = await axios.get('http://localhost:5000/notes/')
        setNotes(data)
        setLoading(false)
    }

    useEffect(() => {
        getData();
    }, [])

    const findCondition = (id) => {
        const note = notes.filter((item) => item._id === id)
        return note[0].done
    }
    

    const updateData = async (id) => {
        const isDone = await findCondition(id)
        console.log(!isDone)
        axios.post(`http://localhost:5000/notes/update/${id}`,{done: !isDone})
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    } 


    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap'}}>
            {loading ? 'loading...' : 
            notes.map(item => 
                <SingleNoteOnAllNotes 
                    key={notes._id}
                    notes={item} 
                    updateData={(id)=>updateData(id)} 
                    noteDone={noteDone} 
                    setNoteDone={(newDone) => setNoteDone(newDone)}/>
            )}
        </div>
    );
}

export default AllNotes;

