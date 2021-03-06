import * as React from 'react';
import { Note } from '../models/note.model';
import Notes from './Notes';

interface INotesListProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FC<INotesListProps> = ({ notes, setNotes }) => {
    const handleDelete = (id: string) => {
        setNotes(notes.filter(note => note.id !== id))
    }
    const renderNotes = ():JSX.Element[] => {
        return notes.map(note => {
            return <Notes note={note} key={note.id} handleDelete={ handleDelete } />
        })
    }
    return (
      <>
        {notes.length === 0 ? null :<h2 className="mt-3">Notes</h2>}
        <div className="d-flex flex-wrap">
            { renderNotes() }
        </div>
      </>
  );
};

export default NotesList;
