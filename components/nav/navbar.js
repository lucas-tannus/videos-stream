import Image from 'next/image'
import Link from 'next/link'

import styles from './navbar.module.css'
import { useRouter } from 'next/router'

const NavBar = (props) => {
    const menuItems = [
        { name: 'Home', path: '/'},
        { name: 'My list', path: '/my-list'}
    ]
    const router = useRouter()

    const handleMenuItemClick = (e, path) => {
        e.preventDefault()
        router.push(path)
    } 

    return (
        <div className={styles.container}>
            <div className={styles.navBar}>
                <div className={styles.logoWrapper}>
                    <Link href='/'>
                        <Image src='/static/vsLogo.svg' alt='VS logo' height={65} width={120} />
                    </Link>
                </div>
                { !props.loginPage && (
                    <>
                        <div className={styles.navBarWrapper}>
                            <ul className={styles.navBar}>
                                {
                                    menuItems.map(item => (
                                        <li key={item.name} className={styles.navItem} onClick={(e) => handleMenuItemClick(e, item.path)}>
                                            { item.name }
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className={styles.userInfoContainer}>
                            <div className={styles.displayEmail}>
                                <span>someEmail@email.com</span>
                            </div> 
                            <Image src='/static/logout.svg' alt='VS logo' height={20} width={20} />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default NavBar
