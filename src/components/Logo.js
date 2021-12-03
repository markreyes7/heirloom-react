import logo from './heirloom-logo.JPG'
import Text from './Text'
const Logo = () => {
    return (
        <div className="logo">
            <div className="image-container">
                <img src={logo} alt="heirloom-logo"></img>
            </div>
            <div className="position-1">
                <Text classStyle="book-text1" text="Heirloom"></Text>
                <Text classPosition="center" classStyle="book-text2" text="Collection I"></Text>
            </div>
            
        </div>
    )
}

export default Logo
