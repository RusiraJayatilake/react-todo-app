import React, {Component} from 'react';
import NotesList from '../notesList/notesList';
import Navbar from '../navbar/navbar';

class AddNotes extends Component {
    state = { 
        notes: []
    } 

    handleNoteAdd = (event) => {
        event.preventDefault()
        const noteTitle = document.getElementById('note-title').value;
        const noteText = document.getElementById('note-text').value;
        const notes = [...this.state.notes, {id: Date.now(), title: noteTitle, text: noteText}];
        this.setState({notes}, () => {
            document.getElementById('note-title').value = '';
            document.getElementById('note-text').value = '';
        })
    }

    render() { 
        const { notes } = this.state; 
        return (
            <React.Fragment>
                <Navbar totalNotes={notes.filter(n => n.title).length} />
                <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
                    <form className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg" onSubmit={this.handleNoteAdd}>
                        <div className="mb-4">
                            <h1 className="text-grey-darkest text-lg">Notes</h1>
                            <div className="mt-4">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-4" id="note-title" placeholder="Title" required/>
                                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker h-40 mb-4 resize-none" id="note-text" placeholder="Notes" required/>
                            </div>
                            <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Add</button>
                        </div>
                    </form>
                    
                </div>
                <div>
                    {/* Notes List */}
                    <NotesList
                        notes={this.state.notes}
                    />
                </div>

            </React.Fragment>
            
        );
    }
}
 
export default AddNotes;
