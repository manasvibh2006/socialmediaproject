import React from "react";
import {usePathname} from "next/navigation"

export default function mainlayout({ children }: {children : React.ReactNode}){
    const pathname =usePathname()
    return (
        <div className = {`flex justify-between mx-auto w-full lg:px-2.5 px -0 ${pathname === '/'? 'max-w-[1140px]': ''}`}>
            {children}
        </div>
    )
}