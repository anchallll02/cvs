import React from "react";

const Signup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Signup</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Signup</button>
        </form>
        <span className="close-btn" onClick={onClose}>×</span>
      </div>

      <style>{`
        .modal-overlay{
          position:fixed;
          top:0; left:0;
          width:100%; height:100%;
          background: rgba(0,0,0,0.5);
          display:flex; justify-content:center; align-items:center;
          z-index:2000;
        }
        .modal-content{
          background:white;
          padding:30px;
          border-radius:10px;
          width:90%;
          max-width:400px;
          display:flex;
          flex-direction:column;
          gap:15px;
          position:relative;
        }
        .modal-content h2{
          text-align:center;
          color:#6b21a8;
        }
        .modal-content form{
          display:flex; flex-direction:column; gap:10px;
        }
        .modal-content input{
          padding:10px;
          border:1px solid #ccc;
          border-radius:6px;
          font-size:14px;
        }
        .modal-content button{
          padding:10px;
          background:#6b21a8;
          color:white;
          border:none;
          border-radius:6px;
          cursor:pointer;
          font-weight:600;
        }
        .modal-content button:hover{
          background:#4c1d95;
        }
        .close-btn{
          position:absolute;
          top:10px; right:15px;
          font-size:24px;
          cursor:pointer;
          color:#6b21a8;
        }
      `}</style>
    </div>
  );
};

export default Signup;
