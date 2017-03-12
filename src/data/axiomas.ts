import { Axioma } from './../model/axioma';
// AXIOMA 1 
const axioma1 = new Axioma();
axioma1.id = 1;
axioma1.conteudo = [];
axioma1.subAxioma = [];
axioma1.titulo = '1º GRANDE AXIOMA: DO RISCO';
axioma1.conteudo.push('Preocupação não é doença, mas sinal de saúde.');
axioma1.conteudo.push('Se você não está preocupado, não está arriscando o bastante.');
axioma1.conteudo.push('É relatado o exemplo de duas jovens Mary (a louca) e Silvia (a sóbria) que possuíam diferentes visões. Silvia, buscava um investimento que lhe trouxesse segurança e algum rendimento, por isso, a sóbria. Já Mary aceitava correr alguns riscos, para que seu capital crescesse significativamente. Silvia investiu seu dinheiro onde tivesse uma remuneração financeira segura, como na poupança, e Mary investiu em ações. No começo, Mary até perdeu parte do seu dinheiro, enquanto Silvia mantinha seu capital intacto, até com algum pequeno rendimento. Com o passar dos anos, Silvia não ficou rica, e corre o risco de não ter dinheiro para ter uma velhice confortável, já Mary com suas ações, acabou enriquecendo. Correr alguns riscos valeu a pena, além do que correr riscos não traz a sensação de estar vivendo no tédio.');
const axioma1Sub1 = new Axioma();
axioma1Sub1.id = 101;
axioma1Sub1.conteudo = [];
axioma1Sub1.titulo = '1º AXIOMA MENOR - Só aposte o que valer a pena.';
axioma1Sub1.conteudo.push('Só aposte o que valer a pena. Não adianta querer apostar valores pequenos com a esperança de ficar rico. É claro que não se deve apostar tudo a ponto de ficar falido, mas sim a níveis que valham a pena.');
const axioma1Sub2 = new Axioma();
axioma1Sub2.id = 102;
axioma1Sub2.conteudo = [];
axioma1Sub2.titulo = '2º AXIOMA MENOR - Resista à tentação das diversificações.';
axioma1Sub2.conteudo.push('Diversificar os investimentos, significa reduzir os riscos e com eles a chance de ficar rico. Como é citado, “Ponha os seus ovos no mesmo cesto, e tome conta do cesto.”');
axioma1.subAxioma.push(axioma1Sub1);
axioma1.subAxioma.push(axioma1Sub2);

// AXIOMA 2
const axioma2 = new Axioma();
axioma2.id = 2;
axioma2.conteudo = [];
axioma2.subAxioma = [];
axioma2.titulo = '2º GRANDE AXIOMA: DA GANÂNCIA';
axioma2.conteudo.push('Realize sempre o lucro cedo demais.');
axioma2.conteudo.push('É feito um comparativo, com jogadores de cassinos, que deixam que a ganância os conduza, não sabendo a hora de parar. Esse axioma diz que a ganância faz com que você sempre queira mais, e não se satisfaça com o que ganhou, é preciso saber a hora de sair  do “jogo”. Com certeza você vai se arrepender por sair cedo demais alguma vez, e isso vai lhe doer muito, mas é melhor sair cedo demais, do que tarde demais e perdendo dinheiro.');
const axioma2Sub3 = new Axioma();
axioma2Sub3.id = 103;
axioma2Sub3.conteudo = [];
axioma2Sub3.titulo = '3º AXIOMA MENOR - Entre no negócio sabendo quanto quer ganhar; quando chegar lá caia fora.';
axioma2Sub3.conteudo.push('É aconselhável que antes de se entrar num negócio, definir quanto se quer ganhar, o quanto é um bom lucro, e quando atingi-lo sair fora dele, a não ser que se tenha uma boa justificativa, para se acreditar que deve esperar mais um pouco.');
axioma2.subAxioma.push(axioma2Sub3);

