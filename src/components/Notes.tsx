import * as React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Note } from '../models/note.model';

interface INotesProps {
    note: Note,
    handleDelete: (id: string) => void
}

const Notes: React.FC<INotesProps> = ({ note, handleDelete }) => {
  return (
      <div className="mb-3 w-100">
          <Card style={{backgroundColor: note.color}}>
              <Card.Body>
                <Card.Title className="text-break"> { note.title } </Card.Title>
                <Card.Text className="text-break"> { note.text } </Card.Text>
                <Card.Subtitle className="text-muted"> { note.date } </Card.Subtitle>
                <Button className="mt-3" variant="danger" onClick={() => handleDelete(note.id)}> Delete </Button>
              </Card.Body>
          </Card>
      </div>
    );
};

export default Notes;
