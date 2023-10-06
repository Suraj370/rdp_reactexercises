import { useContext } from 'react';
import {ModalContext} from './ModalContext' 
import {FaWindowClose} from 'react-icons/fa'
function Modal({title, content}) {
    const [closeModal] = useContext(ModalContext)
  return (
      <div
          className="absolute top-0 flex h-screen w-full items-center justify-center overflow-clip bg-[#000000AA]">
          <div
              className="relative rounded bg-white shadow w-96">
              <div className='flex w-full rounded-t px-5 font-bold py-5 items-center justify-between text-3xl text-white bg-black'>
                  <div>{title}</div>
                  <button onClick={closeModal}>
                        <FaWindowClose />
                    </button>
                  
              </div>
              <div className="px-5 py-5 text-xl">
                  <div>{content}</div>
              </div>
          </div>
      </div>
  );
}

export default Modal;