import Button from "./Button"
import ButtonDropDown from "./ButtonDropDown"
import { useState } from "react"

const ButtonWithDropDown = ({ dropDownData, fromComp, fromCompFunc }) => {
    const [opened, setOpen] = useState(false); 
    const [selection, setSelection] = useState(fromComp)
    
    function getClicked(e){
       setSelection(e.target.textContent);
       setOpen(false);
    }

    return (
        <div className="dropdown" >
            <Button text={selection} onclick={() => setOpen(!opened)} />
           { opened && <ButtonDropDown  data={ dropDownData } getClicked={getClicked} />}
        </div>
    )
}

export default ButtonWithDropDown
