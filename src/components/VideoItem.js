import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div alt={video.snippet.title} onClick={() => onVideoSelect(video)} className="video-item item">
            <img alt={video.id.videoId} className="ui image" src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
};

// optional to rewrite (props) to ({video}) and remove video two times

export default VideoItem;