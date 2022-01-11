
import Item from './Item'
import { useState, createContext} from 'react'
import Basket from './Basket'
import data from './data'


const { products } = data;
export const CartContext = createContext();

const initialState = {
    item: products,
    totalAmount: 0,
    totalItem:0
}



 
const Shop = () => {
   const [added, addToCart] = useState([]);
   
   

   

    let item1 = initialState.item[0];
    let item2 = initialState.item[1];
    return (
        
        <div className='shop'>
            <CartContext.Provider value={{}}>
                
                <Item item={item1} added={added} addToCart={addToCart} />
                <Item item={item2} added={added} addToCart={addToCart} />
                <Basket added={added} addToCart={addToCart} totalItemsInCart={added.length} />
            </CartContext.Provider>
    
           
        </div>
    )
}

export default Shop
