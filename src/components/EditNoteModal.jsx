export function EditNoteModal({ selectedNote, editedNoteText, setEditedNoteText, onSave, onClose }) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-70 z-100">
        <div className="bg-white p-4">
          <button className="m-2 p-3 bg-[#29b9f0ff] text-white rounded font-bold" onClick={onClose}>
            X
          </button>
          <div className="bg-white flex flex-col items-center p-2 justify-center">
            <input
              className="border-2 w-full border-black rounded p-2"
              placeholder="Edit Note"
              value={editedNoteText}
              onChange={(e) => setEditedNoteText(e.target.value)}
            />
            <button className="m-2 p-3 bg-[#29b9f0ff] text-white rounded font-bold" onClick={onSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
  