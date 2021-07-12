import Style from './Nav.module.css'
import {useState} from 'react'
const Nav=(props)=>{
    const [mainState,setMainState]=useState(true)
    const send=()=>{
        props.takeSendNav(mainState)
    }
    send()
    return(
        <nav>

                <button className={Style.navButton}
                    onClick={()=>setMainState(true)}
                >Dziennik</button>
                <button className={Style.navButton}
                     onClick={()=>setMainState(false)}
                >Dodaj własne produkty</button>

        </nav>
    )
}

export default Nav