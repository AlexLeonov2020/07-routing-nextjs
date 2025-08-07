import css from './Footer.module.css'

export default function Footer(){
    return(
<footer className={css.footer}>
    <div className={css.content}>
    <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
    <div className={css.wrap}>
        <p>Developer: Leonov Oleksii</p>
        <p>
        Contact us:
        <a href="alex.leon2010@icloud.com"> alex.leon2010@icloud.com</a>
        </p>
    </div>
    </div>
</footer>
    )
}