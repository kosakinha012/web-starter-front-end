import { Children } from "react"
import "./botao.css"

function Botao(props) {
    return (
        <button onClick={props.tarefa} className={props.classe}>
        {props.classNameChildren}
        </button>
    );
}

export default Botao;