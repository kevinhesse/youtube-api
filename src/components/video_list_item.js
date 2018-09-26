import React from 'react';

const VideoListItem = (props) => {
  const video = props.video;
    const videoUrl = video.snippet.thumbnails.default.url;
    console.log(video)
    return (
    <li className="list-group-item">
      <div className="video-list media" >
        <div className="media-left">
          <img className="media-object" src={videoUrl} />
        </div>
      </div>

      <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
        </div>
    </li>
    )
};

export default VideoListItem