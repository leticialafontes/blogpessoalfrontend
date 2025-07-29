import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function Login() {
  const { nome, trocarNome } = useContext(UserContext);
  let navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/home");
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="formulario">
        <h1>Autenticar Usuário</h1>
        <div className="campo">
          <label htmlFor="usuario">Nome</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Nome do Usuário"
            value={nome}
            onChange={(event) => trocarNome(event.target.value)}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
