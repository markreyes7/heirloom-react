import React from 'react'

const Button = ({onclick, text}) => {
    return (
        <button className='btn' onClick={onclick}>
            {text}
        </button>
    )
}

export default Button
