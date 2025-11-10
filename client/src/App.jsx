import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Contact from "./pages/contact/Contact"

function App() {

  return (
   <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Contact />} />
    </Routes>
   </>
  )
}

export default App
