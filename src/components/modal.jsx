// import React from "react";
// import ReactDOM from "react-dom";
// import Modal from "react-modal";

// //create a simple modal for me with form

// //create a simple modal for me with form

import React, { useState } from "react";

function Modal({ onSubmit }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Message Me</button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <div
            className="bg-orange-200 p-6 rounded-lg"
            style={{ zIndex: 1000 }}
          >
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <button type="submit">Submit</button>
              <button onClick={() => setIsOpen(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;

// // import React, { useState } from "react";

// // const Modal = ({ Heading, ActionName, id }) => {
// //   const [loading, setLoading] = React.useState(false);

// //   const [showModal, setShowModal] = React.useState(false);

// //   return (
// //     <div>
// //       <button
// //         className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-orange-200 rounded hover:bg-orange-400 group border-2 border-orange-400
// //         text-black py-2 px-4"
// //         type="button"
// //         onClick={() => setShowModal(true)}
// //       >
// //         Message Me
// //       </button>

// //       {showModal ? (
// //         <>
// //           <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
// //             <div className="relative w-auto my-6 mx-auto max-w-xl">
// //               {/*content*/}
// //               <div className="border-2 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none border-yellow-700">
// //                 <div className="relative p-6 flex-auto">
// //                   <p className="my-4 text-slate-500 text-lg leading-relaxed">
// //                     {Heading}
// //                   </p>
// //                 </div>
// //                 {/*footer*/}
// //                 <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
// //                   {loading ? (
// //                     <div>{""}</div>
// //                   ) : (
// //                     <button
// //                       className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
// //                       type="button"
// //                       onClick={() => setShowModal(false)}
// //                     >
// //                       Close
// //                     </button>
// //                   )}

// //                   {loading ? (
// //                     <div
// //                       className="bg-white text-blue-900 border-1 border-gray-500 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
// //                       type="primary"
// //                     >
// //                       {" "}
// //                       Deleting...
// //                     </div>
// //                   ) : (
// //                     <button
// //                       className="bg-yellow-800 text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
// //                       type="button"
// //                     >
// //                       {ActionName}
// //                     </button>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
// //         </>
// //       ) : null}
// //     </div>
// //   );
// // };

// export default Modal;
