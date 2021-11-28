import * as React from 'react';
import { Alert, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Note } from '../models/note.model';

interface ICreateNotesProps {
    notes: Note[]
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FC<ICreateNotesProps> = ({ notes, setNotes }) => {
    const [error, setError] = React.useState<string>("");

    const titleRef = React.useRef<HTMLInputElement | null>(null);
    const textRef = React.useRef<HTMLTextAreaElement | null>(null);
    const colorRef = React.useRef<HTMLInputElement | null>(null);
    
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (titleRef.current?.value === "" || textRef.current?.value === "") {
            return setError("All fields are required");
        }

        setError("");
        setNotes([...notes, {
            id: (new Date()).toString(),
            title: (titleRef.current as HTMLInputElement).value,
            text: (textRef.current  as HTMLTextAreaElement).value,
            color: (colorRef.current  as HTMLInputElement).value,
            date: (new Date()).toString()
        }])
    }

  return (
      <>
        <h2>Create Notes</h2>
        { error && <Alert variant="danger"> { error } </Alert> }

        <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control ref={titleRef} type="text" placeholder="Enter Note Title" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Text</Form.Label>
                <Form.Control ref={textRef} as="textarea" rows={3} placeholder="Enter Note Details" />
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Label htmlFor="colorInput">Color</Form.Label>
                <Form.Control ref={colorRef} type="color" id="colorInput" defaultValue="#ddd" title="choose color" />
            </Form.Group>

            <Button type="submit" variant="primary">Create</Button>
        </Form>
      </>
  );
};

export default CreateNotes;

