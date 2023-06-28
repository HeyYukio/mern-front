import ReactDOM from "react-dom";

import "./Backdrop.css";

function Backdrop(props: any) {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById("backdrop-hook") as HTMLElement
  );
}

export default Backdrop;
