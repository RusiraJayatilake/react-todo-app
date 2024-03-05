import React from "react";

const NotesList = ({ notes }) => {
    if (notes.length === 0){
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
                            <div className="px-1 py-4">
                                <div className="font-bold text-xl mb-2">{note.title}</div>
                                <p className="text-gray-700 text-base">
                                    {note.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default NotesList;

