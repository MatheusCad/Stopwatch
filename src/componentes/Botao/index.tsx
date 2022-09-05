import React, { ReactFragment } from "react"
import style from './Botao.module.scss'

type Params = {
    type?: "button" | "submit" | "reset" | undefined;
    children?: ReactFragment | undefined;
    onClick?: () => void
}

const Botao: React.FC<Params> = (props:Params) =>{
    const { type = "button", onClick } = props;   
    return(
        <button onClick={onClick} type={props.type} className={style.botao}>
            {props.children}
        </button>
    )
}

export default Botao