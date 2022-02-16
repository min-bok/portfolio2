import style from '../css/Nav.module.css'

function Nav() {
    return(
        <>
        <div className={`${style.container}`}>
            <div className={`${style.acc}`}>
                <div className={`${style.hamburger}`}></div>
                <div className={`${style.rowLine}`}></div>
                <div className={`${style.dot}`}></div>
                <p className={`${style.title}`}>Portfolio</p>
            </div>
            <ul className={`${style.nav}`}>
                <li className={`${style.profile}`}></li>
                <li className={`${style.strength}`}></li>
                <li className={`${style.skill}`}></li>
                <li className={`${style.project}`}></li>
            </ul>
        
            <div className={`${style.contactWrap}`}>
                <p className={`${style.contact}`}>Contact</p>
                <div className={`${style.line}`}></div>
                <div className={`${style.github}`}>
                    <div className={`${style.githubIcon}`}></div>
                </div>
                <div className={`${style.github}`}>
                    <div className={`${style.githubIcon}`}></div>
                </div>
                <div className={`${style.gmail}`}>
                    <div className={`${style.gmailIcon}`}></div>
                </div>
                <div className={`${style.gmail}`}>
                    <div className={`${style.gmailIcon}`}></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Nav;