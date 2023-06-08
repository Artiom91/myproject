import { useState } from 'react';
import Modal from 'react-modal';
import cats from '../img/portfolio/cats.png';
import cats1 from '../img/portfolio/cats1.png';
import cats2 from '../img/portfolio/cats2.png';

function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-1">
        <img className="w-full cursor-pointer transform hover:scale-95" src={cats} alt="" onClick={() => openModal(cats)} />
      </div>
      <div className="col-span-1">
        <img className="w-full cursor-pointer transform hover:scale-95" src={cats1} alt="" onClick={() => openModal(cats1)} />
      </div>
      <div className="col-span-1">
        <img className="w-full cursor-pointer transform hover:scale-95" src={cats2} alt="" onClick={() => openModal(cats2)} />
      </div>
      <h1 className="text-white text-center">simple applications in react</h1>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="modal" overlayClassName="overlay">
        {selectedImage && (
          <div className="flex items-center justify-center h-full">
            <img className="w-5/6 top-44" src={selectedImage} alt="" />
          </div>
        )}
        <button className="absolute top-0 right-0 m-4 text-white text-xl" onClick={closeModal}>
          &times;
        </button>
      </Modal>
    </div>
  );
}

export { Portfolio };
