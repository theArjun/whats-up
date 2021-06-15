import { Toaster } from 'react-hot-toast';
import { useMediaQuery } from 'react-responsive';

const Toast = () => {
  const isMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)',
  });
  return (
    <Toaster
      position={isMobileDevice ? 'top-center' : 'bottom-right'}
      toastOptions={{
        duration: isMobileDevice ? 1000 : 2000,
        icon: '🔔',
        style: {
          color: '#333',
        },
        success: {
          style: {
            background: 'lightgreen',
          },
        },
        error: {
          style: {
            background: '#ff9999',
            color: '#333',
          },
        },
      }}
    />
  );
};

export default Toast;
