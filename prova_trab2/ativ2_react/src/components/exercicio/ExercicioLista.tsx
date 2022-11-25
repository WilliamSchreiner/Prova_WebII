import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Exercicio, ExercicioService } from "./ExercicioService";

export function ExercicioLista() {
    const [exercicioLista , setExercicioLista] = useState<Exercicio[]>();

    useEffect(() => {
        setExercicioLista(ExercicioService.list)
    }, []);

    return(
<>
        <h1 className="h1_lista">Pagina Avatar Lista</h1>
        <div className="link_container">
    <Link to={'/exercicio/cadastro'} className='link_cadastro' > Cadastrar seu exercicio</Link>
        </div>

        <div className="container-lista">
        <ul className="coluna">
            {exercicioLista?.map(exercicio => (
                <li key={exercicio.id} className='linha'>
                    {exercicio.nome}
                    {exercicio.serie}
                    {exercicio.repeticao}
                    <Link to={'/exercicio/cadastro/' + exercicio.id} className='but_editar'>Editar</Link>
                    <Link to={'/exercicio/' + exercicio.id} className='but_excluir'>Excluir</Link>
                </li>
))}
        </ul>
        </div>
        
</>
    )
}
