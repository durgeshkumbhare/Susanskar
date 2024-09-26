import { Route, Routes } from "react-router-dom";
import Homelayout from "./pages/Homelayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Managment from "./pages/Managment";
import AdmissionForm from "./pages/AdmissionForm";
import Vision from "./pages/Vision";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homelayout />} />
        <Route path="/about" element={<About />} />
        <Route path="/management" element={<Managment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admission" element={<AdmissionForm />} />
        <Route path="/vision" element={<Vision />} />
      </Routes>
    </main>
  );
}

export default App;
