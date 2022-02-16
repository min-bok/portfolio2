import style from '../css/Nav.module.css'

function Nav(props) {
   return(
        <>
        <div className={`${style.container}`}>
            <div className={`${style.acc}`}>
                <div className={`${style.hamburger}`}></div>
                <div className={`${style.rowLine}`}></div>
                <div className={`${style.dot}`}></div>
                <p className={`${style.title}`}>Portfolio | {props.page}</p>
            </div>
            <ul className={`${style.nav}`}>
                <li className={`${style.profileWrap}`}>
                    <div className={`${style.profile}`}></div>
                </li>
                <li className={`${style.strengthWrap}`}>
                    <div className={`${style.strength}`}></div>
                </li>

                <li className={`${style.skillWrap}`}>
                    <div className={`${style.skill}`}></div>
                </li>
                <li className={`${style.projectWrap}`}>
                    <div className={`${style.project}`}></div>
                </li>
            </ul>
        
            <div className={`${style.contactWrap}`}>
                <p className={`${style.contact}`}>Contact</p>
                <div className={`${style.line}`}></div>
                <div className={`${style.github}`}>
                    <div className={`${style.githubIcon}`}></div>
                </div>
                <div className={`${style.velog}`}>
                    <div className={`${style.velogIcon}`}></div>
                </div>
                <div className={`${style.gmail}`}>
                    <div className={`${style.gmailIcon}`}></div>
                </div>
                <div className={`${style.phone}`}>
                    <div className={`${style.phoneIcon}`}></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Nav;