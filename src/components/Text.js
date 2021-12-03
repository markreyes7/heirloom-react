const Text = ({text, classStyle, classPosition}) => {
    return (
        <div className={classPosition}>
            <p className={classStyle}> {text}</p>
        </div>
    )
}


export default Text
