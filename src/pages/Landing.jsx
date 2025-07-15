
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import CommunityTestimonials from '../components/CommunitySay'
import SponsorsSection from '../components/Sponsors'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Categories/>
      <CommunityTestimonials/>
      <SponsorsSection/>
      <Footer/>
    </div>
  )
}

export default Landing