import React, { useEffect } from "react";
import { useState } from "react";

import s from "./components.module.css";

export default function Modal({ onClose }) {
 const [number, setNumber] = useState("");

 useEffect(() => {
  const escapeFunction = (e) => {
   if (e.code === "Escape") {
    onClose();
   }
  };
  window.addEventListener("keydown", escapeFunction);
  return () => {
   window.removeEventListener("keydown", escapeFunction);
  };
 }, [onClose]);

 const overlayClick = (e) => {
  if (e.currentTarget === e.target) {
   onClose();
  }
 };

 return (
  <div className={s.overlay} onClick={overlayClick}>
   <div className={s.modal}>
    <div className={s.modalContent}>
     <h1 className={s.modalArticle}>Invest in Loan</h1>
     <h3 className={s.modalTitle}>Title</h3>
     <p className={s.modalAmount}>Amount available: $12,362</p>
     <p className={s.modalLoanEnd}>Loan ends in: 1 month 10 days</p>
     <h2 className={s.modalInvestment}>Investment amount</h2>
     <input
      type="text"
      value={number}
      onChange={(e) => setNumber(e.target.value)}
      name="name"
      className={s.modalInput}
     />
     <button type="button" className={s.modalButton}>
      Invest
     </button>
    </div>
   </div>
  </div>
 );
}
