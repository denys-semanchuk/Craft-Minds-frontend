import Link from "next/link";
import {paths} from "@/shared/routing";

import styles from './styles.module.scss'
import {FaChevronDown} from "react-icons/fa";
import Image from "next/image";
import {DefaultUserImg} from "@/shared/ui/default-user-img";

export const UserProfile = ({name, image}: { name: string, image?: string }) => {
    return (
        <div className={styles.wrapper}>
            <FaChevronDown/>
            {image ? <Image style={{borderRadius: 20}} src={image} alt='' width={30} height={30}/> :
                <DefaultUserImg width={30} height={30}/>}
            {name}
        </div>
    )
}
