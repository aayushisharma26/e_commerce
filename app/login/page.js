"use client"
import Link from "next/link";
import { useRouter} from "next/navigation";
const Login =()=>{
    const router =useRouter();
    const navigate=(page)=>{
        router.push("/login/"+page)
    }
    return(
        <div>
            <h1>Login Page</h1>
            {/* <button onClick={()=>Router.push("/")}>Go to Home page</button> */}
            <br/>
            <button onClick={()=>navigate("logincollage")} >Go to Login Collage Page</button>
            <br/> <br/>
            <button onClick={()=>navigate("loginstudent")} >Go to Login Student Page</button>
        </div>
    )
}
export default Login;