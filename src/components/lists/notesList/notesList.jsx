import React from "react";
import Note from '../../common/note/note'

const NotesList = ( props ) => {
    const { notes, onDelete } = props;

    if (props.notes.length === 0){
        return (
            <div className="flex items-center justify-center">
                <p className="text-gray-700">No notes to display</p>
            </div>
        );
    }

    return ( 
        <div className="flex items-center justify-center">
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                    {notes.map(note => (
                        <div className="bg-white rounded-lg border p-4" key={note.id}>
                            <Note 
                                title={note.title}
                                text={note.text}
                                onDelete={()=> onDelete(note.id)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default NotesList;

