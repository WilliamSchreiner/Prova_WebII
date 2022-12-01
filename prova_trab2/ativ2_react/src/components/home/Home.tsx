import img1 from './img/cerebro.png'
import img2 from './img/fisico.png'


export function Home() {
    return(
    <>
    <h1 className="h1_home"> Página de Home </h1>
    <p className="p_home">Manter uma rotina de exercícios é muito importante para a manutenção da saúde e dos membros do corpo,
        logo, este site fornece as ferramentas para o planejamento da rotina de exercícios, criando uma tabela
        que fornece o nome, as séries e repetições, depois da inserção dos mesmos pelo usuário.
    </p>
    <section id="exerc-section">
                <div className="container">
                    <div className="exerc-container">
                        <img src={img1} alt="cerebro"/>
                        <h3>Mental</h3>
                        <p>A prática de exercícios traz benefícios para a mente, isso porque O exercício físico é comprovadamente eficaz na melhora do humor e no alívio dos sintomas de depressão, ansiedade e estresse. Segundo estudos, isso acontece porque os exercícios produzem alterações nas partes do cérebro que regulam a sensação de prazer e o humor.</p>
                    </div>
                    <div className="exerc-container central">
                        <img src={img2} alt="carrof1"/>
                        <h3>Físico</h3>
                        <p>Como de praxe, os exercícios físicos desempenham um papel vital na construção e manutenção de músculos e ossos fortes. Atividades como levantamento de peso podem estimular a construção muscular, quando combinadas com a ingestão adequada de proteínas</p>
                    </div>
                </div>
            </section>
    </>
    )
} 