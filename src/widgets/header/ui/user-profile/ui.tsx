import Link from "next/link";
import {paths} from "@/shared/routing";

import styles from './styles.module.scss'
import {FaChevronDown} from "react-icons/fa";
import Image from "next/image";

export const UserProfile = ({name, image}: { name: string, image?:string }) => {
    return (
        <div className={styles.wrapper}>
            <FaChevronDown/>
            <Image style={{borderRadius: 20}} src={image || '/default-user.png'} alt='' width={30} height={30}/>
            {name}
        </div>
    )
}