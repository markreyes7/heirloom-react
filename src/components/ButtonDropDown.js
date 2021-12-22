//child of ButtonWithDropDown


const ButtonDropDown = ({data = [], getClicked}) => {

    return (
        <div className='hold'>
            <ul className='text-left'>
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
