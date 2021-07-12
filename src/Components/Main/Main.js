import Style from './Main.module.css'
import Dish from './Dish/Dish'
import React, { useState, useEffect, useMemo} from 'react'
import Whole from './Whole'
import Nav from './Nav/Nav'
import AddView from './AddView/AddView'
const Main=(props)=>{
    const [state, setState]=useState([]) //State of Component
    const [refresh,setRefresh]=useState(0) //State of Refresh value
    const [block,setBlock]=useState(true)   //State of block 'add new food' without fill earlier dish
    let countAll={
        kcal:0,
        proteins:0,
        carb:0,
        fat:0
    }
        const setWhole=()=>{
            const calories=document.querySelectorAll('.kcal')
            const proteins=document.querySelectorAll('.proteins')
            const carbs=document.querySelectorAll('.carbs')
            const fat=document.querySelectorAll('.fat')
            calories.forEach(el=>{
                countAll.kcal=countAll.kcal+parseInt(el.textContent)
            })

            proteins.forEach(el=>{
                countAll.proteins=countAll.proteins+parseInt(el.textContent)
               
            })

            carbs.forEach(el=>{
                countAll.carbs=countAll.carbs+parseInt(el.textContent)
               
            })

            fat.forEach(el=>{
                countAll.fat=countAll.fat+parseInt(el.textContent)
               
            })
            setRefresh(1)
            setRefresh(0)
            return countAll
        }
        

  
        const takeValue=(term)=>setRefresh(term)            //Dish length to refresh page
        const takeValueMemo=useMemo(()=>{
            setBlock(true)
            return takeValue
        },[refresh])

        const [changePage,setChangePage]=useState(true)    //Actual page(diary or add products)
        const takeSendNav=(term)=> setChangePage(term)     // Takes props from nav

    return(

        <div className={Style.diaryBox} >
            <Nav takeSendNav={takeSendNav}/>
                
                    { changePage ? state : <AddView/>}

            <footer>
                <div>
                    <button
                    className={Style.footerButton}
                        onClick={
                            ()=>{
                            block ? (
                            setState([...state,<Dish 
                                    dataBase={props.dataBase} 
                                    takeValue={takeValue}
                                    key={state.length} />]))
                                : alert ('Zaktualizuj dane o posiłku przed dodaniem nowego ') 
                                 if(refresh===0) setBlock(false)
                        }}>+</button>
                </div>
                
                <div className={Style.ulBox}>
                    <Whole setWhole={setWhole}/>
                </div>
            </footer>
        </div>
    )
}

export default Main