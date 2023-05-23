import { useState } from 'react';
import closeMenu from '../assets/close-sm-svgrepo-com.svg'
import menu from '../assets/menu-navigation-grid-1528-svgrepo-com.svg'

const Header = () => {
    const [menuClick, setMenuClick]= useState(false)
  

   return (
    <header className="header_container">
      <h1>
        Hirusha Frenando
        <br/>
        <span>WeB DevElopeR</span>
      </h1>
      <nav>
        <ol>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Project</li>
        </ol>
        <div className='header_menuClick'>

        <img  src={menu} alt='menu'
               style={{ width: '20px', height: '20px', cursor:'pointer' }}
               onClick={()=>{
                 setMenuClick(pre=>!pre?true:pre)
 
               }}/>
        </div>
        <ul style={{
            right:`${menuClick?'-20px':'-250px'}`,
            display:`${menuClick ? 'flex':'none'}`
        }}>
          <div className='header_menuClose'>
              <img src={closeMenu} alt='close'
              style={{ width: '20px', height: '20px' , cursor:'pointer'}}
              onClick={()=>{
                setMenuClick(pre=>pre?false:pre)
              }}
              />
          </div>
          <div className='header_menu'>
              

          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Project</li>
          </div>
        </ul>
      </nav>
    </header>
  );
  };
  
  export default Header;
  