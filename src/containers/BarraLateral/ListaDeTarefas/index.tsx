import Tarefa from '../Tarefa/indext'
import { Container } from './styles'

import * as enums from '../../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar framework',
    descricao: 'Estudar o framework X para o projeto Y',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Fazer tarefa',
    descricao: 'Fianalizar tarefa do módulo 20',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Finalizar briefing do projeto',
    descricao: 'Enviar email',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
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
