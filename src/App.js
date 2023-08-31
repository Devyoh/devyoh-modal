import React, { useState } from 'react'

// Import modal component and style file
import Modal from 'modal-devyoh-react'
import 'modal-devyoh-react/dist/index.css'

const App = () => {

  // Create a Open/Close state for modal with useState hook
  const [openModal, setOpenModal] = useState(false)

  // Create an object with title and text key for modal content
  const modal_content = {
    title: 'Modal Title',
    text: 'Modal text'
  }

  return (
    <>
      <h1>Lorem ipsum dolor sit amet.</h1>

      {/* Change state of useState hook for control modal */}
      <button onClick={() => setOpenModal(!openModal)}>Open modal</button>


      {/**
       * Add modal component with props
       * 
       * @prop { Boolean } openState Current state of modal from useState hook
       * @prop { Function } onRequestClose Function to set state of modal from useState Hook
       * @prop { Object.<title: String, text:String> } content Object with value to display in modal
       */}
      <Modal
        openState={openModal}
        onRequestClose={setOpenModal}
        content={modal_content}
      />
    </>
  )
}

export default App