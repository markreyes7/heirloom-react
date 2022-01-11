import logo from './heirloom-logo.JPG'
import Text from './Text'
import {Outlet, Link } from 'react-router-dom'


const Logo = () => {
   
    return (
        <div className="logo">
            <div className="image-container">
                <img  src={logo} alt="heirloom-logo"></img>
            </div>
            <div className="position-1">
                <Text classStyle="book-text1" text="Heirloom"></Text> 
                <Link to="./Collection" className="center">Collcection I</Link>
                
                
                
                {/* <Text classPosition="center" classStyle="book-text2" text="Collection I"></Text> */}
            </div>
            <Outlet />
            
        </div>
    )
    }
    
     
   
   


export default Logo
