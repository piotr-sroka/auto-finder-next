import Link from "next/link"
import classes from './MainHeader.module.css'

export const MainHeader = () => {
    return (
        <header className={classes.header}>
            <ul className={classes.menu}>
                <li className={classes["special-link"]}><Link href="/ads/new">Create new ad</Link></li>
                <li className={classes["special-link"]}><Link href="/login">Login</Link></li>
                <li className={classes["special-link"]}><Link href="/register">Register</Link></li>
                <li><Link href="/help">Help</Link></li>
                <li><Link href="/terms-and-conditions">Terms and conditions</Link></li>
            </ul>
        </header>
    )
}