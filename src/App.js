import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SinglePage from "./components/singlePage/SinglePage"
import Recommend from "./components/recommend/recommend"
import UserLogin from "./components/userLogin/UserLogin"
import Register from "./components/userLogin/Register"
import Review from "./components/review/review"
import Dashboard from "./components/dashboard/dashboard"
import Create from "./components/dashboard/create"
import Edit from "./components/dashboard/edit"

const App = () => {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Homepages />}></Route>
          <Route path='/singlepage/:id' element={<SinglePage />}></Route>
          <Route path='/recommend' element={<Recommend/>}></Route>
          <Route path='/reviews' element={<Review/>}></Route>
          <Route path='/login' element={<UserLogin/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}>
            <Route path="create" element={<Create/>}/>
            <Route path="edit" element={<Edit/>}/>
          </Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="*">"404 Not Found"</Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
