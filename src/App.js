import React, { useState, useEffect } from 'react'

//Images
import MountainDay from './images/mountain.jpg'
import MountainNight from './images/mountain-night.jpg'

//Components
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import DarkModeSwitch from './components/DarkModeSwitch'
import FeaturesGrid from './components/FeaturesGrid'
import "@fontsource/syne" // Font
import Logo from './images/logo.png' //Logo

function App() {

  //Links & Logo
  const [links, setLinks] = useState(['HOME', 'FEATURES', 'PAGES', 'PORTFOLIO', 'BLOG', 'SHOP', 'SHORTCODES']);
  const [logo, setLogo] = useState({Image: Logo})

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

    <div>

      {/* Hero Section */}
      <div style={{height: '100vh', backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <Navbar links={links} logo={logo}/>
        <div className='pt-52'>
          <Slider />
          <DarkModeSwitch handleThemeSwitch={handleThemeSwitch} theme={theme} />
        </div>
      </div>

      {/* Features */}
      <div className='dark:bg-slate-900'>
        <FeaturesGrid />
      </div>

    </div>

  )
}
 export default App