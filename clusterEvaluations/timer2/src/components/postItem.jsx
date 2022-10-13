


const postItem =({id, title, body})=>{


    return (
        <div style={{border:"1px solid #cecece", padding:"10px", margin:"10px"}}>

            <h3>{id}{". - "} {title}</h3>
            <p>{body}</p>
        </div>
    )
}

export default postItem;