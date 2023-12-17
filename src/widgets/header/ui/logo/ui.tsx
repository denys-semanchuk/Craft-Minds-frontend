import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {paths} from "@/shared/routing";

export const Logo = () => {
    return (
        <Link href={paths.home}>
            <Image src='/logo.png' alt='' width={120} height={80}/>
        </Link>
    )
}
