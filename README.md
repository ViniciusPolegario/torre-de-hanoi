A Torre de Hanoi é um quebra-cabeças.

Ele consiste de três varetas e um número de discos de diferentes tamanhos que podem ser encaixados em qualquer vareta. O jogo começa com todos os discos empilhados em uma vareta, do maior (embaixo) para o menor (no topo).



O objetivo do quebra-cabeças é mover toda a pilha para outra vareta obedecendo às seguintes regras:

Apenas um disco pode ser movido por vez.
Cada movimento consiste de pegar o disco de cima de uma das pilhas e movê-lo para o topo de outra pilha.
Nenhum disco pode ser colocado no topo de um disco menor.
Aqui está uma animação mostrando como um jogador pode completar o quebra-cabeças com 4 discos.



Se quiser aprender mais sobre o jogo, você pode ler seu artigo na Wikipédia.

Programação em Dupla
Vocês trabalharão em duplas para criar uma versão JavaScript de uma Torre de Hanoi.

O envio deve ser o trabalho realizado por você e seu colega - (não copiem a solução escrita por outra pessoa).

Observação
Não será permitido o uso de LIVE SHARE ou qualquer outra extensão de live coding em equipe, ao invés disso, tente pôr em prática seu conhecimento de git usando branchs.

Aqui tem alguns sites de referência:

Comandos básicos de git
Resolver um conflito de merge usando a linha de comando
Resolving Merge Conflicts from the GitLab UI
Dicas
Faça cada torre ser uma caixa flex que empilha elementos de baixo para cima usando as seguintes propriedades CSS:
{
   display: flex; 
   flex-direction: column-reverse; 
   align-items: center;
}
Você precisa fazer o jogador clicar duas vezes para cada movimento: primeiro para selecionar a torre de origem, e depois para selecionar a torre de destino. Use uma variável para registrar qual modo o jogador está.
Adicione um handler de clique em cada uma das três torres. Use event.currentTarget dentro do handler de evento para determinar qual torre foi clicada.
Use a propriedade DOM childElementCount para saber quantos discos estão em uma torre.
Use a propriedade DOM lastElementChild para saber qual é o disco no topo da torre.
Use o método DOM appendChild() para adicionar um disco a uma torre (você já usou este método várias vezes em tarefas anteriores). Observe que quando você usa appendChild em um elemento que já tem um pai, ele é automaticamente removido do pai anterior e adicionado no novo.
Use a propriedade Element.clientWidth para pegar o tamanho dos discos.
Envio
Criem um repositório no gitlab. Adicione grupo ka-br-<sua-turma>-correcoes como membro do seu projeto com a permissão "Reporter", e envie a url do seu gitlab pages (Ex: https://nomedeusuario.gitlab.io/tower-of-hanoi). Adicione um comentário ao seu envio informando o nome do seu colega.