import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);
  return (
    // <div className='antialiased min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 flex flex-col'>
      <div>
        <Navbar />
        <HeroSection />
        <CategoryCarousel />
        <LatestJobs />
        <Footer />
      </div>
    // </div>
  )
}

export default Home