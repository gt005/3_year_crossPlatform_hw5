import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Contacts from '../Contacts';
import { modalStyle } from './style';


const BodyHead = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="body-head grid-container">
      <h1 className="body-head__main-text">Эксклюзивная и нестандартная мебель для дома</h1>
      <div className="body-head__description-text mobile text-normal">Мы можем произвести любую мебель для вашего проекта и найти производственное решение любой задумки.</div>
      <a href="#" className="body-head__order-link text-large" onClick={handleOpen}>Заказать проект</a>
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle}>
          <Contacts />
        </div>
      </Modal>
    </div>
  );
}

export default BodyHead;
