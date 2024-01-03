import React from 'react'
import Image from "next/image";

export const DefaultUserImg = ({width, height}: DefaultUserImgProps) => {
    return (
        <Image style={{borderRadius: "50%"}} src='/default-user.png' alt='' width={width} height={height}/>
    )
}

interface DefaultUserImgProps {
    width: number,
    height: number
}