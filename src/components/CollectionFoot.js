import React from 'react'
import Text from './Text'

export const CollectionFoot = ({text1, text2}) => {
    return (
        <div className='footer'>
            <Text classStyle={"collection-text"} classPosition="foot-child" text={text1}></Text>
            <Text classStyle={"collection-text"} classPosition="foot-child" text={text2}></Text>
        </div>
    )
}