// AXIOMA 3
const axioma3 = new Axioma();
axioma3.id = 3;
axioma3.conteudo = [];
axioma3.subAxioma = [];
axioma3.titulo = '3º GRANDE  AXIOMA: DA ESPERANÇA';
axioma3.conteudo.push('Quando o barco começar afundar não reze. Abandone-o.');
axioma3.conteudo.push('Este axioma, fala de como escapar quando o negócio vai mal, e isso vai acontecer, mais cedo ou mais tarde, cerca de metade de seus investimentos vão dar errado, por isso é preciso saber perder. Estipule margens de perda entre 10% e 15% ou até 20%. Se começar a perder, não tenha dúvida, abandone o barco. Não crie falsas esperanças que as coisas vão melhorar, você pode perder mais ainda, parta para um novo investimento.');
const axioma3Sub4 = new Axioma();
axioma3Sub4.id = 104;
axioma3Sub4.conteudo = [];
axioma3Sub4.titulo = '4º AXIOMA MENOR - Aceite as pequenas perdas com um sorriso, como fatos da vida.';
axioma3Sub4.conteudo.push('Conte incorrer em várias, enquanto espera um grande ganho.  Claro que aceitar uma perda com um sorriso, é um pouco demais, mas se uma operação não deu de funcionar, caia fora e parta para outra. Tente encarar as pequenas perdas, como custo das especulações.');
axioma3.subAxioma.push(axioma3Sub4);

// AXIOMA 4
const axioma4 = new Axioma();
axioma4.id = 4;
axioma4.conteudo = [];
axioma4.titulo = '4º GRANDE AXIOMA: DAS PREVISSÕES';
axioma4.conteudo.push('O comportamento do ser humano não é previsível.');
axioma4.conteudo.push('Desconfio de quem afirmar que conhece uma nesga que seja do futuro.');
axioma4.conteudo.push('Não de atenção a previsões sobre o futuro e a falsos profetas, ninguém consegue prever o futuro. Nem mesmo os famosos economistas conseguem prever o que vai acontecer. Faça projeto em curto espaço de tempo, se baseando em tendências de mercado e aí sim talvez por um pouco de sorte obtenha alguns ganhos sem dar atenção às previsões dos profetas.');

// AXIOMA 5
const axioma5 = new Axioma();
axioma5.id = 5;
axioma5.conteudo = [];
axioma5.subAxioma = [];
axioma5.titulo = '5º GRANDE AXIOMA: DOS PADRÕES';
axioma5.conteudo.push('Até começar a parecer ordem, o caos não é perigoso.');
axioma5.conteudo.push('O mundo do dinheiro é um mundo desordenado, sem nenhum padrão de comportamento, um absoluto caos, e quem achar que achou uma ordem, está enganado, e isso se torna perigoso. Não existe fórmula para isso.');
const axioma5Sub5 = new Axioma();
axioma5Sub5.id = 105;
axioma5Sub5.conteudo = [];
axioma5Sub5.titulo = '5º AXIOMA MENOR - Cuidado com a armadilha do historiador.';
axioma5Sub5.conteudo.push('A história as vezes se repete, mas não de forma confiável a ponto de você apostar prudentemente o seu dinheiro, é preciso cuidado para não cair nessa armadilha.');
const axioma5Sub6 = new Axioma();
axioma5Sub6.id = 106;
axioma5Sub6.conteudo = [];
axioma5Sub6.titulo = '6º AXIOMA MENOR - Cuidado com a ilusão do grafista.';
axioma5Sub6.conteudo.push('A ilusão grafista, frequentemente, é uma extensão gráfica da armadilha do historiador, onde, ele pressupõe que se certos aspectos se repetirem logo acontecerá uma alta, ou uma baixa, conforme aconteceu no passado. Sendo imprudente apostar nessa escolha.');
const axioma5Sub7 = new Axioma();
axioma5Sub7.id = 104;
axioma5Sub7.conteudo = [];
axioma5Sub7.titulo = '7º AXIOMA MENOR - Cuidado com a ilusão de correlação e a ilusão de causalidade.';
axioma5Sub7.conteudo.push('Deve-se tomar cuidado, com esses aspectos, pois é da mente humana, criar correlações e ilusões de casualidade onde não existem, é citado um exemplo de duas ações e seus comportamentos, uma espécie de efeito gangorra, que “sempre” acontece, só que esse sempre, é apenas ilusão.');
const axioma5Sub8 = new Axioma();
axioma5Sub8.id = 108;
axioma5Sub8.conteudo = [];
axioma5Sub8.titulo = '8º AXIOMA MENOR - Cuidado com a falácia do jogador.';
axioma5Sub8.conteudo.push('É uma ilusão onde as pessoas acham que estão no seu dia de sorte, e que tudo vai dar certo, exemplos de cassinos são relatados, ilustrando de como essa ilusão pode fazer com que se perca dinheiro. O jogador aposta demais, e acaba abusando da sua própria sorte.');
axioma5.subAxioma.push(axioma5Sub5);
axioma5.subAxioma.push(axioma5Sub6);
axioma5.subAxioma.push(axioma5Sub7);
axioma5.subAxioma.push(axioma5Sub8);

