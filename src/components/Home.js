import Logo from "./Logo";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
        <Link to="/"> 
            <div className="container">
                
                <Logo />
            </div>
    )
        </Link>
        </>
    )
}

export default Home
