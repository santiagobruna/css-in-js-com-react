import styled from "styled-components";

type ButtonProps = {
  principal: boolean
  fontSize?: string
}

// const Button = styled.button`
//   background-color: #3498db;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 16px;

//   &:hover {
//     background-color: #2980b9;
//   }
// `;

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize  || '16px' };
`
const BotaoPerigo = styled(Button)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`
function Teste () {
  return(
    <>
      <Button principal={true}>Enviar</Button>
      <Button fontSize="13px" principal={false}>Cancelar</Button>
      <BotaoPerigo as="a" principal>
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste;
