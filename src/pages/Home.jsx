import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import ServicesSection from '../components/Services'
import ProjectsSection from '../components/ProjectSection'
import StatsSection from '../components/StatsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import SuppliersSection from '../components/Fournisseurs'
import CTAHeroSection from '../components/Cta'


export default function Home() {
  return (
    <div>
      
        <Hero/>
        <AboutUs/>
        <ServicesSection/>
        <ProjectsSection/>
        <StatsSection/>
        <TestimonialsSection/>
        <SuppliersSection/>
        <CTAHeroSection/>

        

      
      
     
        
        
    </div>
    

    
  )
}


// Pas besoin de réécrire `export default` si déjà présent