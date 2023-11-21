"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
const Home =()=>{
    const Router =useRouter();
    return(
        <div>
            <h1>Home Page</h1>
            <button onClick={()=>Router.push("/")}>Go to Home page</button>
        <br/>
        {/* <Link href="/about/collage">Go to About Collage Page</Link> */}
        <br/> <br/>
        {/* <Link href="/about/student">Go to About Student Page</Link> */}
        </div>
    )
}
export default Home;

