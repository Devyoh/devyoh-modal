import React from 'react'
import styles from '../styles/app.css'

/**
 * Modal React Component
 *
 * @prop { Boolean } openState Current state of modal from useState hook of parent component
 * @prop { Function } onRequestClose Function to set state of modal from useState Hook of parent component
 * @prop { Object.<title: String, text:String> } content Object with values to display in modal
 *
 * @return { (JSXComponent | null) } Return JSXComponent if openState is true or return null
 *
 */

const Modal = ({ openState, onRequestClose, content }) => {
  if (openState) {
    document.body.style.overflow = 'hidden'
    window.scrollTo(0, 0)

    return (
      <div className={styles.bgdark}>
        <div className={styles.modal}>
          <div
            className={styles.closeBtn}
            onClick={() => onRequestClose(false)}
          >
            ✖
          </div>
          <h1 className={styles.title}>{content.title}</h1>
          <h3 className={styles.text}>{content.text}</h3>
        </div>
      </div>
    )
  } else {
    document.body.style.overflow = 'auto'

    return null
  }
}

export default Modal