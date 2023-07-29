import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { v4 as uuid } from 'uuid'

const categories = [
    {
      _id: uuid(),
      thumbnail:
        'https://i.ytimg.com/vi/D6QM3Xed2J0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAf7CiFYfUks7dtieegGd3O_eK1hg',
      src: 'https://www.youtube.com/embed/D6QM3Xed2J0',
      category: 'Origami',
    },
    {
      _id: uuid(),
      thumbnail:
        'https://i.ytimg.com/vi/cScuMgYHKeM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDD_1sAD2_ui20Zj1zIv6Fux5UkOQ',
      src: 'https://www.youtube.com/embed/cScuMgYHKeM',
      category: 'Kirigami',
    },
    {
      _id: uuid(),
      thumbnail:
        'https://i.ytimg.com/vi/HouoBQcr3zU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNFI1TM_2gcAVp49ZA14dHh-cC2g',
      src: 'https://www.youtube.com/embed/HouoBQcr3zU',
      category: 'Clay Modeling',
    },
    {
      _id: uuid(),
      thumbnail:
        'https://i.ytimg.com/vi/CJ7LQXgp81w/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-UdpvOWsImcY4MX8ITgBa7PbOlw',
      src: 'https://www.youtube.com/embed/CJ7LQXgp81w',
      category: 'Stop Motion',
    },
    {
      _id: uuid(),
      thumbnail:
        'https://i.ytimg.com/vi/3a6A3_08jNo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJzraSVgeIfFINQtGxqh87dVqeZw',
      src: 'https://www.youtube.com/embed/3a6A3_08jNo',
      category: 'Pottery',
    },
    {
      _id: uuid(),
      thumbnail:
        'https://i.ytimg.com/vi/koWSpTFYLok/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBx_E-4zOrohXmMU5FGlv-zn-yTvg',
      src: 'https://www.youtube.com/embed/koWSpTFYLok',
      category: 'Quilling',
    },
  ]
  
