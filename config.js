const DATA_INICIO_CRONOGRAMA = "2026-03-24";

const FASES = [
  {
    id: "fase-1-base-5ano",
    titulo: "Fase 1 — Base forte do 5º ano",
    inicioSemana: 1,
    fimSemana: 12,
    cor: "#2563eb",
    descricao: "Consolidação das bases de Português e Matemática do 5º ano."
  },
  {
    id: "fase-2-consolidacao-aceleracao",
    titulo: "Fase 2 — Consolidação e aceleração",
    inicioSemana: 13,
    fimSemana: 24,
    cor: "#16a34a",
    descricao: "Aprofundamento das habilidades centrais e aumento gradual de dificuldade."
  },
  {
    id: "fase-3-ponte-6ano",
    titulo: "Fase 3 — Ponte para o 6º ano",
    inicioSemana: 25,
    fimSemana: 36,
    cor: "#ca8a04",
    descricao: "Introdução progressiva aos conteúdos estruturantes do 6º ano."
  },
  {
    id: "fase-4-dominio-hibrido",
    titulo: "Fase 4 — Domínio híbrido 5º + 6º",
    inicioSemana: 37,
    fimSemana: 45,
    cor: "#9333ea",
    descricao: "Mistura estratégica de conteúdos para flexibilidade cognitiva."
  },
  {
    id: "fase-5-sprint-final",
    titulo: "Fase 5 — Sprint final Objetivo",
    inicioSemana: 46,
    fimSemana: 51,
    cor: "#dc2626",
    descricao: "Revisão final, simulados, correção de erros e estratégia de prova."
  }
];

