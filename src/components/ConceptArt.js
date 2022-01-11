const ConceptArt = ({art, className}) => {
   
    return (
        <div className={className}>
            <img  style={{width: '100%'}} src={art} alt="ConceptArt"></img>
        </div>
    )
}

ConceptArt.defaultProps = {
    className: 'concept-art-b2'
}

export default ConceptArt
