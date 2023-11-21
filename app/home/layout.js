import Link from "next/link"
export default function Layout({children}){
    return(
        <div>
            <ul>
                <li>
                    <Link href="/home">home Main </Link>
                </li>
                <li>
                    <Link href="/home/student">student  </Link>
                </li>
                <li>
                    <Link href="/home/collage">collage </Link>
                </li>
            </ul>
            {children}
        </div>
    )
}



        