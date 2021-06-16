import React, {createRef, useState} from 'react'
import './Note.css'
import PropType from 'prop-types'

function Note(props) {

    // Variables aka "States" to set Note Title and Body
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [editMode, setEditMode] = useState(false);

    // Edit button
    const handleEdit = () => {
        setEditMode(true);
    }
    // Save button
    const handleSave = () => {

        let titleContent = React.createRef();
        let bodyContent = React.createRef();

        setTitle(titleContent.current.value);
        setBody(bodyContent.current.value);
        setEditMode(false);
    }

    // Add button variables
    let titleElement, bodyElement, buttonArea; 

    // Edit button if statement
    if (editMode){
      titleElement = <textarea className="title-textarea" defaultValue={title}></textarea>;
      bodyElement = <textarea className="body-textarea" defaultValue={body}></textarea>;
      buttonArea = <div><button className="btn btn-primary" onClick={handleSave}>Save</button></div>;
    }
    else{
      titleElement = <h5 className="card-title">{title}</h5>;
      bodyElement = <p>{body}</p>; 
      buttonArea = <div><button className="btn btn-info" onClick={handleEdit}>Edit</button><button className="btn btn-danger" onClick={props.handleDelete}>Delete</button></div>;
    }

    return (
        <div className='col-sm-6'>
            <div className="card card-view">
                <div className="card-body">
                {titleElement}
                {bodyElement}
                {buttonArea}
                </div>
            </div>
 	    </div>



    // <div className="col-sm-6">
    //     <div className="card card-view cardDis">
    //         <div className="card-body">
    //             <h5 className="card-title">{title}</h5>
    //             <p>{body}</p>
    //             <button className="btn btn-info">Edit</button>
    //             <button className="btn btn-danger">Delete</button>
    //         </div>
    //     </div>
    // </div>

    )
}


export default Note;