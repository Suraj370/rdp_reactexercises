function Modal({title, content}) {

  return (
      <div
          className="absolute top-0 flex h-screen w-full items-center justify-center overflow-clip bg-[#000000AA]">
          <div
              className="relative rounded bg-white shadow w-96">
              <div>
                  <div>{title}</div>
                  
              </div>
              <div className="px-5 py-5 text-xl">
                  <div>{content}</div>
              </div>
          </div>
      </div>
  );
}

export default Modal;