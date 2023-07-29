import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useVideo } from '../context/VideoContext';
import { AiOutlineClockCircle, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { MdPlaylistAdd } from 'react-icons/md';
import { TfiWrite } from 'react-icons/tfi';
import NotesModal from './NotesModal';
import { EditNoteModal } from './EditNoteModal';
import PlaylistModal from './PlaylistModal';

function SingleVideo() {
  const { currVideo } = useParams();
  const { allVideos, category, watchLater, setWatchLater, notes, setNotes,notesupdate } = useVideo();
  const Video = allVideos.find(item => item._id === parseInt(currVideo));
  const temp = category.find(items => items.category === Video.category);
  const [watchLaterItems, setWatchLaterItems] = useState(new Set(watchLater.map(item => item._id)));
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [videonotes, setVideonotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [editedNoteText, setEditedNoteText] = useState("");

  useEffect(() => {
    const localtemp = localStorage.getItem("notes");
    const parseddata = JSON.parse(localtemp)?.filter(
      (item) => item._id === parseInt(currVideo)
    );
    setVideonotes(parseddata);
  }, [currVideo, notes,notesupdate]);

  useEffect(() => {
    const localtemp = localStorage.getItem('watchlater');
    const parsedData = JSON.parse(localtemp) ?? [];
    setWatchLater(parsedData);
  }, [setWatchLater]);

  useEffect(() => {
    setWatchLaterItems(new Set(watchLater.map(item => item._id)));
    localStorage.setItem('watchlater', JSON.stringify(watchLater));
  }, [watchLater]);

  const HandleWatchLater = item => {
    if (watchLaterItems.has(item._id)) {
      const temp = new Set(watchLaterItems);
      temp.delete(item._id);
      setWatchLaterItems(temp);
      setWatchLater(prevWatchLater => prevWatchLater.filter(watchItem => watchItem._id !== item._id));
    } else {
      setWatchLaterItems(prevWatchLater => new Set(prevWatchLater).add(item._id));
      setWatchLater(prevWatchLater => [...prevWatchLater, item]);
    }
  };

  const handleDeleteNote = item => {
    const updatedNotes = notes.filter(note => note.text !== item.text);
    setNotes(updatedNotes);
  };

  const handleEditNote = item => {
    setSelectedNote(item);
    setEditedNoteText(item.text);
  };

  const handleSaveEditedNote = () => {
    if (selectedNote) {
      const updatedNotes = notes.map(note =>
        note._id === selectedNote._id ? { ...note, text: editedNoteText } : note
      );
      setNotes(updatedNotes);
      setSelectedNote(null);
      setEditedNoteText('');
    }
  };

  return (
    <div className="w-[50%]">
      <div className="flex flex-col justify-center ">
        <div className="mt-8 flex items-center justify-center">
          <iframe
            width="800"
            height="420"
            src={Video.src}
            title="YouTube Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="flex mt-4 gap-4 items-center justify-between">
          <div className="flex items-center gap-4">
            <img className="h-10 w-10 rounded-full" src={temp.thumbnail} alt={temp.category} />
            <div>
              <p className="font-[500] text-md">{Video.title}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button onClick={() => HandleWatchLater(Video)}>
              <AiOutlineClockCircle
                className={`m-1 text-2xl ${watchLaterItems.has(Video._id) ? 'text-[#29b9f0ff]' : ''}`}
              />
            </button>
            <button onClick={() => setShowPlaylistModal(true)}>
              <MdPlaylistAdd className={`m-1 text-2xl`} />
            </button>
            <button onClick={() => setShowNotesModal(true)}>
              <TfiWrite className={`m-1 text-xl`} />
            </button>
          </div>
        </div>
        <hr className="border-2 mt-2 border-[rgba(0,0,0,0.6)] " />
        <h1 className="text-3xl mt-2 font-bold">My Notes</h1>
        {videonotes.map(item => (
          <div className="flex justify-between text-xl" key={item._id}>
            <div>{item.text}</div>
            <div className="flex gap-2">
              <button>
                <AiOutlineEdit onClick={() => handleEditNote(item)} />
              </button>
              <button>
                <AiOutlineDelete onClick={() => handleDeleteNote(item)} />
              </button>
            </div>
          </div>
        ))}
      </div>
      {showNotesModal && <NotesModal setShowNotesModal={setShowNotesModal} videoid={parseInt(currVideo)} />}
      {selectedNote && (
        <EditNoteModal
          selectedNote={selectedNote}
          editedNoteText={editedNoteText}
          setEditedNoteText={setEditedNoteText}
          onSave={() => handleSaveEditedNote()}
          onClose={() => setSelectedNote(null)}
        />
      )}
      {showPlaylistModal && <PlaylistModal setShowPlaylistModal={setShowPlaylistModal} Video={Video} />}
    </div>
  );
}

export default SingleVideo;
