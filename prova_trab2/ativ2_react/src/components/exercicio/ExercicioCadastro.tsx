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
        
        <h1 className="h1_exercicio">Cadastre seu exercicio:</h1>

    <div>
            <form onSubmit={salvar}>
        <div className="mb-3">
            <label className="form-label"> Exercicios: </label>
            <input type='text' className="form-control" name='nome' value={exercicio.nome} onChange={valueChange} />
        </div>
        <div className="mb-3">
            <label className="form-label"> Serie: </label>
            <input type='text' className="form-control" name='serie' value={exercicio.serie} onChange={valueChange}/>
        </div>
        <div className="mb-3">
            <label className="form-label"> Repetições: </label>
            <input type='text' className="form-control" name='repeticao' value={exercicio.repeticao} onChange={valueChange}/>
        </div>
            <button className="btn btn-success"> Salvar </button>

            </form>
        </div> 

        </>
    )
}