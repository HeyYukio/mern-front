import './Avatar.css'

function Avatar(props:any){
    return (
        <div className='avatar ${props.calssName}' style={props.style}>
            <img src={props.image} style={{width: props.width, height:props.width}} alt={props.alt} />
        </div>
    )
} 

export default Avatar;
