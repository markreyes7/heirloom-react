import Main from "./Main";
import Header from "./Header"
import Logo from "./Logo";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
        <Link to="/"> 
            <div className="container">
                {/* <Text classPosition="item" classStyle="text"text={<Time />}></Text>
                <Text classPosition="item" classStyle="text" text="By Rony Montenegro"></Text> */}
                <Logo />
            </div>
    )
        </Link>
        </>
    )
}

export default Home
