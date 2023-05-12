import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {FilterbyDone, FilterbyAll,FilterbyunDone} from '../Redux/TodoSlice'  

const Filtred = () => {  const dispatch= useDispatch()

    return (
        <div style={{display: 'flex', justifycontent: 'center',gap:'20px'}}>
        <Button onClick={()=> dispatch(FilterbyDone()) }>
         Done  </Button>
          <Button onClick={()=> dispatch(FilterbyAll()) }>
          ALL  </Button>
          <Button onClick={()=> dispatch(FilterbyunDone()) }>
         unDone  </Button>

        </div>
    )
}

export default Filtred
