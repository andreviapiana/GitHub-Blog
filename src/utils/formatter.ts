import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR'

export function formatDistanceDate(data: string) {
  return formatDistanceToNow(new Date(data), {
    addSuffix: true,
    locale: ptBR,
  })
}
