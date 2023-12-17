import React, {ReactEventHandler, ReactNode} from 'react'
import styles from './styles.module.scss'

interface SubmitBtnProps {
    children: ReactNode,
    onClick: ReactEventHandler
}

export const SubmitBtn = ({children, onClick}: SubmitBtnProps) => {
    return (
        <button className={styles.btn} type="submit" onClick={onClick}>
            {children}
        </button>
    )
}
