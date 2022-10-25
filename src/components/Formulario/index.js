import axios from 'axios';
import React, {useState} from 'react';
import './index.css';

export default function Formulario(props){
    const [titulo, setTitulo] = useState("");
    const [content, setContent] = useState("");

    const criarNota = (event) =>{
        event.preventDefault();
        axios
            .post("http://localhost:8000/api/notes/", {title: titulo, content:content})
            .then((resposne) =>{
                setTitulo("");
                setContent("");
                props.atualiza();
            })
    }

    const tituloChanged = (event)=>{
        setTitulo(event.target.value);
    }
    
    const contentChanged = (event)=>{
        setContent(event.target.value);
    }

    return (
        <form className="form-card" onSubmit={criarNota}>
        <input
          className="form-card-title"
          type="text"
          name="titulo"
          placeholder="Título"
          onChange={tituloChanged}
          value={titulo}
        />
        <textarea
          className="autoresize"
          name="detalhes"
          placeholder="Digite o conteúdo..."
          onChange={contentChanged}
          value={content}
        ></textarea>
        <button className="btn" type="submit">Criar</button>
      </form>
    );
}