import Clients from "./components/Clients"
import DedicatedTeam from "./components/DedicatedTeam"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ServicesSection from "./components/ServicesSection"
import Software from "./components/Software"

function App() {

  return (
    <>
     <Navbar/>
     <ServicesSection/>
     <Clients/>
     <Software/>
     <DedicatedTeam/>
     <Footer/>
    </>
  )
}

export default App
