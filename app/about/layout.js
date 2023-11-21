import Link from "next/link"
export default function Layout({children}){
    return(
        <div>
            <ul>
                <li>
                    <Link href="/about">about Main </Link>
                </li>
                <li>
                    <Link href="/about/student">student  </Link>
                </li>
                <li>
                    <Link href="/about/collage">collage </Link>
                </li>
            </ul>
            {children}
        </div>
    )
}



        