import { useState } from "react";
import Header from "./components/Header";
import LoanList from "./components/LoanList";
import Modal from "./components/Modal";
import someLoans from "./current-loans.json";
import { replaceWithCommas, getAvailableString } from "./utilitites";

function App() {
 const [data, setData] = useState(() => ({
  loans: someLoans.loans,
  totalAmount: replaceWithCommas(
   someLoans.loans
    .reduce((acc, loan) => {
     console.log("acc", acc);
     return (acc += Number(loan.amount.split(",").join("")));
    }, 0)
    .toString()
  ),
 }));
 const [isOpen, setIsOpen] = useState(false);
 const [modal, setModal] = useState({});

 const handleModalOpen = (loan) => {
  setModal(loan);
  setIsOpen(true);
 };

 const changeTotal = (factor) => {
  setData((prevData) => ({
   ...prevData,
   totalAmount: getAvailableString(prevData.totalAmount, factor),
  }));
 };

 return (
  <div>
   <Header />
   <LoanList
    loans={data.loans}
    total={data.totalAmount}
    open={handleModalOpen}
   />
   {isOpen && (
    <Modal
     loan={modal}
     setLoan={setModal}
     changeTotal={changeTotal}
     onClose={() => setIsOpen(false)}
    />
   )}
  </div>
 );
}

export default App;
