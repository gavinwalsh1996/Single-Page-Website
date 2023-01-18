import React, { useState, useEffect } from 'react'

//Images
import MountainDay from './images/mountaindaytime.jpg'
import MountainNight from './images/mountain-night.jpg'

//Components
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import DarkModeSwitch from './components/DarkModeSwitch'
import FeaturesGrid from './components/FeaturesGrid'
import "@fontsource/syne" // Font
import Logo from './images/logo.png' //Logo
import PriceCards from './components/PriceCards'
import ContentGrid from './components/ContentGrid'
import StartersGuide from './components/StartersGuide'
import Footer from './components/Footer'

function App() {

  //Links & Logo
  const [links] = useState(['HOME', 'FEATURES', 'PAGES', 'PORTFOLIO', 'BLOG', 'SHOP', 'SHORTCODES']);
  const [logo] = useState({Image: Logo})

  // Dark Mode
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    changeBackgroundImage()
  }

  const [theme, setTheme] = useState('light');

  useEffect(() => {
      if (theme === 'dark') {
          document.documentElement.classList.add('dark');
      } else {
          document.documentElement.classList.remove('dark');
      }
  }, [theme])

  //State for background image
  const [backgroundImage, setBackgroundImage] = useState(MountainDay);
  
  const changeBackgroundImage = () => {
    setBackgroundImage(backgroundImage === MountainDay ? MountainNight : MountainDay);
  }
  

  return (

    <div className='dark:bg-slate-900 bg-white'>

      {/* Hero Section */}
      <div style={{height: '100vh', backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <Navbar links={links} logo={logo}/>
        <DarkModeSwitch handleThemeSwitch={handleThemeSwitch} theme={theme} />
        <div className='pt-52'>
          <Slider />
        </div>
      </div>

      {/* Features & Pricing */}
      {/* sm:px-64 px-0 */}
      <div className='dark:bg-slate-900'>
        <FeaturesGrid />
        <PriceCards />
        <ContentGrid />
        <StartersGuide />
        <Footer />
      </div>

    </div>

  )
}
 export default App