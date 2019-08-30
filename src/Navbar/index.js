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



const NavBar = ({ routes = [], logout, isLoggedIn }) => {

  const [ isOpen, setIsOpen ] = useState(false)

  console.log(isOpen);
  console.log(isLoggedIn, 'this is the props')
  return (
    <NavContainer color={'white'}>
      <NavRow>
        <NavLeft> Cup of Sugar </NavLeft>
        <NavMiddle></NavMiddle>
        <NavRight>
          {
            routes.map((route,i) =>{
              if (isLoggedIn && route === "logout") {
                return (
                  <Link key={i} exact to={'/'} onClick={logout}>{route}</Link>
                ) 
              } else if (!isLoggedIn && route === "logout") {
                return ''
              } else if (isLoggedIn && route === "login") {
                return ''
              } else if (!isLoggedIn && route === "profile"){
                return ''
              } else if (isLoggedIn && route === "register"){
                return ''
              } else {
                return(
                  <Link key={i} exact to={`/${route}`}>{route}</Link>
                )
              }
              // route === "logout"
              // ? <Link key={i} exact to={'/'} onClick={logout}>{route}</Link>
              // : <Link key={i} exact to={`/${route}`}>{route}</Link>

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
