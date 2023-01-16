import React, { useState } from 'react'
import Image from './images/logo.png'

//Components
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import DarkModeSwitch from './components/DarkModeSwitch'
import "@fontsource/syne" // Font
import Logo from './images/logo.png' //Logo

function App() {

  //Links & Logo
  const [links, setLinks] = useState(['HOME', 'FEATURES', 'PAGES', 'PORTFOLIO', 'BLOG', 'SHOP', 'SHORTCODES']);
  const [logo, setLogo] = useState({Image: Logo})

  return (

    <div>

      {/* Hero Section */}
      <div style={{height: '100vh', backgroundImage: `url(${require("./images/mountain.jpg")})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <Navbar links={links} logo={logo}/>
        <div className='pt-52'><Slider /></div>
      </div>

    </div>

  )
}

export default App