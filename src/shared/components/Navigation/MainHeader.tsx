import "./MainHeader.css"

function MainHeader(props:any){
    return <header className="main-header">{props.children}</header>
};

export default MainHeader;