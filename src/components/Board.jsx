import React, {useState} from 'react';
import './Board.css';
import Note from './Note';


function Board() {

    const [notes, setNotes] = useState([
        {
        title: "Class Notes",
        body: "Always use constructors when extending another class"
    },
    {
        title: "My New Address",
        body: "2001 N Lonhill Phoenix, AZ 81234"
    },
    {
        title: "React Notes",
        body: "Everything in React is a component"
    }]);
    
    const addNote = () => {
        notes.push({
            title: "New Note",
            bode: "This is my new note."
        })

        setNotes({notes:notes})
    }

    // const handleEdit = () => {
    //     setEditMode()
    // }

    return (
        <div>
            <div className="div-board">
                <div className="row">
                    {notes.map(note => {
                        return <Note title={note.title} body={note.body} />
                    })}
                </div>
            </div>
            <div>
                <button className="btn btn-success add-button" onClick={addNote}>Add</button>
            </div>
        </div>
    )
}

export default Board;
