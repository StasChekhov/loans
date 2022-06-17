import React, { useState } from "react";
import s from "./components.module.css";

import someLoans from "../current-loans.json";

export default function LoanList({ open }) {
 const [loan, setLoan] = useState(someLoans.loans);
 console.log(loan);

 return (
  <div>
   <ul>
    {loan &&
     loan.map((e) => (
      <div key={e.id} className={s.div}>
       <li key={e.id}>
        <h2 className={s.listArticle}>{e.title}</h2>
        <p className={s.listText}>Loan details and values</p>
        <button type="button" className={s.listButton} onClick={() => open(e)}>
         Invest
        </button>
       </li>
      </div>
     ))}
   </ul>
   <div className={s.listTotalAmount}>
    <h3>Total amount available for investment : $ {loan[1].amount}</h3>
   </div>
  </div>
 );
}
