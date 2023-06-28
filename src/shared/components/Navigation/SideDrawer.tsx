import ReactDOM from 'react-dom';

import './SideDrawer.css';


function SideDrawer(props:any){
    const content = <aside className='side-drawer'>{props.children}</aside>
    return ReactDOM.createPortal(content, document.getElementById('drawer-hook') as HTMLElement)
}

export default SideDrawer