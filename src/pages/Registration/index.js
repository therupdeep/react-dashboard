import React from 'react';

const Registration = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'rgb(255,228,225)',
      }}
    >
      <div class='card' style={{ width: '30rem' }}>
        <div class='card-body'>
          <h5 class='card-title'>Welcome to</h5>
          <h6 class='card-subtitle mb-2 text-muted'>
            Create your account to start selling
          </h6>
          <p class='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href='#' class='card-link'>
            Card link
          </a>
          <a href='#' class='card-link'>
            Another link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registration;
