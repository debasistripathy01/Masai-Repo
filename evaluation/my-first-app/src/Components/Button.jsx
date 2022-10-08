// enter code here
// button should have mentioned styling
// do a default export


function Button({styling}){
    const styles={
        backgroundColor: "tomato",
        padding: "1rem"
    }
    return (
        <button style={styles} >click me</button>
    )
}

export default Button;