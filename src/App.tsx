import React, { useState } from 'react';

interface Note {
    id: string,
    title: string,
    text: string,
    color: string,
    date: string
}

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "Meetings",
    text: "Schedule meetings with designers",
    color: "#ddd",
    date: (new Date).toString()
  }]);

  return (
    <div>
      APP 
    </div>
  );
}

export default App;