// AXIOMA 6
const axioma6 = new Axioma();
axioma6.id = 6;
axioma6.conteudo = [];
axioma6.subAxioma = [];
axioma6.titulo = '6º GRANDE AXIOMA: DA MOBILIDADE';
axioma6.conteudo.push('Evite lançar raízes. Tolhem seus movimentos.');
axioma6.conteudo.push('É dividido nos dois axiomas menores.');
const axioma6Sub9 = new Axioma();
axioma6Sub9.id = 109;
axioma6Sub9.conteudo = [];
axioma6Sub9.titulo = '9º AXIOMA MENOR - Numa operação que não deu certo, não se deixe apanhar por sentimentos; como lealdade ou saudade.';
axioma6Sub9.conteudo.push('É ilustrado um exemplo de um casal que deixa de vender sua casa por uma boa quantia por causa de suas raízes, e por fim veem que não valeu a pena. Se seu objetivo é ganhar dinheiro, é um erro deixar se prender demais as coisas materiais nas quais o seu capital esteja investido, sob pena de perder muito dinheiro.');
const axioma6Sub10 = new Axioma();
axioma6Sub10.id = 110;
axioma6Sub10.conteudo = [];
axioma6Sub10.titulo = '10º AXIOMA MENOR - Jamais hesite em sair de um negócio se algo mais atraente aparecer à sua frente.';
axioma6Sub10.conteudo.push('Tendo lançado raízes, a sua eficiência como especulador diminui demais. Não se deve apegar às coisas, pois se apegar às coisas prejudica a sua mobilidade, não insista apenas em um único negócio, por exemplo nas ações da empresa X, não fique amarrado a ela, se surgir outro negócio esqueça-a e vá em busca do melhor resultado.');
axioma6.subAxioma.push(axioma6Sub9);
axioma6.subAxioma.push(axioma6Sub10);

// AXIOMA 7
const axioma7 = new Axioma();
axioma7.id = 7;
axioma7.conteudo = [];
axioma7.subAxioma = [];
axioma7.titulo = '7º GRANDE AXIOMA: DA INTUIÇÃO';
axioma7.conteudo.push('Só se pode confiar num palpite que possa ser explicado.');
axioma7.conteudo.push('Como especulador, é provável que você tenha palpites com frequência, e você pode usá-los se for capaz. Um palpite errado pode ser muito perigoso, por isso é importante testar seu palpite, se você tem conhecimento sobre o assunto, se você sabe o bastante a respeito, etc.');
const axioma7Sub11 = new Axioma();
axioma7Sub11.id = 111;
axioma7Sub11.conteudo = [];
axioma7Sub11.titulo = '11º PRIMEIRO AXIOMA MENOR - Jamais confunda palpite com esperança.';
axioma7Sub11.conteudo.push('É possível que se alguma coisa que você quer muito, acabe se tornando num palpite, é necessário, manter os pés no chão para não confundir com esperança, por isso é importante tomar muito cuidado.');
axioma7.subAxioma.push(axioma7Sub11);

