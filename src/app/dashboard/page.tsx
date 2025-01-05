import React from 'react'
import Link from "next/link";

const Page = () => {
    return (
        <>
        <div className="flex flex-col align-middle items-center justify-center h-screen">
            <div className="font-extrabold">Welcome</div>
            <div className="text-blue-400"><Link href={"/signin"}>Logout</Link></div>
        </div>

        </>
    )
}
export default Page
