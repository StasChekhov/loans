import React, { useState } from "react";

import someLoans from "../current-loans.json";
import s from "./components.module.css";

export default function LoanList({ open }) {
 const [loan, setLoan] = useState(someLoans.loans);
 console.log(loan);

 return (
  <div>
   <ul>
    {loan &&
     loan.map((e) => (
      <div className={s.div}>
       <li key={e.id}>
        <h2 className={s.listArticle}>{e.title}</h2>
        <p className={s.listText}>Loan details and values</p>
        <button type="button" className={s.listButton} onClick={open}>
         Invest
        </button>
       </li>
      </div>
     ))}
   </ul>
  </div>
 );
}
