import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import fotominha from './components/imagens/perfil.jpg';
import facul from './components/imagens/uninove.png';
import imagememail from './components/imagens/email.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotominha}
          nome="Nathiara Costa" 
          descricao="Oi, eu sou a Nathiara Costa. Formada em Pedagogia, atualmente em transição de carreira para área de tecnologia. Motivada por desafios pessoais, buscando se desenvolver cada dia mais, fortalecendo a base do desenvolvimento e aplicando esse conhecimento para construir aplicações solidas.

          Acredito que a Pedagogia e a Tecnologia são duas ferramentas poderosíssimas que juntas podem mudar o mundo para melhor."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Desenvolvedora Full Stack em formação!" 
        />
        
        <CardGrande 
          imagem= {facul} 
          nome="Uninove" 
          descricao="Pedagoga em formação." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
      <div className="page-section-container">
        <h2>Contato</h2>
        <CardPequeno
          imagem={imagememail} 
          texto="nathiara@live.com" 
        /> 
      </div>
    </div>
  );
}

export default App;
