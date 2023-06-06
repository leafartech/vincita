import Header from "@/components/pv/Header";
import Section from "@/components/pv/Section";
import Subtitle from "@/components/pv/Subtitle";
import Template from "@/components/pv/Template";
import styles from './Home.module.css'
import Button from "@/components/pv/Button";
import Text from "@/components/pv/Text";
import List from "@/components/pv/List";
import Publico from "@/components/pv/Publico";
import Alert from "@/components/pv/Alert";
import Dropdown from "@/components/pv/Dropdown";
import Calculadora from "@/components/pv/Calculadora";
import { useEffect } from "react";

export default function HomeScreen() {
    const faq = [{
        title: '1. O que é superendividamento? Quando o servidor público está superendividado?', text: 'O superendividamento ocorre quando uma pessoa acumula dívidas que ultrapassam sua capacidade de pagamento, comprometendo sua estabilidade financeira.'}, 
        {title: '2. Como identificar se estou superendividado?', text: 'Alguns sinais de superendividamento incluem dificuldade em pagar as contas mensais, dependência de crédito para suprir as necessidades básicas, atrasos constantes no pagamento das dívidas e falta de recursos para arcar com despesas essenciais.'}, 
        { title: '3. Quais tipos de dívidas podem levar ao superendividamento?', text: 'O superendividamento pode ser causado por diversos tipos de dívidas, como empréstimos pessoais, financiamentos, cartões de crédito, contas médicas, despesas com educação e outras obrigações financeiras.'}, 
        {title: '4. As dívidas precisam estar vencidas para caracterizar o superendividamento?', text: 'Não necessariamente. O superendividamento envolve a incapacidade de pagar as dívidas dentro dos prazos e condições estabelecidos, independentemente de estarem vencidas ou não.'}, 
        {title: '5. O superendividamento leva em consideração a minha renda? Está relacionado a pobreza?', text: 'Não. O superendividamento pode afetar pessoas de diferentes níveis de renda. Embora seja mais comum em famílias com menor capacidade financeira, o superendividamento pode ocorrer independentemente do nível de renda.'},
        {title: '6. O tratamento do superendividamento só se aplica a contratos novos?', text: 'Não, o tratamento do superendividamento pode abranger tanto contratos novos como antigos. O objetivo é buscar alternativas para aliviar o peso das dívidas e reequilibrar a situação financeira.'},
        {title: '7. O tratamento do superendividamento é um perdão de dívidas?', text: 'O tratamento do superendividamento não implica necessariamente no perdão total das dívidas. Visa, principalmente, buscar soluções que permitam ao devedor quitar suas obrigações de forma adequada, considerando sua capacidade financeira.'}
    ]

    let cont = 0
    // useEffect(() => {
    //     if (cont === 0) {
    //       const script = document.createElement('script');
    //       script.src = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
    //       script.async = true;
      
    //       script.onload = () => {
    //         new RDStationForms('01-lrd-duplicado-duplicado-3fe010b73a55ecb88b9f', 'null').createForm();
    //       };
      
    //       document.body.appendChild(script);
    //       cont++;
    //     }
    //   }, []);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Seu código de envio do formulário aqui
        
        // use this trick to get the submit button & disable it using plain javascript
        // document.querySelector('#_form_1_submit').disabled = true;
        window._load_script = function(url, callback, isSubmit) {
            var head = document.querySelector('head'), script = document.createElement('script'), r = false;
            script.type = 'text/javascript';
            script.charset = 'utf-8';
            script.src = url;
            if (callback) {
              script.onload = script.onreadystatechange = function() {
                if (!r && (!this.readyState || this.readyState == 'complete')) {
                  r = true;
                  callback();
                }
              };
            }
            script.onerror = function() {
              if (isSubmit) {
                if (script.src.length > 10000) {
                  _show_error("1", "Desculpe, seu envio falhou. Deixe suas respostas mais curtas e tente novamente.");
                } else {
                  _show_error("1", "Desculpe, seu envio falhou. Tente novamente.");
                }
              }
            }
          
            head.appendChild(script);
          };
        var form_serialize = function(form){if(!form||form.nodeName!=="FORM"){return }var i,j,q=[];for(i=0;i<form.elements.length;i++){if(form.elements[i].name===""){continue}switch(form.elements[i].nodeName){case"INPUT":switch(form.elements[i].type){case"tel":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].previousSibling.querySelector('div.iti_selected-dial-code').innerText)+encodeURIComponent(" ")+encodeURIComponent(form.elements[i].value));break;case"text":case"number":case"date":case"time":case"hidden":case"password":case"button":case"reset":case"submit":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"checkbox":case"radio":if(form.elements[i].checked){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value))}break;case"file":break}break;case"TEXTAREA":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"SELECT":switch(form.elements[i].type){case"select-one":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"select-multiple":for(j=0;j<form.elements[i].options.length;j++){if(form.elements[i].options[j].selected){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].options[j].value))}}break}break;case"BUTTON":switch(form.elements[i].type){case"reset":case"submit":case"button":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break}break}}return q.join("&")};
        var serialized = form_serialize(document.getElementById('form_1')).replace(/%0A/g, '\\n');
        // var err = form_to_submit.querySelector('._form_error');
        // err.parentNode.removeChild(err) : false;
        _load_script('https://lauromts.activehosted.com/proc.php?' + serialized + '&jsonp=true', null, true);
        }
    // Em caso de sucesso:
    console.log('aq')

    return (
        <Template>
            <div className={ styles.logoDiv }>
                <img className={ styles.logo } src="./imagesPv/logo.png" alt="Escritório de advocacia Krüger Toledo" />
            </div>
            <Header text="Diminua sua dívida e Recupere sua Estabilidade Financeira">
                <Subtitle>
                Servidor público, a lei de repactuação de dívidas foi regulamentada no DF!!
                </Subtitle>
                <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center'}}>
                    <Alert title="SERVIDOR PÚBLICO">30% dos servidores públicos do Distrito Federal estão superendividados</Alert>
                </div>
                <div className={ styles.video }>
                    <Text>O escritório Krüger Toledo irá te ajudar com essa nova oportunidade, veja:</Text>
                    <iframe className={ styles['video-pv'] } style={{ marginTop: '18px' }} src="https://www.youtube.com/embed/_3ywoGuo68c" title="Repactuação de Dívidas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <Button link={true} path="#formulario">
                    Recupere a sua estabilidade financeira agora!
                </Button>
            </Header>
            <main className={ styles.main }>
                <Section>
                    <img src="./imagesPv/localization.png" alt="imagem decorativa" className={ styles['float-left'] } />
                    <Text bottom={true} tag="h2">Observe na linha do tempo como funciona:</Text>
                    <List />
                    <Button link={true} path="#formulario">Recupere a sua estabilidade financeira agora!</Button>
                    <img src="./imagesPv/localization.png" alt="imagem decorativa" className={ styles['float-right'] } />
                </Section>
                <Section top={true}>
                    <Text small={true} bottom={true} bg={true} tag="h2">Entenda se os benefícios da lei de repactuação são para você:</Text>
                    <div className={ styles.publico }>
                        <Publico ok={true} title="Para quem serve:">
                            <ul className={ styles.list } style={{ listStyle: 'none'}}>
                                <li>
                                    <img src="./imagesPv/check.png" alt="check" />
                                    <p style={{ textAlign: 'justify'}}>Paga mais de 35% de sua renda líquida de empréstimos, financiamentos e outras dívidas;</p>
                                </li>
                                <li>
                                    <img src="./imagesPv/check.png" alt="check" />
                                    <p style={{ textAlign: 'justify'}}>Possui gastos com moradia, alimentação, saúde, remédios, educação, transporte, água, luz, telefone, internet, vestuário, etc...</p>
                                </li>
                                <li>
                                    <img src="./imagesPv/check.png" alt="check" />
                                    <p style={{ textAlign: 'justify'}}>Não está tendo paz com suas finanças</p>
                                </li>
                            </ul>
                        </Publico>
                        <div className={ styles['vs-div']}>
                            <img src="./imagesPv/no.png" alt="vs" className={ styles['vs-img']} />
                        </div>
                        <Publico ok={false} title="Para quem não serve:">
                            <ul className={ styles.list } style={{ listStyle: 'none'}}>
                                <li>
                                    <img src="./imagesPv/x.png" alt="check" />
                                    <p style={{ textAlign: 'justify'}}>Quem fez empréstimos de má fé para se beneficiar da lei.</p>
                                </li>
                                <li>
                                    <img src="./imagesPv/x.png" alt="check" />
                                    <p style={{ textAlign: 'justify'}}>Pessoas jurídicas, exclusos avalistas.</p>
                                </li>
                            </ul>
                        </Publico>
                    </div>
                </Section>
                <Section>
                    <Calculadora />
                </Section>
                <Section>
                    <div className={ styles.text }>
                        <Subtitle justify={true}>O superendividamento é uma preocupação antiga do Brasil. No caso dos servidores públicos, esse problema torna-se ainda mais evidente, pois muitas vezes é oculto e invasivo, comprometendo suas finanças pessoais.</Subtitle>
                        <Subtitle justify={true}>
                        As instituições financeiras e grandes varejistas aproveitam-se da estabilidade natural do servidor público para aplicar juros altíssimos, tornando impossível o equilíbrio financeiro.
                        </Subtitle>
                        <Subtitle justify={true}>
                        Essas práticas abusivas prejudicam a qualidade de vida dos servidores, afetando sua saúde financeira e emocional.
                        </Subtitle>
                        <Subtitle justify={true}>
                        A boa notícia é que a Lei de Repactuação de Dívidas veio para acabar com o problema do superendividamento dos servidores públicos.
                        </Subtitle>
                        <Subtitle justify={true}>
                            <span className="strong">Com base nessa lei, estamos empenhados em ajudar você a diminuir suas dívidas e retomar o controle de suas finanças.</span>
                        </Subtitle>
                    </div>
                    <Button link={true} path='#formulario'>FAÇA A SUA PARTE! DÊ UM PEQUENO PASSO!</Button>
                </Section>
                <Section >
                    <img src="./imagesPv/1.png" alt="Imagem icônica de direito" className={ styles.lastImg }/>
                    <div className={ styles.about }>
                        <div style={{ marginBottom: '48px'}} className={ styles.centralized }>
                            <Text tag="h2">O escritório KRÜGER TOLEDO te ajuda nessa caminhada, é fácil! </Text>
                            <Subtitle>
                                Nosso alvo são as instituições financeiras.
                            </Subtitle>
                        </div>
                        <div style={{ marginBottom: '24px'}} className={ styles.centralized }>
                            <Text tag="h2">Sobre o KRÜGER TOLEDO: </Text>
                        </div>
                        <div className={ styles.text }>
                            <Subtitle justify={true}>
                                Nós somos o escritório de advocacia Krüger Toledo especializado em resolver o problema do superendividamento dos servidores públicos.
                            </Subtitle>
                            <Subtitle justify={true}>
                            Com nossa vasta experiência no atendimento de mais de 350 clientes e gerenciamento de mais de 13 milhões de reais, estamos plenamente capacitados a desenvolver estratégias jurídicas altamente eficazes para reequilibrar as finanças pessoais dos servidores públicos em um tempo recorde.
                            </Subtitle>
                        </div>
                        <Subtitle justify={true} left={true}>O escritório conta com uma equipe formada por:</Subtitle>
                        <ul style={{ marginLeft: '24px', marginTop: '24px', marginBottom: '24px'}}>
                            <li style={{ color: 'var(--pv-secondary-color)'}}>Advogados auxiliares;</li>
                            <li style={{ color: 'var(--pv-secondary-color)'}}>Contadores experientes;</li>
                            <li style={{ color: 'var(--pv-secondary-color)'}}>Técnicos contadores auxiliares;</li>
                            <li style={{ color: 'var(--pv-secondary-color)'}}>Atendimento psicológico para tratamento do sentimento de culpa do endividado;</li>
                            <li style={{ color: 'var(--pv-secondary-color)'}}>Processualista com mais de 30 anos de experiência;</li>
                            <li style={{ color: 'var(--pv-secondary-color)'}}>Equipe de apoio dedicada e pró ativa;</li>
                        </ul>
                        <Subtitle justify={true} left={true}>BRASÍLIA/DF – SÃO PAULO/SP – PORTO ALEGRE/RS</Subtitle>
                        <Button link={true} path='#formulario'>Conte com nossa ajuda!</Button>
                    </div>
                </Section>
                <Section top={true}>
                    <Text tag="h2" bg={true}>Onde estamos?</Text>
                    <Subtitle >Faça sua opção por atendimento presencial ou on-line</Subtitle>
                    <img src="./imagesPv/map.png" alt="Localização do escritório Krüger Toledo" className={ styles.map } style={{ marginTop: '24px'}}/>
                    <span style={{ marginTop: '24px'}}><Subtitle left={true} size={true}>Brasília/DF: SHTN, 1, 3105, Asa Norte, CEP 70.800-200</Subtitle></span>
                    <img src="./imagesPv/map2.png" alt="Localização do escritório Krüger Toledo" className={ styles.map } style={{ marginTop: '24px'}}/>
                    <span style={{ marginTop: '24px'}}><Subtitle left={true} size={true}>São Paulo/SP   Avenida Paulista, 1471, conjunto 511, Bela Vista</Subtitle></span>
                    <Button link={true} path='#formulario'>Quero recuperar o equilíbrio financeiro!</Button>
                </Section>
                <Section sm={true}>
                    <Text tag="h2" bottom={true}>Dúvidas Frequentes</Text>
                    <Dropdown
                        liDrowdown={faq}
                    />
                </Section>
                <div className={ styles.formulario } id="formulario">
                    {/* <div role="main" id="01-lrd-duplicado-duplicado-3fe010b73a55ecb88b9f"></div> */}
                    <form id="form_1" onSubmit={handleFormSubmit}>
                    <div className="_form-content">
                    <div class="_form_element _x88192206 _full_width " >
      <label for="fullname" class="_form-label">
        Nome
      </label>
      <div class="_field-wrapper">
        <input type="text" id="fullname" name="fullname" placeholder="Digite seu nome" />
      </div>
    </div>
    <div class="_form_element _x23776806 _full_width " >
      <label for="email" class="_form-label">
        Email*
      </label>
      <div class="_field-wrapper">
        <input type="text" id="email" name="email" placeholder="Digite seu email" required/>
      </div>
    </div>
    <div class="_form_element _x13180523 _full_width " >
      <label for="phone" class="_form-label">
        Telefone*
      </label>
      <div class="_field-wrapper">
        <input type="text" id="phone" name="phone" placeholder="5561900000000" required/>
      </div>
    </div>
    <div class="_button-wrapper _full_width">
      <button id="_form_1_submit" class="_submit" type="submit">
        Enviar
      </button>
    </div>
                    </div>
                    {/* <div className="_form-thank-you" style={{ display: thankYouMessage ? 'block' : 'none' }}>
                        {thankYouMessage}
                    </div>
                    <div className="_form_error" style={{ display: errorMessage ? 'block' : 'none' }}>
                        {errorMessage}
                    </div> */}
                    {/* Botão de envio do formulário aqui */}
                    <button type="submit">Enviar</button>
                    </form>
                    <img src="./imagesPv/logo.png" alt="Escritório de advocacia Krüger Toledo" />
                </div>
            </main>
        </Template>
    )
}
