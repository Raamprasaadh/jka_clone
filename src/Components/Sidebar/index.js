import { Link } from "react-router-dom";

function SideBar() {
    return ( <div className="flex flex-col divide-y-2 w-1/6 space-y-2">
        <div className="text-red-500 text-left pl-10">Menu</div>
          <Link to="/prod" className="text-left pl-10">Production Mode</Link>
          <Link to="/reports" className="text-left pl-10">Reports</Link>
        <a className="text-left pl-10" href="./">Defects</a>
        <a  className="text-left pl-10" href="./">About</a>
    </div> );
}

export default SideBar;