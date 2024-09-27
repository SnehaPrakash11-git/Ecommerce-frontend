import React, { useContext } from 'react'
import logo from '../Assets/logo.png'
import Button from '@mui/material/Button'
import carticon from '../Assets/carticon.png'
import trolley from '../Assets/trolley.png'
import '../Navbar/navbar.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/shopcontext';
// import {ShoppingCartOutlined} from '@ant-design/icons'


const Navbar = ()=>{

    const{getTotalCartItems} = useContext(ShopContext)
    return(
        <div className='navbar'>
            <div className='nav-logo'>
<img src={logo} alt='' />
<p><strong>SHOPPER</strong></p>
</div>
<ul className='nav-menu'>
      <Link  className="no-underline"to="/shop"><li>Shop<hr/></li></Link>  
        <Link className="no-underline"to="/mens"><li>Men<hr/></li></Link>
       <Link className="no-underline"to="/womens"><li>Women<hr/></li></Link> 
       <Link className="no-underline"to="/kids"> <li>Kids<hr/></li></Link> 
       </ul>
       <div className='nav-login-cart'>
       <Link to="/login"><Button className="loginbutton"variant="contained">Login</Button></Link>
       {/* <ShoppingCartOutlined /> */}
<Link to="/cart"><img className="carticon"src={trolley}/></Link>
<div className='carticoncount'>{getTotalCartItems()}</div>
       </div>
        </div>
       
    )
}
export default Navbar;