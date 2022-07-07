import { useState } from "react";
import ProductReport from "./ProductReport";
import QualityReport from "./QualityReport";

function Reports() {
    /*mode represents which mode we are on, 
    p represents product report and q represents quality report*/
    
    const [pMode, setPMode]=useState(true);
    
    return ( <div>
        Reports{pMode}
        <button onClick={()=>setPMode(!pMode)}>{(pMode ? "Go to quality report": "Go to product report")}</button>
        {pMode?<ProductReport/>:<QualityReport/>}
    </div> );
}

export default Reports;