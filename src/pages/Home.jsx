import React from 'react'
import HeroSection from '../components/HeroSection'
import TopCategories from '../components/TopCategories'
import ListedJobs from '../components/ListedJobs'
import CustomerReview from '../components/Review'
import Blog from '../components/Blog'



const Home = () => {
  return (
    <div>
      <HeroSection/>
     
      <TopCategories/>
      <ListedJobs/>
      <CustomerReview/>
     
      <Blog/>
    </div>
  )
}

export default Home
