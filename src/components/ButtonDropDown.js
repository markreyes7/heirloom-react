
const ButtonDropDown = ({data = [], getClicked, }) => {

    return (
        <div className='hold'>
            <ul className='list-items'>
                {data.map((item,i) =>(
                    <li key={i} className='liCls' onClick={getClicked}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ButtonDropDown
