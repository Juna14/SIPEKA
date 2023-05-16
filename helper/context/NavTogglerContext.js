import React, { createContext, useState } from 'react'


export const NavTogglerContext = createContext()

const NavTogglerProvider = ({children}) => {
    const [isNavOpen, setIsNavOpen] = useState(true)
    const toggleNav = () => { setIsNavOpen(!isNavOpen) }
  
    return (
   <NavTogglerContext.Provider value={{isNavOpen, toggleNav}}>
    {children}
   </NavTogglerContext.Provider>
  )
}

export default NavTogglerProvider