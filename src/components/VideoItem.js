import React from 'react';
import VideoPlayer from './VideoPlayer';

const VideoItem = ({selectedVideo}) => {
    return (
        <div className="video">
            <VideoPlayer videoId={selectedVideo.id.videoId} />
            {/* VideoDescription */}
        </div>
    )
}

export default VideoItem;