import './App.css';
import React from 'react';

// import Form from './components/Form/Form';
// import Card2 from './components/Card/Card2';
import Card from './components/Card2/Card';
// import Modal from './components/modal/Modal';

function App() {
  // Custom functions

  return (
    <div>
      {/* <Form /> */}
      {/* <Card2 /> */}
      {/* <Modal /> */}
      <Card />
    </div>
  );
}

export default App;

// modal task

// Hooks
// -- state
//   const [isOpen, setIsOpen] = useState(false);

//   // Custom functions
  // const openModal = () => setIsOpen(true);
  // const closeModal = () => setIsOpen(false);

//   return (
//     <>
      // <Button action={openModal} text='Sign up' />
      // {isOpen && (
      //   <Modal onClose={closeModal}>
      //     <RegistrationForm />
      //   </Modal>
      // )}
//     </>
//   );
// }

// export default App;
