# react-modal-devyoh

> Modal package for react project 14 

## Install

```bash
npm install --save devyoh-modal
```

## Usage

### Example

```jsx

# modal-devyoh-react

> Modal package for react project 14 

## Install

```bash
npm install --save devyoh-modal
```

## Usage

### Example

```jsx

import Modal from 'devyoh-modal'
import 'devyoh-modal/dist/index.css'
import { useState } from 'react'

const App = () => {
  const [openModal, setOpenModal] = useState(false)

  const modal = {
    title: 'Modal Title',
    text: 'Modal content'
  }

  return (
    <>
      <button onClick={() => setOpenModal(!openModal)}>Open modal</button>

      <Modal
        openState={openModal}
        onRequestClose={setOpenModal}
        content={modal}
      />
    </>
  )
}

export default App
```


```

