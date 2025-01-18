import React, { useState } from 'react';
import * as Toast from '@radix-ui/react-toast';
import './ToastStyles.css'; // Add your styles here
const SuccessToast = () => {
  const [open, setOpen] = useState(false);
  return (
    <Toast.Provider swipeDirection="right">
      <button
        onClick={() => {
          setOpen(true);
          setTimeout(() => setOpen(false), 3000); // Auto close after 3 seconds
        }}
        style={{ padding: '10px', backgroundColor: 'blue', color: 'white', borderRadius: '5px' }}
      >
        Show Success Toast
      </button>
      <Toast.Root
        className="toast-root"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className="toast-title">Success!</Toast.Title>
        <Toast.Description className="toast-description">
          Your action was successful.
        </Toast.Description>
        <Toast.Action asChild altText="Close toast">
          <button className="toast-close">Close</button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="toast-viewport" />
    </Toast.Provider>
  );
};
export default SuccessToast;