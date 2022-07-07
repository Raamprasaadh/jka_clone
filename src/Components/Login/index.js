import { useState } from "react";

function Login() {
    const [creds, setCreds]=useState({uName:"", pwd:""});
    const submit=()=>{console.log(creds.uName, creds.pwd)}
    return ( <div>
        <div>
            image
        </div>
        <div>
            <form onSubmit={()=>console.log("login")}>
            <input onChange={(e)=>{setCreds({...creds,uName:e.target.value})}} value={creds.uName} placeholder="username" />
            <input onChange={(e)=>{setCreds({...creds,pwd:e.target.value})}} type="pasword" value={creds.pwd} placeholder="password"/>
            <button >Submit</button>
            </form>
        </div>
    </div> );
}

export default Login;