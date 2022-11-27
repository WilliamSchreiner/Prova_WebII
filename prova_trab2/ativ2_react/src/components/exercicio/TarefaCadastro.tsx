import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export interface Tarefa {
        codigo?: string;
        nome: string;
        serie?: string;
        repeticao?: string;
    };
export function TarefaCadastro(){

    const navegate = useNavigate();

    const [codigo, setCodigo] = useState('');
    const [nome, setNome] = useState('');
    const [serie, setSerie] = useState('');
    const [repeticao, setRepeticao] = useState('');
    const [feito, setFeito] = useState('');

    const [tarefaLista, setTarefaLista] = useState([]);

    

    useEffect(() => {
        buscar();
      }, [])

    function salvar(event: any){
        event.preventDefault()

        let tarefa = {
            codigo: codigo,
            nome: nome,
            serie: serie,
            repeticao: repeticao,
            feito: feito
          };
        console.log(tarefa)
        axios.put("http://localhost:3100/tarefa", tarefa).then(() => {
            buscar();
            
          });
        navegate('/tarefa')
    }

    function buscar() {
        axios.get("http://localhost:3100/tarefa").then(resultado => {
          console.log(resultado.data);
          setTarefaLista(resultado.data);
        })
    }

    // funçoes

    function editar() {
        axios.get("http://localhost:3100/tarefa/" + codigo).then((resultado) => {
          setCodigo(resultado.data.codigo);
          setNome(resultado.data.nome);
          setSerie(resultado.data.serie);
          setRepeticao(resultado.data.repeticao);
          setFeito(resultado.data.feito);

          buscar();
        });
    }




    return(
        <>
        <form onSubmit={salvar}>
            <div>
            <label>Exercicio:</label>
            <input type="text" value={nome} onChange={(event) => setNome(event.target.value)}/>
        </div>
        <div>
            <label>Series:</label>
            <input type="text" value={serie} onChange={(event) => setSerie(event.target.value)}/>
        </div>
        <div>
            <label>Repetições:</label>
            <input type="text" value={repeticao} onChange={(event) => setRepeticao(event.target.value)}/>
        </div>

        <button > Salvar </button>
        </form>

        </>
    )
}

