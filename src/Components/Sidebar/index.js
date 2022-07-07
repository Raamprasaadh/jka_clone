import { Link } from "react-router-dom";

function SideBar() {
    return ( <div className="flex flex-col divide-y-2">
          <Link to="/prod">AutoMode</Link>
          <Link to="/reports">Reports</Link>
        <a href="./">Defects</a>
        <a href="./">About</a>
    </div> );
}

export default SideBar;