import React, { useState } from 'react'
import { routes } from '../const/routes'

import { NavContainer,
         NavRow,
         NavLeft,
         NavRight,
         NavMiddle,
         Link,
         HamburgerContainer,
         HamburgerBar,
         Overlay
 } from './style'

const NavBar = ({ routes = [] }) => {
  const [ isOpen, setIsOpen ] = useState(false)

  // // state = {
  //   isOpen = false
  // }

  // const setIsOpen = (boolean) => 
  // this.setState({
  //     isOpen:boolean
  // })

  console.log(isOpen);
  return (
    <NavContainer color={'white'}>
      <NavRow>
        <NavLeft> Cup of Sugar </NavLeft>
        <NavMiddle></NavMiddle>
        <NavRight>
          {
            routes.map(route =>
              <Link exact to={`/${route}`}>{route}</Link>
            )
          }
          <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />
        </NavRight>
      </NavRow>
      <Overlay className={isOpen ? "show" : "hide"}>          
        {
          routes.map(route =>
            <Link exact to={`/${route}`}>{route}</Link>
          )
        }</Overlay>
    </NavContainer>
  )
}

 const Hamburger = ({setIsOpen, isOpen}) =>
  <HamburgerContainer className={isOpen ? "open" : "closed"} onClick={() => setIsOpen(!isOpen)}>
    <HamburgerBar></HamburgerBar>
    <HamburgerBar></HamburgerBar>
    <HamburgerBar></HamburgerBar>
  </HamburgerContainer>

  export default NavBar
