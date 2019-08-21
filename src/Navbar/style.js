import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavContainer = styled.div`
  background-color: ${props => props.color ? props.color : 'black'};
  border-bottom: 1px solid black
`

export const NavRow = styled.div`
  max-width: 1400px;
  padding: 10px 0;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`
export const NavLeft = styled.div`
  width: 33.3333%;
`

export const NavMiddle = styled.div`
  width: 33.3333%;
`

export const NavRight = styled.div`
  width: 33.3333%;
  @media (max-width: 950px) {
    a {
      display: none;
    }
  }
`

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 15px;
  text-transform: uppercase;
  color: black;
  &:hover {
    color: blue;
  }
  &.active{
    border-bottom: 1px solid black;
  }
`
export const HamburgerContainer = styled.div`
  width: 40px;
  height: 25px;
  position: relative;
  display:none;
  margin-left: auto;
  cursor: pointer;
  @media (max-width: 950px) {
    display: block
  }
`
export const HamburgerBar = styled.div`
  position: absolute;
  width: 25px;
  height: 3px;
  background-color: black;
  transition: all .50s ease-in-out;
  &:nth-child(2) {
    top: 6px
  }
  &:last-child {
    top: 12px
  }
  .open > &:first-child {
    top: 45%;
    transform: rotate(135deg);
    transition: all .50s ease-in-out;
  }
  .open > &:nth-child(2) {
    transition: all .50s ease-in-out;
    transform: rotate(-135deg)
  }

  .open > &:nth-child(3) {
    transition: all .50s ease-in-out;
    transform: rotate(-135deg)
  }
`
export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(0,0,0,0.5);
  left: -120rem;
  transition: left .50s ease-in-out;
  &.show {
    left: 0;
  }
  $ > a {
    color:white;
  }
`
