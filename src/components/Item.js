import ItemTitle from "./ItemTitle"
import ItemDescr from "./ItemDescr"
import ConceptArt from "./ConceptArt"
import clothing from './concept3.JPG'
import Button from "./Button"
import AddedToCart from "./AddedToCart"

import ButtonWithDropDown from "./ButtonWithDropDown"
import { useState, useEffect } from "react"



const initialState = {
    totalAmount:0,
    sizes: []
}



const quantData =["1","2","3","4"]


const Item = ({item, added, addToCart, quantity}) => {
    
    const [sizeState, setSizeState] = useState('Select Size.');
    const [quantState, setQuantState] = useState('Qty.')

    // const [state, dispatch ] = useReducer(reducer, initialState)

    function someFunc(e){
      setSizeState(e.target.textContent)
    }

    function someFunc2(e){
        setQuantState(e.target.textContent)
    }


    return (
        <div className='shop-item'>
        
        <ItemTitle itemName={item.name}/>
        <ItemDescr description={item.description} />
        <ConceptArt art={item.image} />
        <div className='btn-flex'>
            <ButtonWithDropDown dropDownData={item.sizes} state={sizeState} setTheState={someFunc}/>
            <ButtonWithDropDown dropDownData={quantData} state={quantState} setTheState={someFunc2} />
        </div>
        
        <Button btnClass={'add-to-cart'} text={"Add to Cart"} onclick={() => {
            
           if(sizeState !== 'Select Size'  && quantState !== 'Qty.' ){
               var x=0; 
               while(x < parseInt(quantState)){
                   addToCart(added => [...added, item]);
                   x++;
               }
              
           }
        }} />
        
        
            {/* item name
                item image
                item description
                button for size
                button for quant
                add to cart*/}
        </div>
    )
}

export default Item
