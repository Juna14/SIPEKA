import React, { useState } from 'react'

const useToggle = () => {
    const [toggle, setToggle] = useState(false)
    const toggler = () => setToggle(!toggle) 
  return {toggle, setToggle, toggler}
}

export default useToggle