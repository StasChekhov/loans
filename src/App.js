import { useState } from "react";
import Header from "./components/Header";
import LoanList from "./components/LoanList";
import Modal from "./components/Modal";

function App() {
 const [isOpen, setIsOpen] = useState(false);
 const [modal, setModal] = useState([]);
 console.log(modal);
 return (
  <div>
   <Header />
   <LoanList
    open={(loan) => {
     setModal(loan);
     setIsOpen(true);
    }}
   />
   {isOpen && <Modal loan={modal} onClose={() => setIsOpen(false)} />}
  </div>
 );
}

export default App;
