import { Route, Routes } from "react-router-dom"
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import './app.css';

function App() {

  return (
    <>     
    <div className="box">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
