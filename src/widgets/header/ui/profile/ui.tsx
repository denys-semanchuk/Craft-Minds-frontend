import Link from "next/link";
import {paths} from "@/shared/routing";

import styles from './styles.module.scss'

export const ProfileThumbnail = ({name}: { name: string }) => {
    return (
        <Link href={`/users/me`} className={styles.wrapper}>
            {name}
        </Link>
    )
}