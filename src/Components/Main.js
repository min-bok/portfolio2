import style from '../css/Main.module.css'

function Main() {
    return (
        <>
        <section className={`${style.main}`}>
            <div className={`${style.container}`}>
                <div className={`${style.picture}`}></div>
                {/* <div className={`${style.pictureDeco}`}></div> */}
                <div className={`${style.textWrap}`}>
                    <div className={`${style.first}`}>
                        <p className={`${style.name}`}><b>Name</b> 이혜영</p>
                        <p className={`${style.birth}`}><b>Birth</b> 1998. 08. 10</p>
                    </div>
                    <p className={`${style.phone}`}><b>Phone</b> +82 10 6208 6377</p>
                    <p className={`${style.place}`}><b>Place</b> Seoul, South Korea</p>
                    <p className={`${style.email}`}><b>Email</b> leehy0782@gmail.com</p>
                    <p className={`${style.police}`}><b>Degree</b> 울산대학교 경찰학과 졸업예정</p>
                    <p className={`${style.design}`}>울산대학교 디지털 콘텐츠 디자인학과 졸업예정</p>
                </div>
            </div>
                {/* <div class={`${style.btnWrap}`}>
                    <button onclick="window.open('https://github.com/minbok-1998');" class="Github mybtn">Github</button>
                    <button onclick="window.open('https://velog.io/@minbok');" class="Velog mybtn">Velog</button>
                    <button class="mail mybtn">Email</button>
                    <button class="HP mybtn">HP</button>
                </div> */}
                <p className={`${style.growUp}`}>성실함과 끈기를 무기로 끊임없이 발전해 온, 더욱 발전해 나갈 이혜영입니다</p>
        </section>
        
        </>
    )
}

export default Main;