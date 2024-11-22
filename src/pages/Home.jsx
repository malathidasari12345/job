import React from 'react'
import HeroSection from '../components/HeroSection'
import TopCategories from '../components/TopCategories'
import ListedJobs from '../components/ListedJobs'
import CustomerReview from '../components/Review'
import Blog from '../components/Blog'
import TestimonialSection from '../components/Review'



const Home = () => {
  return (
    <div>
      <HeroSection/>
     
      <TopCategories/>
      <ListedJobs/>
      {/* <CustomerReview/> */}
      <TestimonialSection/>
     
      <Blog/>
    </div>
  )
}

export default Home
