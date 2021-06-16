import React, {useState} from 'react';
import './Board.css';
import Note from './Note';


function Board() {

    const [notes, setNotes] = useState([]);

    // Add button
    const addNote = () => {
        notes.push({id: Date.now});
        setNotes([notes]);
    }

    // Delete button
    const handleDelete = (id) => {
        let newNoteArr = notes;
        newNoteArr.map((note, idx) => {
            if (id === note.id) {
                newNoteArr.splice(idx, 1);
            }
        })
        setNotes(newNoteArr);
    }

    // Return statement
    return (
        <div>
            <div className="div-board">
                <div className="row">
                    {notes.map(note => {
                        return <Note 
                                title={note.title} 
                                body={note.body} 
                                handleDelete={handleDelete}/>
                    })}
                </div>
            </div>
            <div>
                <button className="btn btn-success add-button" onClick={addNote}>Add Note</button>
            </div>
        </div>
    )
}

export default Board;
