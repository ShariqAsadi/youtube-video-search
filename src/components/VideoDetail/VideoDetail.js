import React from 'react';

const VideoDetail = ({ video }) => {
  return (
    <>
      {video ? (
        <div>
          <div className='ui embed'>
            <iframe
              title='video player'
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </div>
          <div className='ui segment'>
            <h4>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default VideoDetail;