const SEMANAS = [
  {
    semana: 1,
    fase: "fase-1-base-5ano",
    titulo: "Leitura, interpretação e numeração",
    descricao: "Construção da base inicial em leitura e sistema de numeração decimal.",
    dias: [
      { disciplina: "portugues", titulo: "Ideia principal do texto", expansao: "Leitura guiada", tags: ["leitura", "interpretacao", "ideia-principal"] },
      { disciplina: "matematica", titulo: "Leitura, escrita e comparação de números naturais", expansao: "Reta numérica", tags: ["numeros", "comparacao", "valor-posicional"] },
      { disciplina: "portugues", titulo: "Informação explícita e implícita", expansao: "Inferência simples", tags: ["texto", "explicita", "implicita"] },
      { disciplina: "matematica", titulo: "Valor posicional e decomposição", expansao: "Material dourado", tags: ["decomposicao", "ordens", "classes"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Ciências: observar, registrar e comparar", expansao: "Ciências", tags: ["revisao", "quiz20", "ciencias"] }
    ]
  },
  {
    semana: 2,
    fase: "fase-1-base-5ano",
    titulo: "Inferência e operações iniciais",
    descricao: "Leitura com pistas do texto e fortalecimento de operações básicas.",
    dias: [
      { disciplina: "portugues", titulo: "Pistas do texto e inferência simples", expansao: "Leitura guiada", tags: ["inferencia", "leitura", "pistas"] },
      { disciplina: "matematica", titulo: "Ordem crescente, decrescente e comparação", expansao: "Sequências numéricas", tags: ["ordem", "comparacao", "sequencia"] },
      { disciplina: "portugues", titulo: "Sentido de palavras no contexto", expansao: "Vocabulário contextual", tags: ["vocabulario", "contexto", "interpretacao"] },
      { disciplina: "matematica", titulo: "Adição e subtração sem e com reagrupamento", expansao: "Contas armadas", tags: ["adicao", "subtracao", "reagrupamento"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + História: passado, presente e fontes", expansao: "História", tags: ["revisao", "quiz20", "historia"] }
    ]
  },
  {
    semana: 3,
    fase: "fase-1-base-5ano",
    titulo: "Narrativa e grupos iguais",
    descricao: "Elementos da narrativa e introdução à multiplicação e divisão.",
    dias: [
      { disciplina: "portugues", titulo: "Elementos da narrativa", expansao: "Contação de história", tags: ["narrativa", "personagem", "tempo"] },
      { disciplina: "matematica", titulo: "Multiplicação como adição de grupos iguais", expansao: "Objetos concretos", tags: ["multiplicacao", "grupos-iguais", "tabuada"] },
      { disciplina: "portugues", titulo: "Personagem, tempo, espaço e conflito", expansao: "Mapa da narrativa", tags: ["personagem", "espaco", "conflito"] },
      { disciplina: "matematica", titulo: "Divisão como repartição e medida", expansao: "Distribuição concreta", tags: ["divisao", "reparticao", "medida"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Geografia: lugar, bairro e mapa simples", expansao: "Geografia", tags: ["revisao", "quiz20", "geografia"] }
    ]
  },
  {
    semana: 4,
    fase: "fase-1-base-5ano",
    titulo: "Leitura fluente e problemas",
    descricao: "Fluência leitora e problemas com as quatro operações.",
    dias: [
      { disciplina: "portugues", titulo: "Leitura fluente e compreensão global", expansao: "Leitura em voz alta", tags: ["fluencia", "compreensao", "leitura"] },
      { disciplina: "matematica", titulo: "Problemas com as 4 operações", expansao: "Situações do cotidiano", tags: ["problemas", "operacoes", "raciocinio"] },
      { disciplina: "portugues", titulo: "Pontuação básica na leitura e no sentido", expansao: "Leitura expressiva", tags: ["pontuacao", "entonação", "sentido"] },
      { disciplina: "matematica", titulo: "Escolha da operação correta em problemas", expansao: "Palavras-chave com sentido", tags: ["problemas", "estrategia", "operacoes"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Ciências: estados físicos e transformações", expansao: "Ciências", tags: ["revisao", "quiz20", "ciencias"] }
    ]
  },
  {
    semana: 5,
    fase: "fase-1-base-5ano",
    titulo: "Classes de palavras e frações",
    descricao: "Primeiro contato com substantivo, artigo, adjetivo e fração.",
    dias: [
      { disciplina: "portugues", titulo: "Substantivo, artigo e adjetivo", expansao: "Classificação no texto", tags: ["gramatica", "substantivo", "adjetivo"] },
      { disciplina: "matematica", titulo: "Fração como parte do todo", expansao: "Recortes e figuras", tags: ["fracao", "parte-todo", "concreto"] },
      { disciplina: "portugues", titulo: "Relações entre palavras no texto", expansao: "Campo semântico", tags: ["texto", "coerencia", "vocabulario"] },
      { disciplina: "matematica", titulo: "Representação pictórica de frações", expansao: "Modelos visuais", tags: ["fracao", "pictorico", "representacao"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + História: comunidade, regras e convivência", expansao: "História", tags: ["revisao", "quiz20", "historia"] }
    ]
  },
  {
    semana: 6,
    fase: "fase-1-base-5ano",
    titulo: "Verbos e frações equivalentes",
    descricao: "Uso dos verbos e comparação de frações por equivalência.",
    dias: [
      { disciplina: "portugues", titulo: "Verbos e noção de tempo verbal", expansao: "Linha do tempo", tags: ["verbos", "tempo-verbal", "gramatica"] },
      { disciplina: "matematica", titulo: "Frações equivalentes", expansao: "Dobrar e repartir", tags: ["fracao", "equivalencia", "comparacao"] },
      { disciplina: "portugues", titulo: "Verbos em narrativas", expansao: "Texto narrativo", tags: ["verbos", "narrativa", "coesao"] },
      { disciplina: "matematica", titulo: "Comparação de frações", expansao: "Barras de fração", tags: ["fracao", "comparacao", "ordem"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Geografia: paisagem natural e humanizada", expansao: "Geografia", tags: ["revisao", "quiz20", "geografia"] }
    ]
  },
  {
    semana: 7,
    fase: "fase-1-base-5ano",
    titulo: "Pronomes e números decimais",
    descricao: "Coesão textual com pronomes e introdução aos decimais.",
    dias: [
      { disciplina: "portugues", titulo: "Pronomes e retomada no texto", expansao: "Substituições no texto", tags: ["pronomes", "coesao", "retomada"] },
      { disciplina: "matematica", titulo: "Números decimais e dinheiro", expansao: "Moedas e cédulas", tags: ["decimais", "dinheiro", "sistema-decimal"] },
      { disciplina: "portugues", titulo: "Coesão simples", expansao: "Ligações entre frases", tags: ["coesao", "texto", "organizacao"] },
      { disciplina: "matematica", titulo: "Comparação entre decimais", expansao: "Reta numérica", tags: ["decimais", "comparacao", "ordem"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Ciências: corpo humano e hábitos saudáveis", expansao: "Ciências", tags: ["revisao", "quiz20", "ciencias"] }
    ]
  },
  {
    semana: 8,
    fase: "fase-1-base-5ano",
    titulo: "Gêneros curtos e operações com decimais",
    descricao: "Leitura de gêneros curtos com humor e uso de decimais em contexto real.",
    dias: [
      { disciplina: "portugues", titulo: "Gêneros literários curtos — anedota, tirinha, miniconto", expansao: "Leitura comparativa", tags: ["generos", "tirinha", "miniconto"] },
      { disciplina: "matematica", titulo: "Adição e subtração com decimais", expansao: "Dinheiro", tags: ["decimais", "adicao", "subtracao"] },
      { disciplina: "portugues", titulo: "Humor e intenção do texto", expansao: "Tirinhas", tags: ["humor", "intencao", "interpretacao"] },
      { disciplina: "matematica", titulo: "Problemas com dinheiro", expansao: "Compras e troco", tags: ["dinheiro", "problemas", "decimais"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + História: formação do povo brasileiro", expansao: "História", tags: ["revisao", "quiz20", "historia"] }
    ]
  },
  {
    semana: 9,
    fase: "fase-1-base-5ano",
    titulo: "Poema e porcentagem simples",
    descricao: "Leitura poética e introdução concreta às porcentagens mais usuais.",
    dias: [
      { disciplina: "portugues", titulo: "Poemas, rimas e efeito de sentido", expansao: "Leitura expressiva", tags: ["poema", "rima", "efeito-de-sentido"] },
      { disciplina: "matematica", titulo: "Porcentagens simples — 10%, 25%, 50%, 100%", expansao: "Barras e quadros 100", tags: ["porcentagem", "fracao", "decimal"] },
      { disciplina: "portugues", titulo: "Leitura expressiva e interpretação poética", expansao: "Entonação", tags: ["poesia", "interpretacao", "leitura"] },
      { disciplina: "matematica", titulo: "Porcentagem ligada a frações e dinheiro", expansao: "Descontos simples", tags: ["porcentagem", "dinheiro", "fracao"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Geografia: orientação, legenda e escala simples", expansao: "Geografia", tags: ["revisao", "quiz20", "geografia"] }
    ]
  },
  {
    semana: 10,
    fase: "fase-1-base-5ano",
    titulo: "Textos do cotidiano e medidas de comprimento",
    descricao: "Leitura funcional e medidas em situações práticas.",
    dias: [
      { disciplina: "portugues", titulo: "Bilhete, aviso e instrução", expansao: "Textos do dia a dia", tags: ["bilhete", "aviso", "instrucao"] },
      { disciplina: "matematica", titulo: "Medidas de comprimento", expansao: "Régua e fita métrica", tags: ["medidas", "comprimento", "unidades"] },
      { disciplina: "portugues", titulo: "Finalidade e estrutura dos gêneros do cotidiano", expansao: "Comparação de gêneros", tags: ["generos", "funcao-social", "estrutura"] },
      { disciplina: "matematica", titulo: "Conversões simples de medida", expansao: "Quadro de unidades", tags: ["comprimento", "conversao", "unidades"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Ciências: seres vivos e classificação inicial", expansao: "Ciências", tags: ["revisao", "quiz20", "ciencias"] }
    ]
  },
  {
    semana: 11,
    fase: "fase-1-base-5ano",
    titulo: "Resumo e outras medidas",
    descricao: "Selecionar informações importantes e resolver problemas com medidas.",
    dias: [
      { disciplina: "portugues", titulo: "Resumo e reconto", expansao: "Síntese oral", tags: ["resumo", "reconto", "selecao-de-informacoes"] },
      { disciplina: "matematica", titulo: "Medidas de massa e capacidade", expansao: "Balança e recipientes", tags: ["massa", "capacidade", "medidas"] },
      { disciplina: "portugues", titulo: "Selecionar informações importantes", expansao: "Marcar palavras-chave", tags: ["leitura", "resumo", "informacoes"] },
      { disciplina: "matematica", titulo: "Resolução de problemas com medidas", expansao: "Situações reais", tags: ["problemas", "medidas", "aplicacao"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + História: território, município e estado", expansao: "História", tags: ["revisao", "quiz20", "historia"] }
    ]
  },
  {
    semana: 12,
    fase: "fase-1-base-5ano",
    titulo: "Fechamento da fase 1",
    descricao: "Revisão ampla das bases do 5º ano com simulados guiados.",
    dias: [
      { disciplina: "portugues", titulo: "Revisão fase 1 — Português", expansao: "Mapa de erros", tags: ["revisao", "fase1", "portugues"] },
      { disciplina: "matematica", titulo: "Revisão fase 1 — Matemática", expansao: "Mapa de erros", tags: ["revisao", "fase1", "matematica"] },
      { disciplina: "portugues", titulo: "Simulado guiado fase 1 — Português", expansao: "Correção comentada", tags: ["simulado", "fase1", "portugues"] },
      { disciplina: "matematica", titulo: "Simulado guiado fase 1 — Matemática", expansao: "Correção comentada", tags: ["simulado", "fase1", "matematica"] },
      { disciplina: "revisao", titulo: "Revisão + Quiz 20 + fechamento diagnóstico da fase 1", expansao: "Diagnóstico", tags: ["revisao", "quiz20", "diagnostico"] }
    ]
  },
  {
    semana: 13,
    fase: "fase-2-consolidacao-aceleracao",
    titulo: "Comunicação e perímetro",
    descricao: "Textos de comunicação e introdução ao perímetro.",
    dias: [
      { disciplina: "portugues", titulo: "Cartas, e-mails e mensagens", expansao: "Comparação de suportes", tags: ["carta", "email", "mensagem"] },
      { disciplina: "matematica", titulo: "Perímetro", expansao: "Contorno de figuras", tags: ["perimetro", "geometria", "medidas"] },
      { disciplina: "portugues", titulo: "Interlocutor, objetivo e linguagem", expansao: "Quem fala com quem", tags: ["linguagem", "interlocutor", "generos"] },
      { disciplina: "matematica", titulo: "Problemas com perímetro", expansao: "Malha quadriculada", tags: ["perimetro", "problemas", "figuras"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Geografia: clima e tempo", expansao: "Geografia", tags: ["revisao", "quiz20", "geografia"] }
    ]
  },
  {
    semana: 14,
    fase: "fase-2-consolidacao-aceleracao",
    titulo: "Ortografia e área",
    descricao: "Regularidades ortográficas e noção de área em malha.",
    dias: [
      { disciplina: "portugues", titulo: "Ortografia de uso frequente", expansao: "Famílias de palavras", tags: ["ortografia", "escrita", "uso-frequente"] },
      { disciplina: "matematica", titulo: "Área por contagem de quadradinhos", expansao: "Malha quadriculada", tags: ["area", "quadradinhos", "geometria"] },
      { disciplina: "portugues", titulo: "Regularidades ortográficas", expansao: "Padrões", tags: ["ortografia", "padroes", "escrita"] },
      { disciplina: "matematica", titulo: "Área em malha quadriculada", expansao: "Figuras compostas", tags: ["area", "malha", "figuras"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Ciências: água, ar e ambiente", expansao: "Ciências", tags: ["revisao", "quiz20", "ciencias"] }
    ]
  },
  {
    semana: 15,
    fase: "fase-2-consolidacao-aceleracao",
    titulo: "Notícia e tabelas",
    descricao: "Texto jornalístico e leitura de tabelas.",
    dias: [
      { disciplina: "portugues", titulo: "Notícia e manchete", expansao: "Jornal", tags: ["noticia", "manchete", "jornal"] },
      { disciplina: "matematica", titulo: "Tabelas", expansao: "Organização de dados", tags: ["tabelas", "dados", "leitura"] },
      { disciplina: "portugues", titulo: "Fato principal e detalhes", expansao: "Pirâmide de informações", tags: ["noticia", "fato", "detalhes"] },
      { disciplina: "matematica", titulo: "Leitura e interpretação de tabelas", expansao: "Pesquisa simples", tags: ["tabelas", "interpretacao", "dados"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + História: colonização e trabalho", expansao: "História", tags: ["revisao", "quiz20", "historia"] }
    ]
  },
  {
    semana: 16,
    fase: "fase-2-consolidacao-aceleracao",
    titulo: "Tirinha e gráficos",
    descricao: "Humor visual e interpretação de gráficos de colunas.",
    dias: [
      { disciplina: "portugues", titulo: "Cartum e tirinha", expansao: "Leitura visual", tags: ["cartum", "tirinha", "humor"] },
      { disciplina: "matematica", titulo: "Gráficos de colunas", expansao: "Construção de gráfico", tags: ["graficos", "colunas", "dados"] },
      { disciplina: "portugues", titulo: "Ironia, humor e pistas visuais", expansao: "Análise da imagem", tags: ["humor", "ironia", "pistas-visuais"] },
      { disciplina: "matematica", titulo: "Interpretação de gráficos", expansao: "Comparação de dados", tags: ["graficos", "interpretacao", "comparacao"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Geografia: campo e cidade", expansao: "Geografia", tags: ["revisao", "quiz20", "geografia"] }
    ]
  },
  {
    semana: 17,
    fase: "fase-2-consolidacao-aceleracao",
    titulo: "Fato e opinião + polígonos",
    descricao: "Distinguir fato e opinião e reconhecer polígonos.",
    dias: [
      { disciplina: "portugues", titulo: "Opinião e fato", expansao: "Marcas de opinião", tags: ["opiniao", "fato", "leitura-critica"] },
      { disciplina: "matematica", titulo: "Geometria plana — polígonos", expansao: "Recortes e classificação", tags: ["poligonos", "geometria", "figuras-planas"] },
      { disciplina: "portugues", titulo: "Marcas de opinião em textos curtos", expansao: "Análise de frases", tags: ["opiniao", "argumentacao", "texto"] },
      { disciplina: "matematica", titulo: "Lados, vértices e ângulos", expansao: "Desenho de figuras", tags: ["lados", "vertices", "angulos"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Ciências: cadeia alimentar", expansao: "Ciências", tags: ["revisao", "quiz20", "ciencias"] }
    ]
  },
  {
    semana: 18,
    fase: "fase-2-consolidacao-aceleracao",
    titulo: "Parágrafo e sólidos geométricos",
    descricao: "Organização de ideias e reconhecimento de sólidos.",
    dias: [
      { disciplina: "portugues", titulo: "Parágrafo e organização de ideias", expansao: "Sequência lógica", tags: ["paragrafo", "organizacao", "texto"] },
      { disciplina: "matematica", titulo: "Sólidos geométricos", expansao: "Objetos do cotidiano", tags: ["solidos", "geometria", "espacial"] },
      { disciplina: "portugues", titulo: "Tópico frasal e sequência lógica", expansao: "Ordenação de frases", tags: ["topico-frasal", "sequencia", "coesao"] },
      { disciplina: "matematica", titulo: "Faces, arestas e vértices", expansao: "Modelos concretos", tags: ["faces", "arestas", "vertices"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + História: escravidão e resistência", expansao: "História", tags: ["revisao", "quiz20", "historia"] }
    ]
  },
  {
    semana: 19,
    fase: "fase-2-consolidacao-aceleracao",
    titulo: "Narrativa autoral e planificações",
    descricao: "Produção de narrativa curta e relação entre sólidos e planificações.",
    dias: [
      { disciplina: "portugues", titulo: "Produção de narrativa curta", expansao: "Planejamento da escrita", tags: ["escrita", "narrativa", "producao-textual"] },
      { disciplina: "matematica", titulo: "Planificações", expansao: "Montagem de sólidos", tags: ["planificacao", "solidos", "geometria"] },
      { disciplina: "portugues", titulo: "Começo, meio e fim", expansao: "Estrutura narrativa", tags: ["narrativa", "sequencia", "escrita"] },
      { disciplina: "matematica", titulo: "Ligação entre sólido e planificação", expansao: "Recorte e dobra", tags: ["planificacao", "espacial", "representacao"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Geografia: relevo e hidrografia", expansao: "Geografia", tags: ["revisao", "quiz20", "geografia"] }
    ]
  },
  {
    semana: 20,
    fase: "fase-2-consolidacao-aceleracao",
    titulo: "Leitura multissemiótica e dados",
    descricao: "Leitura de textos com imagem e organização de dados simples.",
    dias: [
      { disciplina: "portugues", titulo: "Leitura multissemiótica", expansao: "Imagem + texto", tags: ["multissemiose", "imagem", "texto"] },
      { disciplina: "matematica", titulo: "Leitura de dados e pesquisa simples", expansao: "Coleta de dados", tags: ["dados", "pesquisa", "organizacao"] },
      { disciplina: "portugues", titulo: "Imagem, cor, símbolo e sentido", expansao: "Cartazes", tags: ["imagem", "sentido", "simbolos"] },
      { disciplina: "matematica", titulo: "Organização de dados", expansao: "Tabelas e registros", tags: ["dados", "tabelas", "organizacao"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Ciências: energia e fontes", expansao: "Ciências", tags: ["revisao", "quiz20", "ciencias"] }
    ]
  },
  {
    semana: 21,
    fase: "fase-2-consolidacao-aceleracao",
    titulo: "Classes gramaticais e expressões numéricas",
    descricao: "Revisão gramatical e introdução às expressões numéricas simples.",
    dias: [
      { disciplina: "portugues", titulo: "Classes gramaticais em uso", expansao: "Análise no texto", tags: ["gramatica", "classes", "uso"] },
      { disciplina: "matematica", titulo: "Expressões numéricas simples", expansao: "Operações em sequência", tags: ["expressoes", "operacoes", "ordem"] },
      { disciplina: "portugues", titulo: "Revisão de substantivo, verbo, adjetivo, pronome", expansao: "Quadro-resumo", tags: ["revisao", "gramatica", "classes"] },
      { disciplina: "matematica", titulo: "Prioridade de cálculo introdutória", expansao: "Parênteses e sequência", tags: ["prioridade", "expressoes", "calculo"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + História: independência e cidadania", expansao: "História", tags: ["revisao", "quiz20", "historia"] }
    ]
  },
  {
    semana: 22,
    fase: "fase-2-consolidacao-aceleracao",
    titulo: "Conectivos e padrões",
    descricao: "Conexão de ideias e raciocínio lógico com regularidades.",
    dias: [
      { disciplina: "portugues", titulo: "Coesão e conectivos", expansao: "Ligando ideias", tags: ["coesao", "conectivos", "texto"] },
      { disciplina: "matematica", titulo: "Raciocínio lógico e padrões", expansao: "Sequências", tags: ["padroes", "logica", "sequencias"] },
      { disciplina: "portugues", titulo: "Porque, mas, então, depois, porém", expansao: "Reescrita", tags: ["conectivos", "sentido", "coesao"] },
      { disciplina: "matematica", titulo: "Sequências e regularidades", expansao: "Descobrir a regra", tags: ["sequencias", "regularidades", "logica"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Geografia: população e migrações", expansao: "Geografia", tags: ["revisao", "quiz20", "geografia"] }
    ]
  },
  {
    semana: 23,
    fase: "fase-2-consolidacao-aceleracao",
    titulo: "Simulados da fase 2",
    descricao: "Revisão e simulado com correção comentada.",
    dias: [
      { disciplina: "portugues", titulo: "Revisão fase 2 — Português", expansao: "Mapa de erros", tags: ["revisao", "fase2", "portugues"] },
      { disciplina: "matematica", titulo: "Revisão fase 2 — Matemática", expansao: "Mapa de erros", tags: ["revisao", "fase2", "matematica"] },
      { disciplina: "portugues", titulo: "Simulado fase 2 — Português", expansao: "Correção comentada", tags: ["simulado", "fase2", "portugues"] },
      { disciplina: "matematica", titulo: "Simulado fase 2 — Matemática", expansao: "Correção comentada", tags: ["simulado", "fase2", "matematica"] },
      { disciplina: "revisao", titulo: "Revisão + Quiz 20 + correção comentada da fase 2", expansao: "Diagnóstico", tags: ["revisao", "quiz20", "correcao"] }
    ]
  },
  {
    semana: 24,
    fase: "fase-2-consolidacao-aceleracao",
    titulo: "Fechamento da fase 2",
    descricao: "Diagnóstico de lacunas e reforço dirigido.",
    dias: [
      { disciplina: "portugues", titulo: "Diagnóstico de lacunas — Português", expansao: "Mapeamento", tags: ["diagnostico", "lacunas", "portugues"] },
      { disciplina: "matematica", titulo: "Diagnóstico de lacunas — Matemática", expansao: "Mapeamento", tags: ["diagnostico", "lacunas", "matematica"] },
      { disciplina: "portugues", titulo: "Reforço dirigido — Português", expansao: "Exercícios focados", tags: ["reforco", "portugues", "correcao"] },
      { disciplina: "matematica", titulo: "Reforço dirigido — Matemática", expansao: "Exercícios focados", tags: ["reforco", "matematica", "correcao"] },
      { disciplina: "revisao", titulo: "Revisão + Quiz 20 + fechamento da fase 2", expansao: "Síntese da fase", tags: ["revisao", "quiz20", "fechamento"] }
    ]
  },
  {
    semana: 25,
    fase: "fase-3-ponte-6ano",
    titulo: "Jornalismo e divisibilidade",
    descricao: "Início da ponte para o 6º ano com divisores e múltiplos.",
    dias: [
      { disciplina: "portugues", titulo: "Gêneros jornalísticos de entrada", expansao: "Notícia e reportagem", tags: ["generos-jornalisticos", "noticia", "reportagem"] },
      { disciplina: "matematica", titulo: "Divisores e múltiplos", expansao: "Agrupamentos", tags: ["divisores", "multiplos", "numeros"] },
      { disciplina: "portugues", titulo: "Notícia x reportagem", expansao: "Comparação de textos", tags: ["noticia", "reportagem", "comparacao"] },
      { disciplina: "matematica", titulo: "Critérios de divisibilidade", expansao: "Padrões numéricos", tags: ["divisibilidade", "criterios", "numeros"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Ciências: matéria e misturas", expansao: "Ciências", tags: ["revisao", "quiz20", "ciencias"] }
    ]
  },
  {
    semana: 26,
    fase: "fase-3-ponte-6ano",
    titulo: "Comparação textual e números primos",
    descricao: "Leitura comparativa e decomposição numérica.",
    dias: [
      { disciplina: "portugues", titulo: "Leitura comparativa entre dois textos", expansao: "Semelhanças e diferenças", tags: ["comparacao-textual", "leitura", "interpretacao"] },
      { disciplina: "matematica", titulo: "Números primos e compostos", expansao: "Agrupamentos possíveis", tags: ["primos", "compostos", "divisores"] },
      { disciplina: "portugues", titulo: "Semelhança e diferença entre versões", expansao: "Quadro comparativo", tags: ["comparacao", "versoes", "texto"] },
      { disciplina: "matematica", titulo: "Decomposição e classificação", expansao: "Fatores", tags: ["decomposicao", "primos", "classificacao"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + História: Brasil Império", expansao: "História", tags: ["revisao", "quiz20", "historia"] }
    ]
  },
  {
    semana: 27,
    fase: "fase-3-ponte-6ano",
    titulo: "Inferência profunda e MMC",
    descricao: "Aprofundamento da inferência textual e introdução intuitiva ao MMC.",
    dias: [
      { disciplina: "portugues", titulo: "Inferência mais profunda", expansao: "Intenção e subentendidos", tags: ["inferencia", "profunda", "interpretacao"] },
      { disciplina: "matematica", titulo: "MMC intuitivo", expansao: "Múltiplos comuns", tags: ["mmc", "multiplos", "intuitivo"] },
      { disciplina: "portugues", titulo: "Intenções do autor", expansao: "Leitura crítica", tags: ["autor", "intencao", "texto"] },
      { disciplina: "matematica", titulo: "Problemas com múltiplos comuns", expansao: "Situações cíclicas", tags: ["mmc", "problemas", "multiplos"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Geografia: regiões do Brasil", expansao: "Geografia", tags: ["revisao", "quiz20", "geografia"] }
    ]
  },
  {
    semana: 28,
    fase: "fase-3-ponte-6ano",
    titulo: "Texto informativo e MDC",
    descricao: "Organização de informação e divisores comuns.",
    dias: [
      { disciplina: "portugues", titulo: "Organização de textos informativos", expansao: "Títulos e tópicos", tags: ["texto-informativo", "organizacao", "leitura"] },
      { disciplina: "matematica", titulo: "MDC intuitivo", expansao: "Divisores comuns", tags: ["mdc", "divisores", "intuitivo"] },
      { disciplina: "portugues", titulo: "Títulos, subtítulos e tópicos", expansao: "Estrutura expositiva", tags: ["titulo", "subtitulo", "organizacao"] },
      { disciplina: "matematica", titulo: "Problemas com divisores comuns", expansao: "Agrupamentos máximos", tags: ["mdc", "problemas", "divisores"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Ciências: ecossistemas", expansao: "Ciências", tags: ["revisao", "quiz20", "ciencias"] }
    ]
  },
  {
    semana: 29,
    fase: "fase-3-ponte-6ano",
    titulo: "Resumo informativo e fração na reta",
    descricao: "Síntese sem cópia e localização de frações.",
    dias: [
      { disciplina: "portugues", titulo: "Resumo de texto informativo", expansao: "Síntese", tags: ["resumo", "texto-informativo", "sintese"] },
      { disciplina: "matematica", titulo: "Frações na reta numérica", expansao: "Reta e marcações", tags: ["fracao", "reta-numerica", "comparacao"] },
      { disciplina: "portugues", titulo: "Síntese sem copiar", expansao: "Reescrita", tags: ["resumo", "reescrita", "autonomia"] },
      { disciplina: "matematica", titulo: "Localização e comparação", expansao: "Frações em ordem", tags: ["fracao", "localizacao", "ordem"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + História: república e mudanças sociais", expansao: "História", tags: ["revisao", "quiz20", "historia"] }
    ]
  },
  {
    semana: 30,
    fase: "fase-3-ponte-6ano",
    titulo: "Verbetes e operações com frações",
    descricao: "Textos expositivos e adição/subtração de frações com apoio visual.",
    dias: [
      { disciplina: "portugues", titulo: "Verbetes e textos expositivos", expansao: "Dicionário e enciclopédia", tags: ["verbete", "expositivo", "definicao"] },
      { disciplina: "matematica", titulo: "Adição e subtração de frações com apoio visual", expansao: "Barras equivalentes", tags: ["fracao", "adicao", "subtracao"] },
      { disciplina: "portugues", titulo: "Definição e objetividade", expansao: "Escrita objetiva", tags: ["objetividade", "definicao", "expositivo"] },
      { disciplina: "matematica", titulo: "Equivalência antes do cálculo", expansao: "Denominadores compatíveis", tags: ["fracao", "equivalencia", "calculo"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Geografia: vegetação e clima do Brasil", expansao: "Geografia", tags: ["revisao", "quiz20", "geografia"] }
    ]
  },
  {
    semana: 31,
    fase: "fase-3-ponte-6ano",
    titulo: "Coesão referencial e decimais por 10, 100, 1000",
    descricao: "Pronomes em função textual e operações com decimais em escala.",
    dias: [
      { disciplina: "portugues", titulo: "Coesão referencial", expansao: "Retomada de referentes", tags: ["coesao", "referencial", "pronomes"] },
      { disciplina: "matematica", titulo: "Multiplicação e divisão de decimais por 10, 100, 1000", expansao: "Quadro posicional", tags: ["decimais", "multiplicacao", "divisao"] },
      { disciplina: "portugues", titulo: "Pronomes e substituições", expansao: "Trocas no texto", tags: ["pronomes", "substituicao", "coesao"] },
      { disciplina: "matematica", titulo: "Deslocamento da vírgula com sentido", expansao: "Valor posicional", tags: ["decimais", "virgula", "valor-posicional"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Ciências: sistema digestório e nutrição", expansao: "Ciências", tags: ["revisao", "quiz20", "ciencias"] }
    ]
  },
  {
    semana: 32,
    fase: "fase-3-ponte-6ano",
    titulo: "Pontuação com sentido e razão intuitiva",
    descricao: "Efeito de sentido da pontuação e comparações proporcionais.",
    dias: [
      { disciplina: "portugues", titulo: "Efeitos de sentido da pontuação", expansao: "Comparação de frases", tags: ["pontuacao", "efeito-de-sentido", "texto"] },
      { disciplina: "matematica", titulo: "Razão intuitiva e comparação proporcional", expansao: "Escalas simples", tags: ["razao", "proporcao", "comparacao"] },
      { disciplina: "portugues", titulo: "Pontuação e intenção", expansao: "Entonação", tags: ["pontuacao", "intencao", "sentido"] },
      { disciplina: "matematica", titulo: "Leitura de comparações proporcionais", expansao: "Tabelas simples", tags: ["proporcao", "comparacao", "raciocinio"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + História: trabalho, indústria e urbanização", expansao: "História", tags: ["revisao", "quiz20", "historia"] }
    ]
  },
  {
    semana: 33,
    fase: "fase-3-ponte-6ano",
    titulo: "Infográfico e porcentagem aplicada",
    descricao: "Leitura de infográficos e problemas de desconto e acréscimo.",
    dias: [
      { disciplina: "portugues", titulo: "Leitura de infográficos", expansao: "Dados + imagem + texto", tags: ["infografico", "multissemiose", "dados"] },
      { disciplina: "matematica", titulo: "Porcentagem aplicada", expansao: "Desconto simples", tags: ["porcentagem", "aplicacao", "dinheiro"] },
      { disciplina: "portugues", titulo: "Texto verbal + imagem + dados", expansao: "Leitura integrada", tags: ["imagem", "dados", "texto"] },
      { disciplina: "matematica", titulo: "Problemas de desconto e acréscimo simples", expansao: "Situações de compra", tags: ["porcentagem", "desconto", "acrescimo"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Geografia: cartografia e coordenadas simples", expansao: "Geografia", tags: ["revisao", "quiz20", "geografia"] }
    ]
  },
  {
    semana: 34,
    fase: "fase-3-ponte-6ano",
    titulo: "Simulados da ponte 5º-6º",
    descricao: "Revisão da transição e simulado guiado.",
    dias: [
      { disciplina: "portugues", titulo: "Revisão da ponte 5º-6º — Português", expansao: "Mapa de erros", tags: ["revisao", "ponte", "portugues"] },
      { disciplina: "matematica", titulo: "Revisão da ponte 5º-6º — Matemática", expansao: "Mapa de erros", tags: ["revisao", "ponte", "matematica"] },
      { disciplina: "portugues", titulo: "Simulado da ponte — Português", expansao: "Correção comentada", tags: ["simulado", "ponte", "portugues"] },
      { disciplina: "matematica", titulo: "Simulado da ponte — Matemática", expansao: "Correção comentada", tags: ["simulado", "ponte", "matematica"] },
      { disciplina: "revisao", titulo: "Revisão + Quiz 20 + correção comentada da ponte", expansao: "Diagnóstico", tags: ["revisao", "quiz20", "correcao"] }
    ]
  },
  {
    semana: 35,
    fase: "fase-3-ponte-6ano",
    titulo: "Reforço da ponte",
    descricao: "Prática guiada para fechar os pontos fracos da transição.",
    dias: [
      { disciplina: "portugues", titulo: "Reforço dos pontos fracos — Português", expansao: "Exercícios focados", tags: ["reforco", "ponte", "portugues"] },
      { disciplina: "matematica", titulo: "Reforço dos pontos fracos — Matemática", expansao: "Exercícios focados", tags: ["reforco", "ponte", "matematica"] },
      { disciplina: "portugues", titulo: "Prática guiada de inferência e gênero", expansao: "Mediação", tags: ["pratica-guiada", "inferencia", "generos"] },
      { disciplina: "matematica", titulo: "Prática guiada de frações e múltiplos", expansao: "Mediação", tags: ["pratica-guiada", "fracao", "multiplos"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Ciências: sistema respiratório", expansao: "Ciências", tags: ["revisao", "quiz20", "ciencias"] }
    ]
  },
  {
    semana: 36,
    fase: "fase-3-ponte-6ano",
    titulo: "Fechamento da fase 3",
    descricao: "Mini simulados avançados e preparação para a fase híbrida.",
    dias: [
      { disciplina: "portugues", titulo: "Fechamento da fase 3 — Português", expansao: "Síntese", tags: ["fechamento", "fase3", "portugues"] },
      { disciplina: "matematica", titulo: "Fechamento da fase 3 — Matemática", expansao: "Síntese", tags: ["fechamento", "fase3", "matematica"] },
      { disciplina: "portugues", titulo: "Mini simulado avançado — Português", expansao: "Correção comentada", tags: ["mini-simulado", "fase3", "portugues"] },
      { disciplina: "matematica", titulo: "Mini simulado avançado — Matemática", expansao: "Correção comentada", tags: ["mini-simulado", "fase3", "matematica"] },
      { disciplina: "revisao", titulo: "Revisão + Quiz 20 + preparação para a fase híbrida", expansao: "Transição", tags: ["revisao", "quiz20", "transicao"] }
    ]
  },
  {
    semana: 37,
    fase: "fase-4-dominio-hibrido",
    titulo: "Crônica e expressões numéricas",
    descricao: "Mistura de leitura crítica e cálculo estruturado.",
    dias: [
      { disciplina: "portugues", titulo: "Crônica e cotidiano", expansao: "Observação do dia a dia", tags: ["cronica", "cotidiano", "leitura"] },
      { disciplina: "matematica", titulo: "Expressões numéricas", expansao: "Sequência de operações", tags: ["expressoes", "operacoes", "ordem"] },
      { disciplina: "portugues", titulo: "Humor, crítica e observação", expansao: "Leitura interpretativa", tags: ["cronica", "humor", "critica"] },
      { disciplina: "matematica", titulo: "Interpretação de expressões", expansao: "Explicar o raciocínio", tags: ["expressoes", "interpretacao", "calculo"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + História: direitos e cidadania", expansao: "História", tags: ["revisao", "quiz20", "historia"] }
    ]
  },
  {
    semana: 38,
    fase: "fase-4-dominio-hibrido",
    titulo: "Texto instrucional e ângulos",
    descricao: "Leitura de regras e classificação de ângulos.",
    dias: [
      { disciplina: "portugues", titulo: "Texto instrucional e regulamento", expansao: "Regras do cotidiano", tags: ["instrucional", "regulamento", "leitura-funcional"] },
      { disciplina: "matematica", titulo: "Ângulos", expansao: "Dobras e giros", tags: ["angulos", "geometria", "classificacao"] },
      { disciplina: "portugues", titulo: "Verbos no imperativo e clareza", expansao: "Comandos", tags: ["imperativo", "clareza", "instrucao"] },
      { disciplina: "matematica", titulo: "Classificação e medição intuitiva", expansao: "Transferidor ilustrativo", tags: ["angulos", "medicao", "geometria"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Geografia: recursos naturais", expansao: "Geografia", tags: ["revisao", "quiz20", "geografia"] }
    ]
  },
  {
    semana: 39,
    fase: "fase-4-dominio-hibrido",
    titulo: "Notícia e opinião + polígonos",
    descricao: "Comparar posições textuais e aprofundar geometria plana.",
    dias: [
      { disciplina: "portugues", titulo: "Comparação entre notícia e opinião", expansao: "Leitura crítica", tags: ["noticia", "opiniao", "comparacao"] },
      { disciplina: "matematica", titulo: "Polígonos e classificação", expansao: "Desenho e análise", tags: ["poligonos", "classificacao", "geometria"] },
      { disciplina: "portugues", titulo: "Marcas de posicionamento", expansao: "Palavras de opinião", tags: ["opiniao", "marcas", "argumentacao"] },
      { disciplina: "matematica", titulo: "Construção e análise de figuras", expansao: "Malha geométrica", tags: ["figuras", "analise", "construcao"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Ciências: sistema circulatório", expansao: "Ciências", tags: ["revisao", "quiz20", "ciencias"] }
    ]
  },
  {
    semana: 40,
    fase: "fase-4-dominio-hibrido",
    titulo: "Reescrita e perímetro/área",
    descricao: "Melhoria de texto e problemas integrados de geometria.",
    dias: [
      { disciplina: "portugues", titulo: "Reescrita e melhoria de texto", expansao: "Versão 1 e versão 2", tags: ["reescrita", "melhoria", "texto"] },
      { disciplina: "matematica", titulo: "Perímetro e área em figuras variadas", expansao: "Figuras compostas", tags: ["perimetro", "area", "figuras"] },
      { disciplina: "portugues", titulo: "Revisar para melhorar sentido", expansao: "Autocorreção", tags: ["revisao", "sentido", "escrita"] },
      { disciplina: "matematica", titulo: "Problemas integrados", expansao: "Situações mistas", tags: ["problemas", "perimetro", "area"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + História: movimentos sociais", expansao: "História", tags: ["revisao", "quiz20", "historia"] }
    ]
  },
  {
    semana: 41,
    fase: "fase-4-dominio-hibrido",
    titulo: "Anúncios e gráficos",
    descricao: "Leitura persuasiva e análise crítica de gráficos.",
    dias: [
      { disciplina: "portugues", titulo: "Leitura crítica de anúncios", expansao: "Publicidade", tags: ["anuncios", "persuasao", "leitura-critica"] },
      { disciplina: "matematica", titulo: "Leitura crítica de gráficos", expansao: "Comparação de dados", tags: ["graficos", "analise", "dados"] },
      { disciplina: "portugues", titulo: "Linguagem persuasiva", expansao: "Recursos de convencimento", tags: ["persuasao", "publicidade", "linguagem"] },
      { disciplina: "matematica", titulo: "Escolher gráfico, ler tendência e comparar dados", expansao: "Análise de situações", tags: ["graficos", "tendencia", "comparacao"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Geografia: economia e espaço geográfico", expansao: "Geografia", tags: ["revisao", "quiz20", "geografia"] }
    ]
  },
  {
    semana: 42,
    fase: "fase-4-dominio-hibrido",
    titulo: "Sentido figurado e probabilidade",
    descricao: "Introdução a linguagem figurada e noções intuitivas de chance.",
    dias: [
      { disciplina: "portugues", titulo: "Figuras de linguagem em nível introdutório", expansao: "Sentido figurado", tags: ["figuras-de-linguagem", "sentido-figurado", "interpretacao"] },
      { disciplina: "matematica", titulo: "Probabilidade intuitiva", expansao: "Jogos e sorteios", tags: ["probabilidade", "chance", "raciocinio"] },
      { disciplina: "portugues", titulo: "Sentido literal e figurado", expansao: "Comparação de frases", tags: ["literal", "figurado", "sentido"] },
      { disciplina: "matematica", titulo: "Chance, certeza, impossível, provável", expansao: "Eventos", tags: ["probabilidade", "eventos", "classificacao"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Ciências: sistema nervoso e sentidos", expansao: "Ciências", tags: ["revisao", "quiz20", "ciencias"] }
    ]
  },
  {
    semana: 43,
    fase: "fase-4-dominio-hibrido",
    titulo: "Opinião escrita e problemas mistos",
    descricao: "Justificar respostas por escrito e resolver problemas variados.",
    dias: [
      { disciplina: "portugues", titulo: "Produção de opinião curta", expansao: "Tomar posição", tags: ["opiniao", "escrita", "argumentacao"] },
      { disciplina: "matematica", titulo: "Problemas mistos 1", expansao: "Interleaving", tags: ["problemas", "mistos", "interleaving"] },
      { disciplina: "portugues", titulo: "Justificar uma resposta com texto", expansao: "Citar evidência", tags: ["justificativa", "texto", "argumentacao"] },
      { disciplina: "matematica", titulo: "Interleaving pesado", expansao: "Mistura de estratégias", tags: ["interleaving", "estrategia", "problemas"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + História: Brasil contemporâneo", expansao: "História", tags: ["revisao", "quiz20", "historia"] }
    ]
  },
  {
    semana: 44,
    fase: "fase-4-dominio-hibrido",
    titulo: "Interpretação avançada e autocorreção",
    descricao: "Treino de alto nível em leitura e resolução de problemas.",
    dias: [
      { disciplina: "portugues", titulo: "Interpretação em alto nível", expansao: "Comparação e inferência", tags: ["interpretacao", "alto-nivel", "leitura"] },
      { disciplina: "matematica", titulo: "Problemas mistos 2", expansao: "Estratégias múltiplas", tags: ["problemas", "mistos", "raciocinio"] },
      { disciplina: "portugues", titulo: "Inferência, ironia e comparação textual", expansao: "Leitura crítica", tags: ["inferencia", "ironia", "comparacao"] },
      { disciplina: "matematica", titulo: "Erro típico e autocorreção", expansao: "Análise do erro", tags: ["erro", "autocorrecao", "estrategia"] },
      { disciplina: "revisao", titulo: "Revisão da semana + Quiz 20 + Geografia: meio ambiente e sociedade", expansao: "Geografia", tags: ["revisao", "quiz20", "geografia"] }
    ]
  },
  {
    semana: 45,
    fase: "fase-4-dominio-hibrido",
    titulo: "Fechamento da fase híbrida",
    descricao: "Simulados híbridos e síntese da fase 4.",
    dias: [
      { disciplina: "portugues", titulo: "Revisão híbrida — Português", expansao: "Mapa de erros", tags: ["revisao", "hibrida", "portugues"] },
      { disciplina: "matematica", titulo: "Revisão híbrida — Matemática", expansao: "Mapa de erros", tags: ["revisao", "hibrida", "matematica"] },
      { disciplina: "portugues", titulo: "Simulado híbrido — Português", expansao: "Correção comentada", tags: ["simulado", "hibrido", "portugues"] },
      { disciplina: "matematica", titulo: "Simulado híbrido — Matemática", expansao: "Correção comentada", tags: ["simulado", "hibrido", "matematica"] },
      { disciplina: "revisao", titulo: "Revisão + Quiz 20 + fechamento da fase 4", expansao: "Síntese", tags: ["revisao", "quiz20", "fechamento"] }
    ]
  },
  {
    semana: 46,
    fase: "fase-5-sprint-final",
    titulo: "Diagnóstico final",
    descricao: "Mapeamento fino dos pontos fortes e fracos antes do sprint.",
    dias: [
      { disciplina: "portugues", titulo: "Diagnóstico final — Português", expansao: "Mapeamento", tags: ["diagnostico", "final", "portugues"] },
      { disciplina: "matematica", titulo: "Diagnóstico final — Matemática", expansao: "Mapeamento", tags: ["diagnostico", "final", "matematica"] },
      { disciplina: "portugues", titulo: "Reforço 1 — Português", expansao: "Exercícios focados", tags: ["reforco", "final", "portugues"] },
      { disciplina: "matematica", titulo: "Reforço 1 — Matemática", expansao: "Exercícios focados", tags: ["reforco", "final", "matematica"] },
      { disciplina: "revisao", titulo: "Revisão + Quiz 20 + mapa de erros", expansao: "Diagnóstico", tags: ["revisao", "quiz20", "erros"] }
    ]
  },
  {
    semana: 47,
    fase: "fase-5-sprint-final",
    titulo: "Reforço orientado",
    descricao: "Treino objetivo para múltipla escolha e correção de lacunas críticas.",
    dias: [
      { disciplina: "portugues", titulo: "Reforço 2 — interpretação, inferência e gêneros", expansao: "Questões objetivas", tags: ["reforco", "interpretacao", "generos"] },
      { disciplina: "matematica", titulo: "Reforço 2 — frações, decimais e problemas", expansao: "Questões objetivas", tags: ["reforco", "fracao", "decimais"] },
      { disciplina: "portugues", titulo: "Treino objetivo de múltipla escolha — Português", expansao: "Estratégia de prova", tags: ["multipla-escolha", "estrategia", "portugues"] },
      { disciplina: "matematica", titulo: "Treino objetivo de múltipla escolha — Matemática", expansao: "Estratégia de prova", tags: ["multipla-escolha", "estrategia", "matematica"] },
      { disciplina: "revisao", titulo: "Revisão + Quiz 20 + correção guiada", expansao: "Estratégia", tags: ["revisao", "quiz20", "correcao"] }
    ]
  },
  {
    semana: 48,
    fase: "fase-5-sprint-final",
    titulo: "Treino sob tempo",
    descricao: "Velocidade com precisão e técnicas de eliminação de alternativas.",
    dias: [
      { disciplina: "portugues", titulo: "Leitura sob tempo", expansao: "Cronometrado", tags: ["tempo", "leitura", "estrategia"] },
      { disciplina: "matematica", titulo: "Cálculo sob tempo", expansao: "Cronometrado", tags: ["tempo", "calculo", "estrategia"] },
      { disciplina: "portugues", titulo: "Estratégias de eliminação de alternativas", expansao: "Questões objetivas", tags: ["alternativas", "estrategia", "prova"] },
      { disciplina: "matematica", titulo: "Estratégias de conferência rápida", expansao: "Revisão de resposta", tags: ["conferencia", "estrategia", "prova"] },
      { disciplina: "revisao", titulo: "Revisão + Quiz 20 + simulado parcial", expansao: "Treino de prova", tags: ["revisao", "quiz20", "simulado"] }
    ]
  },
  {
    semana: 49,
    fase: "fase-5-sprint-final",
    titulo: "Simulado 1",
    descricao: "Primeiro grande simulado com correção comentada.",
    dias: [
      { disciplina: "portugues", titulo: "Simulado 1 — Português", expansao: "Prova objetiva", tags: ["simulado", "portugues", "final"] },
      { disciplina: "matematica", titulo: "Simulado 1 — Matemática", expansao: "Prova objetiva", tags: ["simulado", "matematica", "final"] },
      { disciplina: "portugues", titulo: "Correção comentada do Simulado 1 — Português", expansao: "Análise de erros", tags: ["correcao", "simulado", "portugues"] },
      { disciplina: "matematica", titulo: "Correção comentada do Simulado 1 — Matemática", expansao: "Análise de erros", tags: ["correcao", "simulado", "matematica"] },
      { disciplina: "revisao", titulo: "Revisão + Quiz 20 + reforço dos erros", expansao: "Correção focada", tags: ["revisao", "quiz20", "erros"] }
    ]
  },
  {
    semana: 50,
    fase: "fase-5-sprint-final",
    titulo: "Simulado 2",
    descricao: "Segundo simulado e consolidação emocional para a prova.",
    dias: [
      { disciplina: "portugues", titulo: "Simulado 2 — Português", expansao: "Prova objetiva", tags: ["simulado", "portugues", "final"] },
      { disciplina: "matematica", titulo: "Simulado 2 — Matemática", expansao: "Prova objetiva", tags: ["simulado", "matematica", "final"] },
      { disciplina: "portugues", titulo: "Correção comentada do Simulado 2 — Português", expansao: "Análise de erros", tags: ["correcao", "simulado", "portugues"] },
      { disciplina: "matematica", titulo: "Correção comentada do Simulado 2 — Matemática", expansao: "Análise de erros", tags: ["correcao", "simulado", "matematica"] },
      { disciplina: "revisao", titulo: "Revisão + Quiz 20 + estratégia emocional de prova", expansao: "Confiança", tags: ["revisao", "quiz20", "emocional"] }
    ]
  },
  {
    semana: 51,
    fase: "fase-5-sprint-final",
    titulo: "Fechamento final",
    descricao: "Revisão leve, confiança e encerramento do ciclo.",
    dias: [
      { disciplina: "portugues", titulo: "Revisão final leve — Português", expansao: "Leitura e confiança", tags: ["revisao", "final", "portugues"] },
      { disciplina: "matematica", titulo: "Revisão final leve — Matemática", expansao: "Cálculo e confiança", tags: ["revisao", "final", "matematica"] },
      { disciplina: "portugues", titulo: "Confiança, leitura e precisão", expansao: "Estratégia final", tags: ["confianca", "leitura", "precisao"] },
      { disciplina: "matematica", titulo: "Confiança, organização e precisão", expansao: "Estratégia final", tags: ["confianca", "organizacao", "precisao"] },
      { disciplina: "revisao", titulo: "Quiz final 20 + fechamento do ciclo + mensagem final ao Eiji", expansao: "Encerramento", tags: ["quiz20", "fechamento", "mensagem-final"] }
    ]
  }
];

function padDia(numero) {
  return String(numero).padStart(3, "0");
}

function gerarDias(semanas) {
  const dias = [];

  semanas.forEach((semanaObj) => {
    semanaObj.dias.forEach((diaObj, index) => {
      const numeroDia = ((semanaObj.semana - 1) * 5) + index + 1;
      const id = `dia-${padDia(numeroDia)}`;

      dias.push({
        numero: numeroDia,
        id,
        semana: semanaObj.semana,
        fase: semanaObj.fase,
        semanaTitulo: semanaObj.titulo,
        semanaDescricao: semanaObj.descricao,
        titulo: diaObj.titulo,
        disciplina: diaObj.disciplina,
        expansao: diaObj.expansao,
        tags: diaObj.tags,
        arquivo: `apostilas/${id}.html`,
        concluido: false
      });
    });
  });

  return dias;
}

const DIAS = gerarDias(SEMANAS);

const CONFIG = {
  projeto: {
    nome: "desafio-objetivo-eiji",
    titulo: "Cronograma de Estudos — Eiji | Desafio Objetivo",
    subtitulo: "5º ano com ponte estruturada para o 6º ano",
    aluno: "Eiji",
    totalSemanas: 51,
    totalDias: 255,
    dataInicio: DATA_INICIO_CRONOGRAMA,
    estruturaPedagogica: [
      "CPA de Bruner (Concreto → Pictórico → Abstrato)",
      "Spaced Retrieval Practice",
      "Scaffolding progressivo",
      "Interleaving",
      "Growth Mindset",
      "Worked Examples → Prática guiada → Independente",
      "Quiz final com 20 questões"
    ]
  },
  fases: FASES,
  semanas: SEMANAS,
  dias: DIAS
};

function getFaseById(faseId) {
  return CONFIG.fases.find((fase) => fase.id === faseId);
}

function getSemana(numeroSemana) {
  return CONFIG.semanas.find((semana) => semana.semana === numeroSemana);
}

function getDia(numeroDia) {
  return CONFIG.dias.find((dia) => dia.numero === numeroDia);
}

function getDiasDaSemana(numeroSemana) {
  return CONFIG.dias.filter((dia) => dia.semana === numeroSemana);
}

function getDiasDaFase(faseId) {
  return CONFIG.dias.filter((dia) => dia.fase === faseId);
}

function getDiaPorData(dataStr) {
  const inicio = new Date(`${CONFIG.projeto.dataInicio}T00:00:00`);
  const atual = new Date(`${dataStr}T00:00:00`);

  if (Number.isNaN(inicio.getTime()) || Number.isNaN(atual.getTime())) {
    return null;
  }

  const diffMs = atual - inicio;
  const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDias < 0 || diffDias >= CONFIG.projeto.totalDias) {
    return null;
  }

  return getDia(diffDias + 1);
}

window.CONFIG = CONFIG;
window.getFaseById = getFaseById;
window.getSemana = getSemana;
window.getDia = getDia;
window.getDiasDaSemana = getDiasDaSemana;
window.getDiasDaFase = getDiasDaFase;
window.getDiaPorData = getDiaPorData;
