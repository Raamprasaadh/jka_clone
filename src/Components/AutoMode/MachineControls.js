function MachineControls() {
    return ( <div className="bg-gray-300 pb-20 m-30">
        <h1>Take actions</h1>
        <div className="flex flex-row mx-10">
        <div><button className="w-20 h-20 rounded-full bg-white"><span className="border-4 p-3 w-6 h-6 border-blue-400 rounded-full">Start</span></button></div>
        <div><button className="w-20 h-20 rounded-full mx-4 bg-white"><span className="border-4 p-3 w-6 h-6 border-red-400 rounded-full">Stop</span></button></div>
        <div><button className="w-20 h-20 rounded-full bg-white"><span className="border-4 p-3 w-6 h-6 border-orange-400 rounded-full">Reset</span></button></div>
        </div>
    </div> );
}

export default MachineControls;