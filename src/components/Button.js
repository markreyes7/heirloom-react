import React from 'react'


const Button = ({onclick, text, btnClass}) => {
    return (
        <button className={btnClass} onClick={onclick}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    btnClass: 'btn'
}

export default Button
