//enter code here
// Avatar should accept caption and image Url as props
// do default export
function Avatar(Props){
    const styles={

        borderRadius:"50%"
    }
    const {caption, image} = Props;
    return <div>
                <img style={styles} src={image} alt={caption} />
                <h2>{caption}</h2>
            </div>
}

export default Avatar