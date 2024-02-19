import React, { useState } from 'react';
import AddMeeting from './AddMeeting';
import { Button } from '@mui/material';


const Meeting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleReservation = (formData) => {
    // Handle reservation logic here
    alert('Service reserved!');
    console.log(formData); // For example, log the form data
    closeModal(); // Close modal after reservation
  };

  return (
    <div>
      <Button variant="contained" onClick={openModal} >הזמנת תוכנית</Button>     
  
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>פרטי הזמנת תוכנית</h2>
            <AddMeeting onReservation={handleReservation} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Meeting;