// AXIOMA 8
const axioma8 = new Axioma();
axioma8.id = 8;
axioma8.conteudo = [];
axioma8.subAxioma = [];
axioma8.titulo = '8º GRANDE AXIOMA: DA RELIGIÃO E DO OCULTISMO';
axioma8.conteudo.push('É improvável que entre os desígnio de Deus para o Universo se inclua o de fazer você ficar rico.');
axioma8.conteudo.push('Apoiar-se no sobrenatural, é como se apoiar em ilusões de ordem, se depende de Deus, ou de qualquer força ou entidade para alcançar a fortuna, há grandes chances de que um dia você baixe a guarda e perca tudo, é o que diz esse axioma.');
const axioma8Sub12 = new Axioma();
axioma8Sub12.id = 112;
axioma8Sub12.conteudo = [];
axioma8Sub12.titulo = '12º AXIOMA MENOR - Se astrologia funcionasse, todos os astrólogos seriam ricos.';
axioma8Sub12.conteudo.push('É citado o exemplo de algumas pessoas que se julgam gurus, mas que na verdade, na passa de conversa. É preciso coerência para não acreditar nesses falsos adivinhos.');
const axioma8Sub13 = new Axioma();
axioma8Sub13.id = 113;
axioma8Sub13.conteudo = [];
axioma8Sub13.titulo = '13º AXIOMA MENOR - Não é necessário exorcizar uma supertição. Podemos curti-la, desde que ela conheça o seu lugar.';
axioma8Sub13.conteudo.push('Você não precisa exorcizar sua superstição, mas pode sim utilizá\-la para outros fins, como jogos em que a somente a sorte é o que conta, como exemplo citado, o jogo do bicho, mas não invista dinheiro baseado em superstições.');
axioma8.subAxioma.push(axioma8Sub12);
axioma8.subAxioma.push(axioma8Sub13);

// AXIOMA 9
const axioma9 = new Axioma();
axioma9.id = 9;
axioma9.conteudo = [];
axioma9.titulo = '9º GRANDE AXIOMA: DO OTIMISMO E DO PESSIMISMO';
axioma9.conteudo.push('Otimismo significa esperar o melhor, mas confiança significa saber como se lidará com o pior. Jamais faça uma jogada por otimismo apenas.');
axioma9.conteudo.push('Deve-se tomar muito cuidado com o otimismo, pois ele pode ser perigoso. Quando existe dinheiro envolvido, o que é necessário é confiança, que nasce do uso construtivo do pessimismo. Jamais faça uma jogada por otimismo apenas, em vez disso vá atrás da confiança, confiança que não vem de esperar o melhor e sim de como lidar com o pior. Antes de entrar num negócio, pense como sairá dele se der errado.');

// AXIOMA 10
const axioma10 = new Axioma();
axioma10.id = 10;
axioma10.conteudo = [];
axioma10.subAxioma = [];
axioma10.titulo = '10º GRANDE AXIOMA: DO CONSENSO';
axioma10.conteudo.push('Fuja da opinião da maioria, provavelmente está errada.');
axioma10.conteudo.push('Nesse axioma o autor fala que nem sempre a maioria é que se tem a razão, e ainda, que é mais fácil do que poucos estiverem certos do que muitos. Não deixe se influenciar, raciocine por você mesmo, questione e examine, não acredite, ou melhor questione velhos conceitos e ditados.');
const axioma10Sub14 = new Axioma();
axioma10Sub14.id = 114;
axioma10Sub14.conteudo = [];
axioma10Sub14.titulo = '14º AXIOMA MENOR - Jamais embarque nas especulações da moda com freqüência, a melhor hora de se comprar alguma coisa é quando ninguém quer.';
axioma10Sub14.conteudo.push('Como é dito acima, a melhor hora de comprar é quando todos querem vender, pois o preço é muito inferior, e o contrário também deve ser praticado, quando todos querem comprar, venda e realize o seu lucro.');
axioma10.subAxioma.push(axioma10Sub14);

