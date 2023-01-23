import React, { useState, useEffect } from 'react'

//Images
import MountainDay from './images/mountaindaytime.jpg'
import MountainNight from './images/mountain-night.jpg'
import Logo from './images/logo.png' //Logo

//Font
import "@fontsource/syne" //Font

//Components
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import DarkModeSwitch from './components/DarkModeSwitch'
import FeaturesGrid from './components/FeaturesGrid'
import PriceCards from './components/PriceCards'
import ContentGrid from './components/ContentGrid'
import StartersGuide from './components/StartersGuide'
import Footer from './components/Footer'

function App() {

  //Links & Logo
  const [links] = useState(['HOME', 'FEATURES', 'PAGES', 'PORTFOLIO', 'BLOG', 'SHOP', 'SHORTCODES']);
  const [logo] = useState({Image: Logo})

  //State for background images *Night and Dark mode*
  const [backgroundImage, setBackgroundImage] = useState(MountainDay);
  
  const changeBackgroundImage = () => {
    setBackgroundImage(backgroundImage === MountainDay ? MountainNight : MountainDay);
  }
    
  //Dark Mode function to handle onClick event. Calls state setter function to update the theme from dark/light => light/dark
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark') //Ternary operator is used for conditional changes 
    changeBackgroundImage()
  }

  const [theme, setTheme] = useState('light');

  useEffect(() => {
      if (theme === 'dark') {
          document.documentElement.classList.add('dark');
      } else {
          document.documentElement.classList.remove('dark');
      }
  }, [theme]) //UseEffect hook is used to make the class changes whenever the 'theme' state value is changed

  return (

    <div className='dark:bg-slate-900 bg-white'>
      {/* Header, DarkMode Switch & HeroSlider Section */}
      <header>
        <div style={{height: '100vh', backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <Navbar links={links} logo={logo}/>
          <DarkModeSwitch handleThemeSwitch={handleThemeSwitch} theme={theme} />
          <div className='pt-52'>
            <Slider />
          </div>
        </div>
      </header>

      {/* Main Section conatins all of the main features on the webpage */}
      <main>
        <section>
           {/* Used Tailwinds media query selector to adjust the margin values on different screen sizes.
           All media queries can be found in the tailwind.config file in the src directory.*/}
          <div className='dark:bg-slate-900 sm:ml-4 sm:mr-4 md:ml-8 md:mr-8 lg:ml-16 lg:mr-16 xl:ml-32 xl:mr-32'>
            <FeaturesGrid />
            <PriceCards />
            <ContentGrid />
            <StartersGuide />
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer>
        <Footer />
      </footer>
    </div>

  )
}
 export default App