import Tarefa from '../Tarefa/indext'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar framework',
    descricao: 'Estudar o framework X para o projeto Y',
    prioridade: 'Importante!',
    status: 'Pendente'
  },
  {
    titulo: 'Fazer tarefa',
    descricao: 'Fianalizar tarefa do módulo 20',
    prioridade: 'Urgente!',
    status: 'Concluído'
  },
  {
    titulo: 'Finalizar briefing do projeto',
    descricao: 'Enviar email',
    prioridade: 'Importante!',
    status: 'Pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p> 2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
