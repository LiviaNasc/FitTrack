import * as C from './styles';

function UsuarioCard({ usuario, onEditar }) {
  return (
    <C.Card>
      <div>
        <strong>{usuario.nome}</strong>
        <p>{usuario.email}</p>
      </div>
      <div>
        <button onClick={onEditar}>Editar</button>
      </div>
    </C.Card>
  );
}


export default UsuarioCard;
