## Exercício: Escreva uma função que otimiza a saída de notas de um caixa eletrônico.
Este caixa eletrônico contém notas de **R$1,00, R$5,00, R$10,00** e **R$50,00**.
Sua tarefa consiste em devolver o menor número de notas que corresponda ao valor total pedido pelo cliente do banco. Se o cliente pedir R$10,00, basta devolver uma nota de R$10,00.
Caso o cliente tenha pedido R$8,00, o caixa eletrônico deverá devolver 1 nota de R$5,00 e mais 3 notas de R$1,00. Se o cliente pedir R$82,00, deverá devolver 1 nota de R$50,00,
3 notas de R$10,00 e 2 de R$1,00. Uma solução inválida para este último caso seria: 8 notas de R$10,00 e 2 notas de R$1,00.

### Especificações:
- Entrada -> Argumento da função: Um inteiro entre 1 e 10000 representando o valor pedido pelo cliente do banco.
- Saída -> A saída deverá ter exatamente o seguinte padrão: 
  
```
"Notas entregues: X notas de R$50,00, Y notas de R$10,00, W notas de R$5,00 e Z notas de R$1,00". 
```
Sendo X, Y, W e Z inteiros positivos.

- Não esqueça de validar as entradas!
- Adicione ao código-fonte comentários que podem ajudar o entendimento da solução!
- O código pode ser escrito em inglês ou português

Modelo da função (Somente um exemplo para referência):
```
function caixaeletronico ($totalRequerido) {
    // Seu código vem aqui 
    
    console.log(`Notas entregues: ${x} notas de R$50,00, ${y} notas de R$10,00,  ${w} notas de R$5,00 e ${z} notas de R$1,00`);
}
```