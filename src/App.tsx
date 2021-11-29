import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CreateNotes from './components/CreateNote';
import Header from './components/Header';
import NotesList from './components/NotesList';
import { Note } from "./models/note.model";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    // {
    //   id: (new Date).toString(),
    //   title: "Meetings",
    //   text: "Schedule meetings with designers",
    //   color: "#ddd",
    //   date: (new Date).toString()
    // }
  ]);

  return (
    <>
      <Header />
      <Container className="mt-5 overflow-hidden">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
