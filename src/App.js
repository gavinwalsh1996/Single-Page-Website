import React, { useState } from 'react'
import Navbar from './components/Navbar'
import "@fontsource/syne"
import Logo from './images/logo.png'

function App() {

  //Links & Logo
  const [links, setLinks] = useState(['HOME', 'FEATURES', 'PAGES', 'PORTFOLIO', 'BLOG', 'SHOP', 'SHORTCODES']);
  const [logo, setLogo] = useState({Image: Logo})

  return (

    <div>
      <Navbar links={links} logo={logo}/>
    </div>

  )
}

export default App