import style from '../css/Project.module.css'

function Project() {
    return(
        <div className={`${style.Project}`}>
            <div className={`${style.container}`}>
                <div className={`${style.detail}`}>
                    <div className={`${style.wrap}`}>
                        <div className={`${style.num}`}>01</div>
                        <h1>호두마켓</h1>
                        <p className={`${style.info}`}>어쩌고저쩌고 입니다</p>
                        <div className={`${style.img}`}></div>
                        <p className={`${style.date}`}>2022.01 - 2022.01</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;