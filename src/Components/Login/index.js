import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/login";


function Login() {
    const [creds, setCreds]=useState({uName:"", pwd:""});
    const dispatch =useDispatch();
    const {uName} = creds;
    return ( <div className="flex flex-row h-full">
        <div className="w-1/2 h-2/3 flex flex-col">
            <div className="w-20 h-32 bg-red-600 mx-40 text-white py-auto"></div>
            <span className="w-20 mx-40 font-medium">JIDOKA</span>
            <div className="text-black text-5xl font-bold ml-40 text-left mt-44">Welcome</div>
            
        </div>
        <div className="w-1/2 h-2/3 my-56 ">
            <div className="text-center text-red-500 text-2xl font-bold mb-10">SIGN IN</div>
            <form className="w-2/3 h-full space-y-6 rounded-sm my-auto mx-auto flex flex-col" onSubmit={()=>dispatch(login({uName}))}>
            <input className=" outline-none border-b-2 border-black" onChange={(e)=>{setCreds({...creds,uName:e.target.value})}} value={creds.uName} placeholder="username" />
            <input className=" outline-none border-b-2 border-black"onChange={(e)=>{setCreds({...creds,pwd:e.target.value})}} type="pasword" value={creds.pwd} placeholder="password"/>
            <button className="bg-red-600 text-white rounded-sm">Submit</button>
            </form>
        </div>
    </div> );
}

export default Login;