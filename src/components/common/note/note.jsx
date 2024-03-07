import React from 'react'

const Note = (props) => {
    const {title, text} = props;

    return ( 
        <div className="px-1 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">
                {text}
            </p>
        </div>
    );
}
 
export default Note;