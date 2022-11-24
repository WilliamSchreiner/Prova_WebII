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
        <h1>Pagina Avatar Lista</h1>

    <Link to={'/avatar/cadastro'}> Cadastrar seu exercicio: </Link>

        <ul>
            {exercicioLista?.map(exercicio => (
                <li key={exercicio.id}>
                    {exercicio.nome}
                    {exercicio.serie}
                    {exercicio.repeticao}
                    <Link to={'/exercicio/cadastro/' + exercicio.id}> [editar] </Link>
                    <Link to={'/exercicio/' + exercicio.id}> [Excluir] </Link>
                </li>
))}
        </ul>
</>
    )
}
