import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SinglePage from "./components/singlePage/SinglePage"
import Laptop from "./components/laptop/Laptop"
import UserLogin from "./components/userLogin/UserLogin"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Homepages />} />
          <Route path='/singlepage/:id' element={<SinglePage />} />
          <Route exact path='/laptop' element={<Laptop/>} />
          <Route path='/login' element={<UserLogin/>} />
          <Route path="*">"404 Not Found"</Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