// AXIOMA 11
const axioma11 = new Axioma();
axioma11.id = 11;
axioma11.conteudo = [];
axioma11.subAxioma = [];
axioma11.titulo = '11º  GRANDE AXIOMA: DA TEIMOSIA';
axioma11.conteudo.push('Se não deu certo da primeira vez esqueça.');
axioma11.conteudo.push('No mundo das especulações, a persistência, pode ser de grande influência negativa. Não fique estagnado em um tipo de negócio ou a uma empresa, vá atrasar do que dê mais lucro. Se não atingiu seu objetivo, caia fora é vá para outro negócio.');
const axioma11Sub15 = new Axioma();
axioma11Sub15.id = 115;
axioma11Sub15.conteudo = [];
axioma11Sub15.titulo = '15º AXIOMA MENOR - Jamais tente salvar um mau investimento fazendo "preço médio"';
axioma11Sub15.conteudo.push('A técnica conhecida como “preço médio” é uma das mais tentadoras armadilhas do mundo dos investimentos. Funciona da seguinte forma, se você comprou uma ação por 100,00 e ela baixou para 50,00. Compre outra agora pagando 50,00 ou seja 150,00 dividido por 2 fica 75,00 (preço médio). Isso não diminui a sua perda, mas sim cria uma ilusão aparente, o que pode causar maior perda ainda.');
axioma11.subAxioma.push(axioma11Sub15);

// AXIOMA 12
const axioma12 = new Axioma();
axioma12.id = 12;
axioma12.conteudo = [];
axioma12.subAxioma = [];
axioma12.titulo = '12º GRANDE  AXIOMA: DO PLANEJAMENTO';
axioma12.conteudo.push('Planejamento a longo prazo geram perigos e crença de que o futuro está sob controle.');
axioma12.conteudo.push('É importante jamais levar muito a sério os seus planos a longo prazo, nem os de quem quer que seja.');
axioma12.conteudo.push('Ao contrário do que muitos dizem, este axioma diz que o planejamento a longo prazo, é sim o maior risco a correr, pois ninguém pode planejar alguma coisa a longo prazo se não sabe o que vai acontecer no futuro. Como se pode planejar alguma coisa? Isso pode gerar uma crença que o futuro está sob controle, e isso não é verdade.');
const axioma12Sub16 = new Axioma();
axioma12Sub16.id = 116;
axioma12Sub16.conteudo = [];
axioma12Sub16.titulo = '16º AXIOMA MENOR - Fuja de investimentos a longo prazo.';
axioma12Sub16.conteudo.push('Apostar no amanhã é um risco, apostar a vinte ou trinta anos é loucura total, e assim que se pode resumir o que o investimento em longo prazo consiste. Com isso você também perde mobilidade, cria raízes, e deixa de aproveitar as oportunidades que surgem.');
axioma12.subAxioma.push(axioma12Sub16);


// AXIOMAS
export const axiomas: Axioma[] = [];
axiomas.push(axioma1);
axiomas.push(axioma2);
axiomas.push(axioma3);
axiomas.push(axioma4);
axiomas.push(axioma5);
axiomas.push(axioma6);
axiomas.push(axioma7);
axiomas.push(axioma8);
axiomas.push(axioma9);
axiomas.push(axioma10);
axiomas.push(axioma11);
axiomas.push(axioma12);
