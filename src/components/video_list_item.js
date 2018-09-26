import React from 'react';

const VideoListItem = (props) => {
    const videoUrl = video.snippet.thumbnails.default.url;
    const video = props.video;
    console.log(video)
    return (
    <li className="list-group-item">
      <div className="video-list media" >
        <div className="media-left">
          <img className="media-object" />
        </div>
      </div>

      <div className="media-body">
        <div className="media-heading">
        </div>
      </div>
    </li>
    )
};

export default VideoListItem