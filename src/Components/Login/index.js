import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/login";


function Login() {
    const [creds, setCreds]=useState({uName:"", pwd:""});
    const dispatch =useDispatch();
    const {uName} = creds;
    return ( <div>
        <div>
            Jidoka
        </div>
        <div>
            <form onSubmit={()=>dispatch(login({uName}))}>
            <input onChange={(e)=>{setCreds({...creds,uName:e.target.value})}} value={creds.uName} placeholder="username" />
            <input onChange={(e)=>{setCreds({...creds,pwd:e.target.value})}} type="pasword" value={creds.pwd} placeholder="password"/>
            <button >Submit</button>
            </form>
        </div>
    </div> );
}

export default Login;