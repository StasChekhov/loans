import React from "react";
import s from "./components.module.css";

export default function LoanList({ open, loans, total }) {
 return (
  <div>
   <ul>
    {loans &&
     loans.map((e) => (
      <div key={e.id} className={s.div}>
       <li key={e.id}>
        <h2 className={s.listArticle}>{e.title}</h2>
        <p className={s.listText}>Annualised return: {e.annualised_return}</p>
        <button type="button" className={s.listButton} onClick={() => open(e)}>
         Invest
        </button>
       </li>
      </div>
     ))}
   </ul>
   <div className={s.listTotalAmount}>
    <h3>Total amount available for investment :$ {total}</h3>
   </div>
  </div>
 );
}
