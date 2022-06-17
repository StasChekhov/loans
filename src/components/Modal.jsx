import React, { useEffect } from "react";
import { useState } from "react";
import x from "../x.svg";

import s from "./components.module.css";

export default function Modal({ onClose, loan }) {
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
     <h2 className={s.modalTitle}>{loan.title}</h2>
     <p className={s.modalAmount}>Amount available: ${loan.available}</p>
     <p className={s.modalLoanEnd}>Loan ends in: 1 month 10 days</p>
     <h3 className={s.modalInvestment}>Investment amount</h3>
     <input
      type="text"
      value={number}
      onChange={(e) => setNumber(e.target.value)}
      name="number"
      className={s.modalInput}
     />
     <button type="button" className={s.modalButton}>
      Invest
     </button>
     <img src={x} alt="" className={s.svg} onClick={overlayClick} />
    </div>
   </div>
  </div>
 );
}
