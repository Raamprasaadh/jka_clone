import { useDispatch } from "react-redux";
import { logout } from "../../features/login";

function Header(props) {
    const dispatch=useDispatch()
    return ( <div className="flex flex-row h-14 items-center justify-around">
        <div className="w-1/6  ml-0 h-full bg-red-600 text-white pt-4 mb-4">Heading</div>
        <div className="w-1/12 mr-0 flex flex-row h-full bg-red-600 text-white pt-4 mb-4 ml-auto pl-10">{props.name}</div>
        {/**<button className="pt-0 mb-4" onClick={()=>dispatch(logout())}>Logout</button> */}
    
    </div> );
}

export default Header;