const BasketItems = ({addToCart, added, setOpenCart, display}) => {
   
    const closeCart = () =>{
        setOpenCart(!display)
    }

    return (
        <div className='cart-popup'>
            <div className="cart-bg">
            <span  className='close-x' onClick={closeCart}>&times; </span>
            <ul>
                {added.map((item,i) =>(
                    <li key={i} className='item-in-cart'>
                       
                        <p className='item-details'>Size: To Be Added with Redux</p>
                        <p className='item-details'>{item.name+ ': $'+item.price}</p>
                       
                        <div className='remove-wrapper'>
                        <button className='close' onClick={() =>{
                            
                            addToCart(added.filter((item, j) => j !==i))
                        }}> Remove From Cart &times;</button>
                        </div>
                        <div className='sizing'>
                            <img className='item-image' src={item.image} alt='clothing-item'></img>
                        </div>
                    </li>
                ))}
            </ul>
        
            </div>
        </div>
    )
}

export default BasketItems
