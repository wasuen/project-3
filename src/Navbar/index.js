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

const NavBar = ({ routes = [], logout }) => {
  const [ isOpen, setIsOpen ] = useState(false)

  console.log(isOpen);
  return (
    <NavContainer color={'white'}>
      <NavRow>
        <NavLeft> Cup of Sugar </NavLeft>
        <NavMiddle></NavMiddle>
        <NavRight>
          {
            routes.map((route,i) =>{
              return route === "logout"
              ? <Link key={i} exact to={'/'} onClick={logout}>{route}</Link>
              : <Link key={i} exact to={`/${route}`}>{route}</Link>

            }
            )
          }
          <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />
        </NavRight>
      </NavRow>
      <Overlay className={isOpen ? "show" : "hide"}>          
        {
          routes.map((route, i) =>
            <Link key={i} exact to={`/${route}`}>{route}</Link>
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
