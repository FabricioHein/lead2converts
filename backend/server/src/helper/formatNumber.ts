/* Author: Gabriel Novais | Github: ganovais | LinkedIn: ganovais */
export function formatNumber(number: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number / 100);
}
