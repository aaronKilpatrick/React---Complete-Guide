import ReactDOM from 'react-dom';

import { MdClose } from 'react-icons/md';

import styles from './Overlay.module.scss';

function Overlay({ onCloseCart }) {
  return (
    <>
      {ReactDOM.createPortal(
        <div id={styles.overlay}>
          <button onClick={onCloseCart}>
            <MdClose />
          </button>
        </div>,
        document.getElementById('overlay-root'),
      )}
    </>
  );
}

export default Overlay;
