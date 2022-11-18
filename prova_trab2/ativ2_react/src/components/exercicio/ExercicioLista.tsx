import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Exercicio, ExercicioService } from "./ExercicioService";

export function ExercicioLista() {
    const [exercicioList , setExercicioList] = useState<Exercicio[]>();

    useEffect(() => {
        setExercicioList(ExercicioService.list)
    }, []);

    return(
<>
        <h1>Pagina Avatar Lista</h1>

    <Link to={'/avatar/cadastro'}> Cadastrar seu exercicio: </Link>

        <ul>
            {exercicioList?.map(exercicio => (
                <li key={exercicio.id}>
                    {exercicio.nome}
                    {exercicio.serie}
                    {exercicio.repeticao}
                    <Link to={'/exercicio/cadastro/' + exercicio.id}> [editar] </Link>
                </li>
))}
        </ul>
</>
    )
}
