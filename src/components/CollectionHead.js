import React from 'react'
import Text from './Text'

const CollectionHead = ({text1, text2}) => {
    

    return (
        <div className="thePos">
            <h2 style={{fontWeight: '100'}}>{text1}</h2>
            <p style={{fontWeight: '100'}}>{text2}</p>

            {/* <Text classStyle="collection-text" text={text1}></Text>
            <Text classStyle="collection-text" text={text2}></Text> */}
        </div>
    )
}

export default CollectionHead
