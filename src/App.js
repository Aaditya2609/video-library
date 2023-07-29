import { Route,Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import ExplorePage from './pages/Explore';
import WatchLaterPage from './pages/WatchLaterPage';
import CategoryPage from './pages/CategoryPage';
import VideoPage from './pages/VideoPage';
import PlaylistsPage from './pages/PlaylistsPage';

function App() {
  return (
    <div className="font-[Roboto]">
      <Routes>
        <Route path="/" element={<Landing/>} />   
        <Route path="/explore" element={<ExplorePage/>} />   
        <Route path="/watchlater" element={<WatchLaterPage/>} />   
        <Route path="/category/:currCategory" element={<CategoryPage/>} /> 
        <Route path="/video/:currVideo" element={<VideoPage/>} /> 
        <Route path="/playlists" element={<PlaylistsPage/>} /> 
      </Routes>
    </div>
  );
}

export default App;
