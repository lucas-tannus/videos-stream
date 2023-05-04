import Image from 'next/image'

import cls from 'classnames'
import { motion } from "framer-motion"

import styles from './card.module.css'

const Card = (props) => {
    const { id, imgUrl, size } = props

    const cardSizes = {
        small: styles.smItem,
        medium: styles.mdItem,
        large: styles.lgItem
    }

    return (
        <div className={styles.container}>
            <motion.div whileHover={{ scale: 1.1 }} className={cls(styles.imgMotionWrapper, cardSizes[size])}>
                <Image id={id} src={imgUrl} alt="image" fill={true} className={styles.cardImg} />
            </motion.div>
        </div>
    )

}

export default Card
