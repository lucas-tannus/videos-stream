import Card from '../card/card'

import styles from './section-cards.module.css'

const SectionCards = (props) => {
    const { title, cards, size } = props

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cardsWrapper}>
                { cards.map((card, idx) => (
                    <Card id={idx} imgUrl={card.imgUrl} size={size} />
                )) }
            </div>
        </section>
    )
}

export default SectionCards
