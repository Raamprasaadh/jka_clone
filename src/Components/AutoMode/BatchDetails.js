function BatchDetails() {
  return (
    <div className="w-full h-full flex flex-col b-gray-300 divide-y divide-gray-700">
      <div className="text-left text-gray-700 text-xl font-medium">
        Production Mode
      </div>
      <div className="text-left">Current Work Order</div>
      <div className="flex flex-row">
        <div className="flex flex-wrap space-x-2 space-y-4 p-5">
          <div className="w-1/3 flex flex-col bg-blue-600 rounded-lg pb-8 mt-4">
            <label className="text-sm text-white text-left ml-2"htmlFor="batchId">Batch id</label>
            <input className="w-2/3 mx-auto outline-none rounded-sm" style={{disabled:true}}value="B-07-07-2022" id="batchId" />
          </div>
          <div className="w-1/3 flex flex-col bg-orange-600 rounded-lg pb-8">
            <label  className="text-sm text-white text-left ml-2" htmlFor="plndQty">planned quantity</label>
            <input   className="w-2/3 mx-auto outline-none rounded-sm" style={{disabled:true}} value="10000" id="plndQty" />
          </div>
          <div className="w-1/3 flex flex-col bg-blue-600 rounded-lg pb-8 -ml-2">
            <label className="text-sm text-white text-left ml-2" htmlFor="prtNme"> Part Name</label>
            <input className="w-2/3 mx-auto outline-none rounded-sm" style={{disabled:true}} value="Biscuits" id="prtNme" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BatchDetails;
