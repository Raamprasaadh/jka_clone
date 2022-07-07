import BatchDetails from "./BatchDetails";
import MachineControls from "./MachineControls";

function AutoMode() {
    return ( <div className="w-full h-full pr-96 mx-auto">
        <BatchDetails />
        <MachineControls/>
    </div> );
}

export default AutoMode;