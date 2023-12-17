import React from 'react'
import {motion} from 'framer-motion'
import {MdError} from "react-icons/md";
import styles from './styles.module.scss'
export const InputError = ({message}: { message: string | undefined }) => {
    return <motion.p {...framerError} className={styles.error}>
        <MdError/>
        {message}
    </motion.p>
}

const framerError = {
    initial: {opacity: 0, y: 10},
    animate: {opacity: 1, y: 0},
    exit: {opacity: 0, y: 10},
    transition: {duration: 0.2}
}

