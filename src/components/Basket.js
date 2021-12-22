import React from 'react'

const Basket = (isEmpty, basket = []) => {
    return (
        <div>
            {isEmpty && <div> Hello! </div>}
        </div>
    )
}

export default Basket
