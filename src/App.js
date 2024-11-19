
import React from 'react';
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FindJob from './pages/FindJob';
import Company from './pages/Company';
import CarrerAdvice from './pages/CarrerAdvice';
import Candidate from './pages/Candidate';
import Contact from './pages/Contact';
import About from './pages/About';
import SignUp from './components/Signup';
import Login from './components/Signin';
import JobSectors from './pages/jobsectors';
import SingleJob from './pages/SingleJob';
import CompanyDetails from './pages/CompanyDetails';
import SingleBlog from './pages/singleblog';
import SingleCandidate from './pages/singleCandidate';

const App = () => {
  return (
    <BrowserRouter>
      <CustomNavbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findjob" element={<FindJob/>}/>
        <Route path="/company"   element={<Company/>}/>
        <Route path="/career-advice"  element={<CarrerAdvice/>} />
        <Route path="/candidate"  element={<Candidate/>} />
        <Route path="/about"  element={<About/>} />
        <Route path="/contact"  element={<Contact/>} />
        <Route path="/signup"  element={<SignUp/>} />
        <Route path="/signin"  element={<Login/>} />
        <Route path ="/all-sectors" element={<JobSectors/>}/>
        <Route path="/job-details/:id" element={<SingleJob/>} />
        <Route path="/company-details/:id" element={<CompanyDetails/>} />
        <Route path="/blog/:id" element={<SingleBlog/>} />
        <Route path="/candidate-details/:id" element={<SingleCandidate />} />
      </Routes>
      <br></br>
      <Footer /> 
    </BrowserRouter>
  );
};

export default App;
