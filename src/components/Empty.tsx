import React from 'react';
import emptyListImage from '../assets/emptyList.svg';

const Empty: React.FC = () => {
  return (
    <div className='container'>
      <div className='text-center mt-5'>
        <img
          src={emptyListImage}
          className='img-fluid my-5'
          style={{ maxWidth: '20rem', height: 'auto' }}
          alt='Empty List'
        />
        <p className='text-dark fw-bold h3'>No Jobs, yet.</p>
      </div>
    </div>
  );
};

export default Empty;
