import axios from "axios";
import {useState, useEffect} from "react";
import './App.css';
import Note from './components/Note';
import Formulario from './components/Formulario';

function App() {
  const [notes, setNotes] = useState([]);

  const atualizaNotas = () => {
    axios
    .get("http://localhost:8000/api/notes/")
    .then((response) => {
      
      setNotes(response.data);
      console.log(notes);
    })
  }

  useEffect(()=>{
    atualizaNotas();
  }, []);


  return (
    <div className="App">
      <Formulario atualiza={atualizaNotas}/>
      {notes.map((note) => (
        <Note key={`note__${note.id}`} title={note.title}>{note.content}</Note>
      ))}
    </div>
  );
}

export default App;
