import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form className="form">
        <input placeholder="Nome de usuário*" type="text" maxlength="18" />
        <input placeholder="Nome completo*" />
        <input placeholder="Endereço de e-mail*" />
        <input placeholder="Confirme seu e-mail*" />
        <div className="row">
          <input className="senha" placeholder="Senha*" />
          <input className="senha" placeholder="Confirmar senha" />
        </div>
        <div className="row">
          <input type="checkbox" />
          <p> Eu aceito os termos de uso da aplicação</p>
        </div>
        <button>CADASTRAR</button>
        <p>Já possui uma conta?</p>
      </form>
    </div>
  );
}

export default App;
