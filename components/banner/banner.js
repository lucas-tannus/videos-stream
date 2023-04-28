import Image from 'next/image'
import styles from './banner.module.css'


const Banner = (props) => {

    const handlePlay = () => {
        console.log('Handle play!')
    }

    return (
        <div style={{ backgroundImage: `url(${props.imgUrl})` }} className={styles.container}>
            <div className={styles.leftContainerWrapper}>
                <div className={styles.leftContainer}>
                    <div className={styles.titlesWrapper}>
                        <h1 className={styles.title}>{props.title}</h1>
                        <h2 className={styles.subTitle}>{props.subtitle}</h2>
                    </div>
                    <div className={styles.playButtonWrapper}>
                        <button onClick={handlePlay} className={styles.playButton}>
                            <Image src='/static/playArrow.svg' alt='Play icon' height={30} width={30} />
                            <span className={styles.buttonText}>Play</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
