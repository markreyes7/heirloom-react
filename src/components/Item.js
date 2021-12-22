import ItemTitle from "./ItemTitle"
import ItemDescr from "./ItemDescr"
import ConceptArt from "./ConceptArt"
import clothing from './concept3.JPG'
import Button from "./Button"
import Basket from "./Basket"
import  data  from './data'
import ButtonWithDropDown from "./ButtonWithDropDown"
import { useState } from "react"


const { products } = data;
const quantData =["1","2","3","4","5"]


const Item = () => {
    const [sizeState, setSizeState] = useState('Select Size.')
    return (
        <div className='box'>
        <ItemTitle itemName="Clothing Piece 1" />
        <ItemDescr description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit pellentesque habitant." />
        <ConceptArt art={clothing} />
        <ButtonWithDropDown dropDownData={products[0].sizes} fromComp={"Select Size"}/>
        <ButtonWithDropDown dropDownData={quantData} fromComp={"Select Quantity"} />
        <Button text={"Add to Cart"}/>
        <Basket isEmpty={true} />
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
