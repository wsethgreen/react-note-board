import React, {useState} from 'react'
import './Note.css'

function Note(props) {

    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);
    const [editMode, setEditMode] = useState(false);

    return (
    <div className="col-sm-6">
        <div className="card card-view cardDis">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>{body}</p>
                <button className="btn btn-info">Edit</button>
                <button className="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>

    )
}

export default Note;