import Text from './Text'
import Title from './Title'
import Time from './Time'
const Header = () => {
    
    return (
        <div className="header">
            <Title />
            <Time />
            <Text classStyle="header-text" classPosition="center" text="Los Angeles, CA" />
        </div>
    )
}

export default Header
