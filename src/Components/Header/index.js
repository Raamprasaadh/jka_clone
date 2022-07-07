import { useDispatch } from "react-redux";
import { logout } from "../../features/login";

function Header(props) {
    const dispatch=useDispatch()
    return ( <div><div>Hello {props.name}</div>
    <button onClick={()=>dispatch(logout())}>Logout</button>
    </div> );
}

export default Header;