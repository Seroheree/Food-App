import Style from './Main.module.css'
import React,{ useState, useMemo } from 'react'
const Whole=(props)=>{

    const setWhole=props.setWhole()
    
    return(
        <ul>
        <li>Kcal:  {setWhole.kcal/2}</li>
        <li>Białko: {setWhole.proteins/2}</li>
        <li>Węglowodany: {setWhole.carb/2}</li>
        <li>Tłuszcze: {setWhole.fat/2}</li>
    </ul>
    )
}

const check=(prevProps,nextProps)=>{
    return prevProps===nextProps
}
export default React.memo(Whole,check)