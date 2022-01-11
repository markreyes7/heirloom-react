import { useState, useRef,useEffect } from 'react'
import BasketItems from './BasketItems';
import Background from "./Background"
import shopping from "./shopping-cart.png"

const Basket = ({addToCart ,added, totalItemsInCart}) => {
    const [display, setOpenCart] = useState(false);
    const ref = useRef(null);
   


    const PopUp = () =>{
        if(ref.current.className === "basket"){
            setOpenCart(!display)
            console.log("hazah")
        }
        else{
            return
        }
    }

    useEffect(() =>{
        if(display === true){
            ref.current.className = "effect";
        }
        else{
            ref.current.className = "basket"
            console.log("inital render")
            
        }
    }, [display]);

    

    return (
        <div ref={ref}  onClick={PopUp} className='basket'>
            <p>{totalItemsInCart}</p>
            {display && <BasketItems addToCart={addToCart} added={added} display={display} setOpenCart={setOpenCart}/>}
            <img src={shopping} alt='shopping cart'></img>
        </div>
    )
}

export default Basket
