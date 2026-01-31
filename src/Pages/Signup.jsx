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

        <style>{`
          .modal-overlay {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(5, 11, 24, 0.85);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            backdrop-filter: blur(4px);
          }

          .modal-content {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(56, 189, 248, 0.25);
            border-radius: 24px;
            padding: 40px 30px;
            width: 90%;
            max-width: 400px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            position: relative;
            box-shadow: 0 10px 40px rgba(56, 189, 248, 0.2);
          }

          .modal-content h2 {
            text-align: center;
            color: #38bdf8;
            font-size: 28px;
            margin-bottom: 10px;
          }

          .modal-content form {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .modal-content input {
            padding: 12px 15px;
            border: 1px solid rgba(255,255,255,0.25);
            border-radius: 12px;
            font-size: 14px;
            background: rgba(255,255,255,0.05);
            color: #fff;
            outline: none;
            transition: 0.3s;
          }

          .modal-content input::placeholder {
            color: #cbd5e1;
          }

          .modal-content input:focus {
            border-color: #38bdf8;
            box-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
            background: rgba(255,255,255,0.08);
          }

          .modal-content button {
            padding: 12px;
            background: #38bdf8;
            color: #000;
            border: none;
            border-radius: 12px;
            cursor: pointer;
            font-weight: 600;
            transition: 0.3s;
          }

          .modal-content button:hover {
            background: #0ea5e9;
            box-shadow: 0 5px 20px rgba(56,189,248,0.4);
          }

          .close-btn {
            position: absolute;
            top: 12px;
            right: 18px;
            font-size: 26px;
            cursor: pointer;
            color: #38bdf8;
            transition: 0.3s;
          }

          .close-btn:hover {
            color: #0ea5e9;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Signup;
