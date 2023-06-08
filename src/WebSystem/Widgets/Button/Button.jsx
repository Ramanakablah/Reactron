import React from 'react'
import style from "./Button.module.css"

const Button = ({text,category,dark,Operation,disabled}) => {

let styles

switch (category) {
    case "Success":
        styles = {
            background : "#00cd00"
        }
        break;
    case "Warm" :
        styles ={
            background : "orange"
        }    
        break ;
    case "Pois" :
        styles ={
            background : "#45007a"
        }    
        break ;
    case "Baby" :
        styles ={
            background : "#e76f51"
        }    
        break ;
    default:
        styles = {
            background : "skyblue"
        }
        break;
}

  return (<button className={style.Button} onClick={Operation} disabled={disabled} style={styles}>
       {text}
    </button>
  )
}

export default Button