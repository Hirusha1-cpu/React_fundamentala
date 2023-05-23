import styled from 'styled-components'
import { useState } from 'react';
import closeMenu from '../assets/close-sm-svgrepo-com.svg'
import menu from '../assets/menu-navigation-grid-1528-svgrepo-com.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuClick, setMenuClick] = useState(false)

    return <HeaderContainer>
        <HeaderLeft>
            <h1>Hirusha<span>WEB DEV</span></h1>

        </HeaderLeft>
        <HeaderRight menuClick={menuClick}>
            <img src={menu} alt='menu' style={{ width: '20px', height: '20px', cursor: 'pointer'
         }} onClick={()=>setMenuClick(pre=>!pre?true:pre)}   />
            <ul>
                <img onClick={()=>setMenuClick(pre=>pre?false:pre)} src={closeMenu}/>
                <div>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='about'>About</Link></li>
                    <li><Link to='contact'>Contact</Link></li>
                    <li><Link to='project'>Project</Link></li>
                </div>

            </ul>
        </HeaderRight>


    </HeaderContainer>


};


const HeaderContainer = styled.header`
  padding: 17px;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: 	#f3d1f2

  img{
    width: 27px;
    object-fit: contain;

  }


  `

const HeaderLeft = styled.div`
  
  
  `

const HeaderRight = styled.nav`
  position: relative;
  ul{
    position: absolute;
    z-index: 110;
    top: -25px;
    right: ${({menuClick})=>(menuClick?'-22px':'-210px')};
    padding: 17px;
    background-color: 	#f3a1c2;
    transition: all 400ms ease-in;
    div{
      padding: 50px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 17px;

    }
  }
  img{
    width: 27px;
    object-fit: contain;
    cursor: pointer;
  }

  `


export default Header;
