import { P } from './styles'

export type Props = {
  // valor: string;
  children: string,
  tipo?: string,
  fontSize?: number
}
const Paragraph = ({children, tipo = 'principal', fontSize}: Props) => (
  <P tipo={tipo} fontSize={fontSize}>{children}
  </P>
)


export default Paragraph;

