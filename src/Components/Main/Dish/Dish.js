import Style from './Dish.module.css'
import React, {useState, useEffect} from 'react'
import {DataBase} from '../../PseudoDB'
const Dish=(props)=>{
    let counter=0
    const [food,setFood]=useState(props.dataBase)       //Food Database
    const [searchState, setSearchState]=useState('')     //State of Searcher Value
    
    const [values, setValues]=useState({                //state of added values
        kcal:0,
        proteins:0,
        carb:0,
        fat:0
    })
    const [addedFood, setAddedFood]=useState([])        //State of added food(list)
    const setAll=()=>[...addedFood].map(el=>{
            setValues(
                {
                    kcal:values.kcal+el.kcal,
                    proteins:values.proteins+el.proteins,
                    carb:values.carb+el.carb,
                    fat:values.fat+el.fat
                })
        })
    const send=()=> props.takeValue(addedFood.length) //send info about array length to refresh by memo etc
    

    const Filter=()=>{
        if(searchState==='')return
        else{
        [...food].filter(el=>el.name===searchState
            ? setAddedFood ([...addedFood,el])
            : counter++)
        if(counter===food.length) {counter=0 ;return}
        }
    }

    useEffect(()=>{
        setAll()
        send()
    },[addedFood.length])

    

    
    return(
        <div className={Style.dish}>
            <div>

            </div>
            <div className={Style.add}>
                    <label>Dodaj jedzenie</label>
                    <div>
                        <input type="text" placeholder="Szukaj.."
                            onChange={e=>setSearchState(e.target.value)}
                            autoFocus
                            list="foodList"
                        ></input>

                        <datalist id="foodList">
                            {food.map(el=><option value={el.name}>{el.kcal}</option>)}
                        </datalist>

           
                        
                        
                        <button
                        className={Style.addButton}
                            onClick={
                                
                                ()=>{Filter()}}>+</button>



                                
                    </div>
                   
            </div>

            <div className={Style.addedFood}>
              <ul>{addedFood.map(el=><li>{el.name}</li>)}</ul>
            </div>


            <div className={Style.foodInfo}>
                <div>
                    <p>Kalorie </p>
                    <p  className="kcal">{values.kcal}</p>
                </div>

                <div>
                    <p>Białko</p>
                    <p className="proteins">{ values.proteins}</p>
                </div>

                <div>
                    <p>Węglowodany</p>
                    <p className="carbs">{values.carb}</p>
                </div>

                <div>
                    <p>Tłuszcze</p>
                    <p className="fat">{values.fat}</p>
                </div>
            </div>
        </div>
    )
}

export default Dish