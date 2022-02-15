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
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        
            <div className={`${style.contactWrap}`}>
                <p className={`${style.contact}`}>Contact</p>
                <div className={`${style.line}`}></div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
        </div>
        </>
    )
}

export default Nav;