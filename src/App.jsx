import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Cabinet } from './components/about'
import { Soins } from './components/services'
import { Temoignages } from './components/testimonials'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Cabinet data={landingPageData.Cabinet} />
      <Soins data={landingPageData.Soins} />
      <Temoignages data={landingPageData.Temoignages} />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
