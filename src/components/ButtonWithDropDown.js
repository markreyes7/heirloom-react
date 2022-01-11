import Button from "./Button"
import ButtonDropDown from "./ButtonDropDown"
import { useState, useRef, useEffect} from "react"

const ButtonWithDropDown = ({ dropDownData, state, setTheState }) => {
    const [opened, setOpen] = useState(false); 
    const drop = useRef(null);
    
     function handleClick(e){
        if(e.target.className === null){
            return;
        }
        else if(e.target.className === 'liCls'){
            setOpen(false);
        }
        else if(!e.target.closest(`.${drop.current.className}`) && opened){
            setOpen(false)
        }

     }

        

     useEffect(() => {
        document.addEventListener("click", handleClick)
        return() =>{document.removeEventListener("click", handleClick)}
     },[opened]);

        

    return (
        <div className="dropdown" ref={drop}  >
            <Button  text={state} onclick={() => setOpen(!opened)} />
           { opened && <ButtonDropDown data={ dropDownData } getClicked={setTheState} />}
        </div>
    )
}

export default ButtonWithDropDown
