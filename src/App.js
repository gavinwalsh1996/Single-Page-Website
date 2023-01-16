import React, { useState } from 'react'

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
      <Navbar links={links} logo={logo}/>
      {/* <Slider /> */}
      <DarkModeSwitch />
    </div>

  )
}

export default App