import { useState } from "react";
import Header from "./components/Header";
import LoanList from "./components/LoanList";
import Modal from "./components/Modal";

function App() {
 const [isOpen, setIsOpen] = useState(false);

 return (
  <div>
   <Header />
   <LoanList open={() => setIsOpen(true)} />
   {isOpen && <Modal onClose={() => setIsOpen(false)} />}
  </div>
 );
}

export default App;
