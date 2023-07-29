import React, { useState } from 'react';
import { useVideo } from '../context/VideoContext';

function NotesModal({ setShowNotesModal, videoid }) {
  const { notes, setNotes } = useVideo();
  const [note, setNote] = useState('');

  const handleAddNote = () => {
    const temp = { _id: videoid, text: note };
    const temp2 = [...notes, temp];
    setNotes(temp2);
    setShowNotesModal(false);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-70 z-100">
      <div className="bg-white p-4">
        <button
          className="m-2 p-3 bg-[#29b9f0ff] text-white rounded font-bold"
          onClick={() => setShowNotesModal(false)}
        >
          X
        </button>
        <div className="bg-white flex flex-col items-center p-2 justify-center">
          <input
            className="border-2 w-full border-black rounded p-2"
            placeholder="Add Note"
            onChange={(e) => setNote(e.target.value)}
            value={note}
          />
          <button
            className="m-2 p-3 bg-[#29b9f0ff] text-white rounded font-bold"
            onClick={handleAddNote} 
          >
            Add note
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotesModal;
