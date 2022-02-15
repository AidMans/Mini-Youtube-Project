import axios from 'axios';
import React from 'react';
import '../style.css';
import SearchBar from './SearchBar';
import { YOUTUBE_API_KEY } from '../apikey';
import Loader from './Loader';
import PLayList from './PLayList';
import VideoItem from './VideoItem';

const App = () => {
    const [videoList, setVideoList] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [selectedVideo, setSelectedVideo] = React.useState(null);

    console.log(selectedVideo);
    const handleFormSubmit = (searchTerm) => {
        setSelectedVideo(null);
        setVideoList([]);
        setIsLoading(true);
        axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                part: "snippet",
                type: "video",
                maxResults: 10,
                key: YOUTUBE_API_KEY,
                q: searchTerm
            }
        })
        .then(res => {
            setIsLoading(false);
            setVideoList(res.data.items)
        });
    }
    return (
        <div className="app">
            <SearchBar handleFormSubmit={handleFormSubmit} />
            <Loader isLoading={isLoading} />
            <div className="video-content">
                {Boolean(selectedVideo) && <VideoItem selectedVideo={selectedVideo} />}
                <PLayList
                    videoList={videoList}
                    setSelectedVideo={setSelectedVideo}
                    shouldShrink={Boolean(selectedVideo)}
                />
            </div>
        </div>
    )
}

export default App;