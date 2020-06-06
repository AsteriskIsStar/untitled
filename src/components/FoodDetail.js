import React,{useEffect} from "react";
import {fetchFoodDetail} from "../actions/foodActions";
import {useDispatch, useSelector} from "react-redux";

export default function FoodDetail(props){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchFoodDetail(props.match.params.no))
        //function(dispatch)=> reducer연결
    },[])

    const food_data=useSelector((state)=>state.foods.food_detail)

    return (
        <div className={"row"}>

        </div>
    )
}