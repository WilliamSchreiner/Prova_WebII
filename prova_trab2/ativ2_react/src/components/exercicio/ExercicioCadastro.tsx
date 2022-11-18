import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";  //useParams pega os parametros enviados pelas rotas em /: xx
import { ExercicioService, Exercicio } from "./ExercicioService";


export function ExercicioCadastro() {

    const navigate = useNavigate();

    const {id} = useParams(); 

    const [exercicio, setExercicio] = useState<Exercicio>({nome: '', serie: '', repeticao: ''});

    function valueChange(event: React.ChangeEvent<HTMLInputElement>) {
const {name,value} = event.target;

setExercicio({...exercicio, [name]: value})
    }

    useEffect(() => {
        if (id) {
        let exercicio = ExercicioService.buscarPorId(id);
        if (exercicio) {setExercicio(exercicio);}

        }
    }, []);

        function salvar(event: any) {
        event.preventDefault(); 

        if (exercicio) {ExercicioService.salvar(exercicio);}
        
        navigate('/exercicio')
    }


    return(
        <>
        <Link to={'/exercicio'}> Seus exercicio: </Link>
        <Link to={'/'}> Home </Link>
        
        <h1>Cadastre seus exercicio:</h1>

    <div>
            <form onSubmit={salvar}>

            <label> Exercicios: </label>
            <input type='text' name='nome' value={exercicio.nome} onChange={valueChange} />

            <label> Serie: </label>
            <input type='text' name='serie' value={exercicio.serie} onChange={valueChange}/>

            <label> Repetições: </label>
            <input type='text' name='repeticao' value={exercicio.repeticao} onChange={valueChange}/>

            <button > Salvar </button>

            </form>
        </div> 

        </>
    )
}