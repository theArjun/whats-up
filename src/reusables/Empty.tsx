import React from 'react';
import { useMediaQuery } from 'react-responsive';
import emptyListImage from '../assets/emptyList.svg';

interface EmptyProps {
  message: string;
}
const Empty: React.FC<EmptyProps> = ({ message }) => {
  const isMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)',
  });
  return (
    <div className='container'>
      <div className='text-center mt-5'>
        <img
          src={emptyListImage}
          className='img-fluid my-5'
          style={{
            maxWidth: isMobileDevice ? '10rem' : '20rem',
            height: 'auto',
          }}
          alt='Empty'
        />
        <p className='text-dark fw-bold  mt-5 h3'>{message}</p>
      </div>
    </div>
  );
};

export default Empty;