const videos = [
      {
        _id: 19,
        title: 'Origami Swan - Simple and Elegant',
        views: 2879,
        chips: ['origami', 'swan', 'paper', 'elegant'],
        thumbnail: 'https://picsum.photos/300/174',
        src: 'https://www.youtube.com/embed/GBIIQ0kP15E',
        category: 'Origami',
        creator: 'PaperCraftPro',
      },
      {
        _id: 20,
        title: 'Kirigami Flower Bouquet - Beautiful Handmade Gift',
        views: 1756,
        chips: ['kirigami', 'flower bouquet', 'paper', 'gift'],
        thumbnail: 'https://picsum.photos/300/175',
        src: 'https://www.youtube.com/embed/GBIIQ0kP15E',
        category: 'Kirigami',
        creator: 'Crafty Delights',
      },
      {
        _id: 21,
        title: 'Sculpting Animals from Polymer Clay - Step by Step Guide',
        views: 2251,
        chips: ['sculpture', 'polymer clay', 'animals', 'crafts'],
        thumbnail: 'https://picsum.photos/300/176',
        src: 'https://www.youtube.com/embed/GBIIQ0kP15E',
        category: 'Clay Modeling',
        creator: 'CraftyCritters',
      },
      {
        _id: 22,
        title: 'Stop Motion Short Film - Adventure in Toyland',
        views: 3172,
        chips: ['stop motion', 'short film', 'toyland', 'adventure'],
        thumbnail: 'https://picsum.photos/300/177',
        src: 'https://www.youtube.com/embed/GBIIQ0kP15E',
        category: 'Stop Motion',
        creator: 'ToyStoryMakers',
      },
      {
        _id: 23,
        title: 'Handmade Pottery Vases - Decorating with Ceramic Glaze',
        views: 2879,
        chips: ['pottery', 'clay', 'vases', 'ceramic glaze'],
        thumbnail: 'https://picsum.photos/300/178',
        src: 'https://www.youtube.com/embed/GBIIQ0kP15E',
        category: 'Pottery',
        creator: 'CeramicArtistry',
      },
      {
        _id: 24,
        title: 'Quilling Art Techniques - Creating Intricate Designs',
        views: 1756,
        chips: ['quilling', 'paper art', 'techniques', 'intricate designs'],
        thumbnail: 'https://picsum.photos/300/179',
        src: 'https://www.youtube.com/embed/GBIIQ0kP15E',
        category: 'Quilling',
        creator: 'ArtfulQuills',
      },
      {
        _id: 25,
        title: 'Origami Crane Mobile - DIY Home Decor',
        views: 2251,
        chips: ['origami', 'crane', 'mobile', 'paper', 'home decor'],
        thumbnail: 'https://picsum.photos/301/174',
        src: 'https://www.youtube.com/embed/GBIIQ0kP15E',
        category: 'Origami',
        creator: 'HomeCraftHacks',
      },
      {
        _id: 26,
        title: 'Kirigami Birthday Pop-Up Box - Surprise Gift',
        views: 3172,
        chips: ['kirigami', 'birthday pop-up box', 'paper', 'surprise gift'],
        thumbnail: 'https://picsum.photos/302/174',
        src: 'https://www.youtube.com/embed/GBIIQ0kP15E',
        category: 'Kirigami',
        creator: 'GiftsFromHeart',
      },
      {
        _id: 27,
        title: 'Sculpting Fantasy Creatures - Unleash Your Imagination',
        views: 2879,
        chips: ['sculpture', 'fantasy creatures', 'clay', 'imagination'],
        thumbnail: 'https://picsum.photos/303/174',
        src: 'https://www.youtube.com/embed/GBIIQ0kP15E',
        category: 'Clay Modeling',
        creator: 'FantasyArtWorks',
      },
      {
        _id: 28,
        title: 'Stop Motion Animation Contest - Show Your Skills',
        views: 1756,
        chips: ['stop motion', 'animation contest', 'competition'],
        thumbnail: 'https://picsum.photos/304/174',
        src: 'https://www.youtube.com/embed/GBIIQ0kP15E',
        category: 'Stop Motion',
        creator: 'AnimateMasters',
      },
      {
        _id: 29,
        title: 'Pottery Wheel Techniques - Creating Stunning Bowls',
        views: 2251,
        chips: ['pottery', 'clay', 'wheel techniques', 'bowls'],
        thumbnail: 'https://picsum.photos/305/174',
        src: 'https://www.youtube.com/embed/GBIIQ0kP15E',
        category: 'Pottery',
        creator: 'ArtisticPots',
      },
      {
        _id: 30,
        title: 'Quilling Greeting Cards - Handmade Cards for Every Occasion',
        views: 3172,
        chips: ['quilling', 'greeting cards', 'paper', 'occasions'],
        thumbnail: 'https://picsum.photos/306/174',
        src: 'https://www.youtube.com/embed/GBIIQ0kP15E',
        category: 'Quilling',
        creator: 'CraftyGreetings',
      },
      {
        _id: 31,
        title: 'Origami Elephant - Step-by-Step Tutorial',
        views: 2879,
        chips: ['origami', 'elephant', 'paper', 'tutorial'],
        thumbnail: 'https://picsum.photos/307/174',
        src: 'https://www.youtube.com/embed/GBIIQ0kP15E',
        category: 'Origami',
        creator: 'OrigamiWonderland',
      },
      {
        _id: 32,
        title: 'Kirigami Art Collage - Combining Paper Shapes',
        views: 1756,
        chips: ['kirigami', 'art collage', 'paper', 'shapes'],
        thumbnail: 'https://picsum.photos/308/174',
        src: 'https://www.youtube.com/embed/GBIIQ0kP15E',
        category: 'Kirigami',
        creator: 'CreativeFolds',
      },
      {
        _id: 33,
        title: 'Sculpting Realistic Portraits - Mastering Human Faces',
        views: 2251,
        chips: ['sculpture', 'realistic portraits', 'clay', 'human faces'],
        thumbnail: 'https://picsum.photos/309/174',
        src: 'https://www.youtube.com/embed/GBIIQ0kP15E',
        category: 'Clay Modeling',
        creator: 'PortraitsInClay',
      },
      {
        _id: 34,
        title: 'Stop Motion Animation Tips and Tricks',
        views: 3172,
        chips: ['stop motion', 'animation', 'tips', 'tricks'],
        thumbnail: 'https://picsum.photos/310/174',
        src: 'https://www.youtube.com/embed/GBIIQ0kP15E',
        category: 'Stop Motion',
        creator: 'AnimateMagic',
      },
      {
        _id: 35,
        title: 'Pottery Art Exhibition - Celebrating Local Artists',
        views: 2879,
        chips: ['pottery', 'clay', 'art exhibition', 'local artists'],
        thumbnail: 'https://picsum.photos/311/174',
        src: 'https://www.youtube.com/embed/GBIIQ0kP15E',
        category: 'Pottery',
        creator: 'ArtisticExpressions',
      },
      {
        _id: 36,
        title: 'Quilling 3D Wall Art - Adding Depth to Paper Designs',
        views: 1756,
        chips: ['quilling', '3d wall art', 'paper', 'designs'],
        thumbnail: 'https://picsum.photos/312/174',
        src: 'https://www.youtube.com/embed/GBIIQ0kP15E',
        category: 'Quilling',
        creator: 'PaperArtDimensions',
      },
    ]

export const VideoContext=createContext();
const useVideo=()=>useContext(VideoContext);


const VideoProvider=({children})=>{
    const [category,setCategory]=useState(categories);
    const [allVideos,setAllVideos]=useState(videos);
    const localtemp=localStorage.getItem("watchlater");
    const localnotes=localStorage.getItem("notes");
    const localplaylists=localStorage.getItem("playlists");
    const [watchLater,setWatchLater]=useState(JSON.parse(localtemp)??[]);
    const [notes,setNotes]=useState(JSON.parse(localnotes)??[]);
    const [playlists,setplaylists]=useState(JSON.parse(localplaylists)??[]);
    const [notesupdate,setnotesupdate]=useState(false);
    
    useEffect(() => {
      localStorage.setItem("watchlater", JSON.stringify(watchLater));
    }, [watchLater]);
    
    useEffect(() => {
      localStorage.setItem("notes", JSON.stringify(notes));
      setnotesupdate(!notesupdate)
    }, [notes]);

    useEffect(() => {
      localStorage.setItem("playlists", JSON.stringify(playlists));
    }, [playlists]);

    return(
        <VideoContext.Provider value={{category,allVideos,watchLater,setWatchLater,notes,setNotes,playlists,setplaylists,notesupdate}}>
            {children}
        </VideoContext.Provider>
    )
}
export {VideoProvider,useVideo};