import React from 'react'
import CollectionHead from './CollectionHead'
import ConceptArt from './ConceptArt'
import { CollectionFoot } from './CollectionFoot'


const CollectionBody = ({bodyClass,headText1, headText2, logoArt, footText1, footText2, className}) => {
    return (
        <div className={bodyClass}>
            <CollectionHead text1={headText1} text2={headText2}/>
            <ConceptArt art={logoArt} className={className} />
            <CollectionFoot text1={footText1} text2={footText2}/>
        </div>
    )
}

export default CollectionBody
