import React from 'react';
//Style
import './Loading.scss';
//Components
import ReactLoading from 'react-loading';

function Loading(props) {
  return (
    <div className="lazy">
      <ReactLoading type={'bars'} color={'black'} />
    </div>
  );
}

export default Loading;