import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {paths} from "@/shared/routing";

export const ChatButton = () => {
    return (
        <Link href={paths.chat}>
            <Image src='icons/chat.svg' alt='' width={18} height={18}/>
        </Link>
    )
}
