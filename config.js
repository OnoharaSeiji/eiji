const DATA_INICIO_CRONOGRAMA = "2026-03-24";

const DISCIPLINAS = {
  portugues: {
    id: "portugues",
    nome: "Português",
    icone: "📘",
    cor: "#2563eb"
  },
  matematica: {
    id: "matematica",
    nome: "Matemática",
    icone: "🧮",
    cor: "#16a34a"
  },
  revisao: {
    id: "revisao",
    nome: "Revisão",
    icone: "🧭",
    cor: "#f59e0b"
  }
};

const FASES = [
  {
    id: "fase-1-base-5ano",
    titulo: "Fase 1 — Base forte do 5º ano",
    reino: "Reino da Leitura",
    icone: "📚",
    inicioSemana: 1,
    fimSemana: 12,
    cor: "#2563eb",
    descricao: "Consolidação das bases de Português e Matemática do 5º ano.",
    lore: "Aqui o herói aprende a ler melhor, pensar com clareza e construir a base da jornada."
  },
  {
    id: "fase-2-consolidacao-aceleracao",
    titulo: "Fase 2 — Consolidação e aceleração",
    reino: "Vale dos Desafios",
    icone: "⛰️",
    inicioSemana: 13,
    fimSemana: 24,
    cor: "#16a34a",
    descricao: "Aprofundamento das habilidades centrais e aumento gradual de dificuldade.",
    lore: "Os desafios ficam mais densos, mas o herói ganha força, atenção e velocidade."
  },
  {
    id: "fase-3-ponte-6ano",
    titulo: "Fase 3 — Ponte para o 6º ano",
    reino: "Ponte dos Mestres",
    icone: "🌉",
    inicioSemana: 25,
    fimSemana: 36,
    cor: "#ca8a04",
    descricao: "Introdução progressiva aos conteúdos estruturantes do 6º ano.",
    lore: "É a travessia entre o que já foi aprendido e o que o herói está pronto para dominar."
  },
  {
    id: "fase-4-dominio-hibrido",
    titulo: "Fase 4 — Domínio híbrido 5º + 6º",
    reino: "Terras da Mistura",
    icone: "🧩",
    inicioSemana: 37,
    fimSemana: 45,
    cor: "#9333ea",
    descricao: "Mistura estratégica de conteúdos para flexibilidade cognitiva.",
    lore: "Nas Terras da Mistura, o herói aprende a trocar de estratégia sem se perder."
  },
  {
    id: "fase-5-sprint-final",
    titulo: "Fase 5 — Sprint final Objetivo",
    reino: "Castelo do Desafio Final",
    icone: "🏰",
    inicioSemana: 46,
    fimSemana: 51,
    cor: "#dc2626",
    descricao: "Revisão final, simulados, correção de erros e estratégia de prova.",
    lore: "A reta final exige foco, confiança e inteligência para vencer o castelo."
  }
];

const BAU_POOL = [
  { icon: "🪶", nome: "Pena da Compreensão", desc: "Ajuda a enxergar a ideia principal." },
  { icon: "🛡️", nome: "Escudo da Atenção", desc: "Protege contra distrações nos estudos." },
  { icon: "🗝️", nome: "Chave dos Números", desc: "Abre portas para desafios matemáticos." },
  { icon: "💎", nome: "Cristal da Persistência", desc: "Fortalece a constância do herói." },
  { icon: "📜", nome: "Pergaminho da Estratégia", desc: "Lembra o caminho certo na hora da prova." },
  { icon: "🧭", nome: "Bússola da Clareza", desc: "Ajuda a seguir a direção correta." },
  { icon: "🔥", nome: "Tocha do Foco", desc: "Ilumina o próximo passo da jornada." },
  { icon: "👑", nome: "Coroa da Constância", desc: "Símbolo de quem não abandona o caminho." }
];

const ICONES_MISSAO_POR_POSICAO = ["📜", "🧩", "🔎", "⚔️", "🧰"];
const RARIDADE_POR_POSICAO = ["comum", "comum", "comum", "incomum", "raro"];

function d(disciplina, titulo, expansao, tags) {
  return { disciplina, titulo, expansao, tags };
}

function recompensaSemana(semana) {
  return BAU_POOL[(semana - 1) % BAU_POOL.length];
}

function narrativaSemana(semana, faseId, titulo) {
  const fase = FASES.find((f) => f.id === faseId);
  const reino = fase ? fase.reino : "Mapa";
  return `Missão da semana ${semana} no ${reino}: ${titulo}.`;
}

const SEMANAS_BASE = [
  {
    semana: 1,
    fase: "fase-1-base-5ano",
    titulo: "Leitura, interpretação e numeração",
    descricao: "Construção da base inicial em leitura e sistema de numeração decimal.",
    dias: [
      d("portugues", "Ideia principal do texto", "Leitura guiada", ["leitura", "interpretacao", "ideia-principal"]),
      d("matematica", "Leitura, escrita e comparação de números naturais", "Reta numérica", ["numeros", "comparacao", "valor-posicional"]),
      d("portugues", "Informação explícita e implícita", "Inferência simples", ["texto", "explicita", "implicita"]),
      d("matematica", "Valor posicional e decomposição", "Material dourado", ["decomposicao", "ordens", "classes"]),
      d("revisao", "Revisão da semana + Quiz 20 + Ciências: observar, registrar e comparar", "Ciências", ["revisao", "quiz20", "ciencias"])
    ]
  },
  {
    semana: 2,
    fase: "fase-1-base-5ano",
    titulo: "Inferência e operações iniciais",
    descricao: "Leitura com pistas do texto e fortalecimento de operações básicas.",
    dias: [
      d("portugues", "Pistas do texto e inferência simples", "Leitura guiada", ["inferencia", "leitura", "pistas"]),
      d("matematica", "Ordem crescente, decrescente e comparação", "Sequências numéricas", ["ordem", "comparacao", "sequencia"]),
      d("portugues", "Sentido de palavras no contexto", "Vocabulário contextual", ["vocabulario", "contexto", "interpretacao"]),
      d("matematica", "Adição e subtração sem e com reagrupamento", "Contas armadas", ["adicao", "subtracao", "reagrupamento"]),
      d("revisao", "Revisão da semana + Quiz 20 + História: passado, presente e fontes", "História", ["revisao", "quiz20", "historia"])
    ]
  },
  {
    semana: 3,
    fase: "fase-1-base-5ano",
    titulo: "Narrativa e grupos iguais",
    descricao: "Elementos da narrativa e introdução à multiplicação e divisão.",
    dias: [
      d("portugues", "Elementos da narrativa", "Contação de história", ["narrativa", "personagem", "tempo"]),
      d("matematica", "Multiplicação como adição de grupos iguais", "Objetos concretos", ["multiplicacao", "grupos-iguais", "tabuada"]),
      d("portugues", "Personagem, tempo, espaço e conflito", "Mapa da narrativa", ["personagem", "espaco", "conflito"]),
      d("matematica", "Divisão como repartição e medida", "Distribuição concreta", ["divisao", "reparticao", "medida"]),
      d("revisao", "Revisão da semana + Quiz 20 + Geografia: lugar, bairro e mapa simples", "Geografia", ["revisao", "quiz20", "geografia"])
    ]
  },
  {
    semana: 4,
    fase: "fase-1-base-5ano",
    titulo: "Leitura fluente e problemas",
    descricao: "Fluência leitora e problemas com as quatro operações.",
    dias: [
      d("portugues", "Leitura fluente e compreensão global", "Leitura em voz alta", ["fluencia", "compreensao", "leitura"]),
      d("matematica", "Problemas com as 4 operações", "Situações do cotidiano", ["problemas", "operacoes", "raciocinio"]),
      d("portugues", "Pontuação básica na leitura e no sentido", "Leitura expressiva", ["pontuacao", "entonacao", "sentido"]),
      d("matematica", "Escolha da operação correta em problemas", "Palavras-chave com sentido", ["problemas", "estrategia", "operacoes"]),
      d("revisao", "Revisão da semana + Quiz 20 + Ciências: estados físicos e transformações", "Ciências", ["revisao", "quiz20", "ciencias"])
    ]
  },
  {
    semana: 5,
    fase: "fase-1-base-5ano",
    titulo: "Classes de palavras e frações",
    descricao: "Primeiro contato com substantivo, artigo, adjetivo e fração.",
    dias: [
      d("portugues", "Substantivo, artigo e adjetivo", "Classificação no texto", ["gramatica", "substantivo", "adjetivo"]),
      d("matematica", "Fração como parte do todo", "Recortes e figuras", ["fracao", "parte-todo", "concreto"]),
      d("portugues", "Relações entre palavras no texto", "Campo semântico", ["texto", "coerencia", "vocabulario"]),
      d("matematica", "Representação pictórica de frações", "Modelos visuais", ["fracao", "pictorico", "representacao"]),
      d("revisao", "Revisão da semana + Quiz 20 + História: comunidade, regras e convivência", "História", ["revisao", "quiz20", "historia"])
    ]
  },
  {
    semana: 6,
    fase: "fase-1-base-5ano",
    titulo: "Verbos e frações equivalentes",
    descricao: "Uso dos verbos e comparação de frações por equivalência.",
    dias: [
      d("portugues", "Verbos e noção de tempo verbal", "Linha do tempo", ["verbos", "tempo-verbal", "gramatica"]),
      d("matematica", "Frações equivalentes", "Dobrar e repartir", ["fracao", "equivalencia", "comparacao"]),
      d("portugues", "Verbos em narrativas", "Texto narrativo", ["verbos", "narrativa", "coesao"]),
      d("matematica", "Comparação de frações", "Barras de fração", ["fracao", "comparacao", "ordem"]),
      d("revisao", "Revisão da semana + Quiz 20 + Geografia: paisagem natural e humanizada", "Geografia", ["revisao", "quiz20", "geografia"])
    ]
  },
  {
    semana: 7,
    fase: "fase-1-base-5ano",
    titulo: "Pronomes e números decimais",
    descricao: "Coesão textual com pronomes e introdução aos decimais.",
    dias: [
      d("portugues", "Pronomes e retomada no texto", "Substituições no texto", ["pronomes", "coesao", "retomada"]),
      d("matematica", "Números decimais e dinheiro", "Moedas e cédulas", ["decimais", "dinheiro", "sistema-decimal"]),
      d("portugues", "Coesão simples", "Ligações entre frases", ["coesao", "texto", "organizacao"]),
      d("matematica", "Comparação entre decimais", "Reta numérica", ["decimais", "comparacao", "ordem"]),
      d("revisao", "Revisão da semana + Quiz 20 + Ciências: corpo humano e hábitos saudáveis", "Ciências", ["revisao", "quiz20", "ciencias"])
    ]
  },
  {
    semana: 8,
    fase: "fase-1-base-5ano",
    titulo: "Gêneros curtos e operações com decimais",
    descricao: "Leitura de gêneros curtos com humor e uso de decimais em contexto real.",
    dias: [
      d("portugues", "Gêneros literários curtos — anedota, tirinha, miniconto", "Leitura comparativa", ["generos", "tirinha", "miniconto"]),
      d("matematica", "Adição e subtração com decimais", "Dinheiro", ["decimais", "adicao", "subtracao"]),
      d("portugues", "Humor e intenção do texto", "Tirinhas", ["humor", "intencao", "interpretacao"]),
      d("matematica", "Problemas com dinheiro", "Compras e troco", ["dinheiro", "problemas", "decimais"]),
      d("revisao", "Revisão da semana + Quiz 20 + História: formação do povo brasileiro", "História", ["revisao", "quiz20", "historia"])
    ]
  },
  {
    semana: 9,
    fase: "fase-1-base-5ano",
    titulo: "Poema e porcentagem simples",
    descricao: "Leitura poética e introdução concreta às porcentagens mais usuais.",
    dias: [
      d("portugues", "Poemas, rimas e efeito de sentido", "Leitura expressiva", ["poema", "rima", "efeito-de-sentido"]),
      d("matematica", "Porcentagens simples — 10%, 25%, 50%, 100%", "Barras e quadros 100", ["porcentagem", "fracao", "decimal"]),
      d("portugues", "Leitura expressiva e interpretação poética", "Entonação", ["poesia", "interpretacao", "leitura"]),
      d("matematica", "Porcentagem ligada a frações e dinheiro", "Descontos simples", ["porcentagem", "dinheiro", "fracao"]),
      d("revisao", "Revisão da semana + Quiz 20 + Geografia: orientação, legenda e escala simples", "Geografia", ["revisao", "quiz20", "geografia"])
    ]
  },
  {
    semana: 10,
    fase: "fase-1-base-5ano",
    titulo: "Textos do cotidiano e medidas de comprimento",
    descricao: "Leitura funcional e medidas em situações práticas.",
    dias: [
      d("portugues", "Bilhete, aviso e instrução", "Textos do dia a dia", ["bilhete", "aviso", "instrucao"]),
      d("matematica", "Medidas de comprimento", "Régua e fita métrica", ["medidas", "comprimento", "unidades"]),
      d("portugues", "Finalidade e estrutura dos gêneros do cotidiano", "Comparação de gêneros", ["generos", "funcao-social", "estrutura"]),
      d("matematica", "Conversões simples de medida", "Quadro de unidades", ["comprimento", "conversao", "unidades"]),
      d("revisao", "Revisão da semana + Quiz 20 + Ciências: seres vivos e classificação inicial", "Ciências", ["revisao", "quiz20", "ciencias"])
    ]
  },
  {
    semana: 11,
    fase: "fase-1-base-5ano",
    titulo: "Resumo e outras medidas",
    descricao: "Selecionar informações importantes e resolver problemas com medidas.",
    dias: [
      d("portugues", "Resumo e reconto", "Síntese oral", ["resumo", "reconto", "selecao-de-informacoes"]),
      d("matematica", "Medidas de massa e capacidade", "Balança e recipientes", ["massa", "capacidade", "medidas"]),
      d("portugues", "Selecionar informações importantes", "Marcar palavras-chave", ["leitura", "resumo", "informacoes"]),
      d("matematica", "Resolução de problemas com medidas", "Situações reais", ["problemas", "medidas", "aplicacao"]),
      d("revisao", "Revisão da semana + Quiz 20 + História: território, município e estado", "História", ["revisao", "quiz20", "historia"])
    ]
  },
  {
    semana: 12,
    fase: "fase-1-base-5ano",
    titulo: "Fechamento da fase 1",
    descricao: "Revisão ampla das bases do 5º ano com simulados guiados.",
    dias: [
      d("portugues", "Revisão fase 1 — Português", "Mapa de erros", ["revisao", "fase1", "portugues"]),
      d("matematica", "Revisão fase 1 — Matemática", "Mapa de erros", ["revisao", "fase1", "matematica"]),
      d("portugues", "Simulado guiado fase 1 — Português", "Correção comentada", ["simulado", "fase1", "portugues"]),
      d("matematica", "Simulado guiado fase 1 — Matemática", "Correção comentada", ["simulado", "fase1", "matematica"]),
      d("revisao", "Revisão + Quiz 20 + fechamento diagnóstico da fase 1", "Diagnóstico", ["revisao", "quiz20", "diagnostico"])
    ]
  },
  {
    semana: 13,
    fase: "fase-2-consolidacao-aceleracao",
    titulo: "Comunicação e perímetro",
    descricao: "Textos de comunicação e introdução ao perímetro.",
    dias: [
      d("portugues", "Cartas, e-mails e mensagens", "Comparação de suportes", ["carta", "email", "mensagem"]),
      d("matematica", "Perímetro", "Contorno de figuras", ["perimetro", "geometria", "medidas"]),
      d("portugues", "Interlocutor, objetivo e linguagem", "Quem fala com quem", ["linguagem", "interlocutor", "generos"]),
      d("matematica", "Problemas com perímetro", "Malha quadriculada", ["perimetro", "problemas", "figuras"]),
      d("revisao", "Revisão da semana + Quiz 20 + Geografia: clima e tempo", "Geografia", ["revisao", "quiz20", "geografia"])
    ]
  },
  {
    semana: 14,
    fase: "fase-2-consolidacao-aceleracao",
    titulo: "Ortografia e área",
    descricao: "Regularidades ortográficas e noção de área em malha.",
    dias: [
      d("portugues", "Ortografia de uso frequente", "Famílias de palavras", ["ortografia", "escrita", "uso-frequente"]),
      d("matematica", "Área por contagem de quadradinhos", "Malha quadriculada", ["area", "quadradinhos", "geometria"]),
      d("portugues", "Regularidades ortográficas", "Padrões", ["ortografia", "padroes", "escrita"]),
      d("matematica", "Área em malha quadriculada", "Figuras compostas", ["area", "malha", "figuras"]),
      d("revisao", "Revisão da semana + Quiz 20 + Ciências: água, ar e ambiente", "Ciências", ["revisao", "quiz20", "ciencias"])
    ]
  },
  {
    semana: 15,
    fase: "fase-2-consolidacao-aceleracao",
    titulo: "Notícia e tabelas",
    descricao: "Texto jornalístico e leitura de tabelas.",
    dias: [
      d("portugues", "Notícia e manchete", "Jornal", ["noticia", "manchete", "jornal"]),
      d("matematica", "Tabelas", "Organização de dados", ["tabelas", "dados", "leitura"]),
      d("portugues", "Fato principal e detalhes", "Pirâmide de informações", ["noticia", "fato", "detalhes"]),
      d("matematica", "Leitura e interpretação de tabelas", "Pesquisa simples", ["tabelas", "interpretacao", "dados"]),
      d("revisao", "Revisão da semana + Quiz 20 + História: colonização e trabalho", "História", ["revisao", "quiz20", "historia"])
    ]
  },
  {
    semana: 16,
    fase: "fase-2-consolidacao-aceleracao",
    titulo: "Tirinha e gráficos",
    descricao: "Humor visual e interpretação de gráficos de colunas.",
    dias: [
      d("portugues", "Cartum e tirinha", "Leitura visual", ["cartum", "tirinha", "humor"]),
      d("matematica", "Gráficos de colunas", "Construção de gráfico", ["graficos", "colunas", "dados"]),
      d("portugues", "Ironia, humor e pistas visuais", "Análise da imagem", ["humor", "ironia", "pistas-visuais"]),
      d("matematica", "Interpretação de gráficos", "Comparação de dados", ["graficos", "interpretacao", "comparacao"]),
      d("revisao", "Revisão da semana + Quiz 20 + Geografia: campo e cidade", "Geografia", ["revisao", "quiz20", "geografia"])
    ]
  },
  {
    semana: 17,
    fase: "fase-2-consolidacao-aceleracao",
    titulo: "Fato e opinião + polígonos",
    descricao: "Distinguir fato e opinião e reconhecer polígonos.",
    dias: [
      d("portugues", "Opinião e fato", "Marcas de opinião", ["opiniao", "fato", "leitura-critica"]),
      d("matematica", "Geometria plana — polígonos", "Recortes e classificação", ["poligonos", "geometria", "figuras-planas"]),
      d("portugues", "Marcas de opinião em textos curtos", "Análise de frases", ["opiniao", "argumentacao", "texto"]),
      d("matematica", "Lados, vértices e ângulos", "Desenho de figuras", ["lados", "vertices", "angulos"]),
      d("revisao", "Revisão da semana + Quiz 20 + Ciências: cadeia alimentar", "Ciências", ["revisao", "quiz20", "ciencias"])
    ]
  },
  {
    semana: 18,
    fase: "fase-2-consolidacao-aceleracao",
    titulo: "Parágrafo e sólidos geométricos",
    descricao: "Organização de ideias e reconhecimento de sólidos.",
    dias: [
      d("portugues", "Parágrafo e organização de ideias", "Sequência lógica", ["paragrafo", "organizacao", "texto"]),
      d("matematica", "Sólidos geométricos", "Objetos do cotidiano", ["solidos", "geometria", "espacial"]),
      d("portugues", "Tópico frasal e sequência lógica", "Ordenação de frases", ["topico-frasal", "sequencia", "coesao"]),
      d("matematica", "Faces, arestas e vértices", "Modelos concretos", ["faces", "arestas", "vertices"]),
      d("revisao", "Revisão da semana + Quiz 20 + História: escravidão e resistência", "História", ["revisao", "quiz20", "historia"])
    ]
  },
  {
    semana: 19,
    fase: "fase-2-consolidacao-aceleracao",
    titulo: "Narrativa autoral e planificações",
    descricao: "Produção de narrativa curta e relação entre sólidos e planificações.",
    dias: [
      d("portugues", "Produção de narrativa curta", "Planejamento da escrita", ["escrita", "narrativa", "producao-textual"]),
      d("matematica", "Planificações", "Montagem de sólidos", ["planificacao", "solidos", "geometria"]),
      d("portugues", "Começo, meio e fim", "Estrutura narrativa", ["narrativa", "sequencia", "escrita"]),
      d("matematica", "Ligação entre sólido e planificação", "Recorte e dobra", ["planificacao", "espacial", "representacao"]),
      d("revisao", "Revisão da semana + Quiz 20 + Geografia: relevo e hidrografia", "Geografia", ["revisao", "quiz20", "geografia"])
    ]
  },
  {
    semana: 20,
    fase: "fase-2-consolidacao-aceleracao",
    titulo: "Leitura multissemiótica e dados",
    descricao: "Leitura de textos com imagem e organização de dados simples.",
    dias: [
      d("portugues", "Leitura multissemiótica", "Imagem + texto", ["multissemiose", "imagem", "texto"]),
      d("matematica", "Leitura de dados e pesquisa simples", "Coleta de dados", ["dados", "pesquisa", "organizacao"]),
      d("portugues", "Imagem, cor, símbolo e sentido", "Cartazes", ["imagem", "sentido", "simbolos"]),
      d("matematica", "Organização de dados", "Tabelas e registros", ["dados", "tabelas", "organizacao"]),
      d("revisao", "Revisão da semana + Quiz 20 + Ciências: energia e fontes", "Ciências", ["revisao", "quiz20", "ciencias"])
    ]
  },
  {
    semana: 21,
    fase: "fase-2-consolidacao-aceleracao",
    titulo: "Classes gramaticais e expressões numéricas",
    descricao: "Revisão gramatical e introdução às expressões numéricas simples.",
    dias: [
      d("portugues", "Classes gramaticais em uso", "Análise no texto", ["gramatica", "classes", "uso"]),
      d("matematica", "Expressões numéricas simples", "Operações em sequência", ["expressoes", "operacoes", "ordem"]),
      d("portugues", "Revisão de substantivo, verbo, adjetivo, pronome", "Quadro-resumo", ["revisao", "gramatica", "classes"]),
      d("matematica", "Prioridade de cálculo introdutória", "Parênteses e sequência", ["prioridade", "expressoes", "calculo"]),
      d("revisao", "Revisão da semana + Quiz 20 + História: independência e cidadania", "História", ["revisao", "quiz20", "historia"])
    ]
  },
  {
    semana: 22,
    fase: "fase-2-consolidacao-aceleracao",
    titulo: "Conectivos e padrões",
    descricao: "Conexão de ideias e raciocínio lógico com regularidades.",
    dias: [
      d("portugues", "Coesão e conectivos", "Ligando ideias", ["coesao", "conectivos", "texto"]),
      d("matematica", "Raciocínio lógico e padrões", "Sequências", ["padroes", "logica", "sequencias"]),
      d("portugues", "Porque, mas, então, depois, porém", "Reescrita", ["conectivos", "sentido", "coesao"]),
      d("matematica", "Sequências e regularidades", "Descobrir a regra", ["sequencias", "regularidades", "logica"]),
      d("revisao", "Revisão da semana + Quiz 20 + Geografia: população e migrações", "Geografia", ["revisao", "quiz20", "geografia"])
    ]
  },
  {
    semana: 23,
    fase: "fase-2-consolidacao-aceleracao",
    titulo: "Simulados da fase 2",
    descricao: "Revisão e simulado com correção comentada.",
    dias: [
      d("portugues", "Revisão fase 2 — Português", "Mapa de erros", ["revisao", "fase2", "portugues"]),
      d("matematica", "Revisão fase 2 — Matemática", "Mapa de erros", ["revisao", "fase2", "matematica"]),
      d("portugues", "Simulado fase 2 — Português", "Correção comentada", ["simulado", "fase2", "portugues"]),
      d("matematica", "Simulado fase 2 — Matemática", "Correção comentada", ["simulado", "fase2", "matematica"]),
      d("revisao", "Revisão + Quiz 20 + correção comentada da fase 2", "Diagnóstico", ["revisao", "quiz20", "correcao"])
    ]
  },
  {
    semana: 24,
    fase: "fase-2-consolidacao-aceleracao",
    titulo: "Fechamento da fase 2",
    descricao: "Diagnóstico de lacunas e reforço dirigido.",
    dias: [
      d("portugues", "Diagnóstico de lacunas — Português", "Mapeamento", ["diagnostico", "lacunas", "portugues"]),
      d("matematica", "Diagnóstico de lacunas — Matemática", "Mapeamento", ["diagnostico", "lacunas", "matematica"]),
      d("portugues", "Reforço dirigido — Português", "Exercícios focados", ["reforco", "portugues", "correcao"]),
      d("matematica", "Reforço dirigido — Matemática", "Exercícios focados", ["reforco", "matematica", "correcao"]),
      d("revisao", "Revisão + Quiz 20 + fechamento da fase 2", "Síntese da fase", ["revisao", "quiz20", "fechamento"])
    ]
  },
  {
    semana: 25,
    fase: "fase-3-ponte-6ano",
    titulo: "Jornalismo e divisibilidade",
    descricao: "Início da ponte para o 6º ano com divisores e múltiplos.",
    dias: [
      d("portugues", "Gêneros jornalísticos de entrada", "Notícia e reportagem", ["generos-jornalisticos", "noticia", "reportagem"]),
      d("matematica", "Divisores e múltiplos", "Agrupamentos", ["divisores", "multiplos", "numeros"]),
      d("portugues", "Notícia x reportagem", "Comparação de textos", ["noticia", "reportagem", "comparacao"]),
      d("matematica", "Critérios de divisibilidade", "Padrões numéricos", ["divisibilidade", "criterios", "numeros"]),
      d("revisao", "Revisão da semana + Quiz 20 + Ciências: matéria e misturas", "Ciências", ["revisao", "quiz20", "ciencias"])
    ]
  },
  {
    semana: 26,
    fase: "fase-3-ponte-6ano",
    titulo: "Comparação textual e números primos",
    descricao: "Leitura comparativa e decomposição numérica.",
    dias: [
      d("portugues", "Leitura comparativa entre dois textos", "Semelhanças e diferenças", ["comparacao-textual", "leitura", "interpretacao"]),
      d("matematica", "Números primos e compostos", "Agrupamentos possíveis", ["primos", "compostos", "divisores"]),
      d("portugues", "Semelhança e diferença entre versões", "Quadro comparativo", ["comparacao", "versoes", "texto"]),
      d("matematica", "Decomposição e classificação", "Fatores", ["decomposicao", "primos", "classificacao"]),
      d("revisao", "Revisão da semana + Quiz 20 + História: Brasil Império", "História", ["revisao", "quiz20", "historia"])
    ]
  },
  {
    semana: 27,
    fase: "fase-3-ponte-6ano",
    titulo: "Inferência profunda e MMC",
    descricao: "Aprofundamento da inferência textual e introdução intuitiva ao MMC.",
    dias: [
      d("portugues", "Inferência mais profunda", "Intenção e subentendidos", ["inferencia", "profunda", "interpretacao"]),
      d("matematica", "MMC intuitivo", "Múltiplos comuns", ["mmc", "multiplos", "intuitivo"]),
      d("portugues", "Intenções do autor", "Leitura crítica", ["autor", "intencao", "texto"]),
      d("matematica", "Problemas com múltiplos comuns", "Situações cíclicas", ["mmc", "problemas", "multiplos"]),
      d("revisao", "Revisão da semana + Quiz 20 + Geografia: regiões do Brasil", "Geografia", ["revisao", "quiz20", "geografia"])
    ]
  },
  {
    semana: 28,
    fase: "fase-3-ponte-6ano",
    titulo: "Texto informativo e MDC",
    descricao: "Organização de informação e divisores comuns.",
    dias: [
      d("portugues", "Organização de textos informativos", "Títulos e tópicos", ["texto-informativo", "organizacao", "leitura"]),
      d("matematica", "MDC intuitivo", "Divisores comuns", ["mdc", "divisores", "intuitivo"]),
      d("portugues", "Títulos, subtítulos e tópicos", "Estrutura expositiva", ["titulo", "subtitulo", "organizacao"]),
      d("matematica", "Problemas com divisores comuns", "Agrupamentos máximos", ["mdc", "problemas", "divisores"]),
      d("revisao", "Revisão da semana + Quiz 20 + Ciências: ecossistemas", "Ciências", ["revisao", "quiz20", "ciencias"])
    ]
  },
  {
    semana: 29,
    fase: "fase-3-ponte-6ano",
    titulo: "Resumo informativo e fração na reta",
    descricao: "Síntese sem cópia e localização de frações.",
    dias: [
      d("portugues", "Resumo de texto informativo", "Síntese", ["resumo", "texto-informativo", "sintese"]),
      d("matematica", "Frações na reta numérica", "Reta e marcações", ["fracao", "reta-numerica", "comparacao"]),
      d("portugues", "Síntese sem copiar", "Reescrita", ["resumo", "reescrita", "autonomia"]),
      d("matematica", "Localização e comparação", "Frações em ordem", ["fracao", "localizacao", "ordem"]),
      d("revisao", "Revisão da semana + Quiz 20 + História: república e mudanças sociais", "História", ["revisao", "quiz20", "historia"])
    ]
  },
  {
    semana: 30,
    fase: "fase-3-ponte-6ano",
    titulo: "Verbetes e operações com frações",
    descricao: "Textos expositivos e adição/subtração de frações com apoio visual.",
    dias: [
      d("portugues", "Verbetes e textos expositivos", "Dicionário e enciclopédia", ["verbete", "expositivo", "definicao"]),
      d("matematica", "Adição e subtração de frações com apoio visual", "Barras equivalentes", ["fracao", "adicao", "subtracao"]),
      d("portugues", "Definição e objetividade", "Escrita objetiva", ["objetividade", "definicao", "expositivo"]),
      d("matematica", "Equivalência antes do cálculo", "Denominadores compatíveis", ["fracao", "equivalencia", "calculo"]),
      d("revisao", "Revisão da semana + Quiz 20 + Geografia: vegetação e clima do Brasil", "Geografia", ["revisao", "quiz20", "geografia"])
    ]
  },
  {
    semana: 31,
    fase: "fase-3-ponte-6ano",
    titulo: "Coesão referencial e decimais por 10, 100, 1000",
    descricao: "Pronomes em função textual e operações com decimais em escala.",
    dias: [
      d("portugues", "Coesão referencial", "Retomada de referentes", ["coesao", "referencial", "pronomes"]),
      d("matematica", "Multiplicação e divisão de decimais por 10, 100, 1000", "Quadro posicional", ["decimais", "multiplicacao", "divisao"]),
      d("portugues", "Pronomes e substituições", "Trocas no texto", ["pronomes", "substituicao", "coesao"]),
      d("matematica", "Deslocamento da vírgula com sentido", "Valor posicional", ["decimais", "virgula", "valor-posicional"]),
      d("revisao", "Revisão da semana + Quiz 20 + Ciências: sistema digestório e nutrição", "Ciências", ["revisao", "quiz20", "ciencias"])
    ]
  },
  {
    semana: 32,
    fase: "fase-3-ponte-6ano",
    titulo: "Pontuação com sentido e razão intuitiva",
    descricao: "Efeito de sentido da pontuação e comparações proporcionais.",
    dias: [
      d("portugues", "Efeitos de sentido da pontuação", "Comparação de frases", ["pontuacao", "efeito-de-sentido", "texto"]),
      d("matematica", "Razão intuitiva e comparação proporcional", "Escalas simples", ["razao", "proporcao", "comparacao"]),
      d("portugues", "Pontuação e intenção", "Entonação", ["pontuacao", "intencao", "sentido"]),
      d("matematica", "Leitura de comparações proporcionais", "Tabelas simples", ["proporcao", "comparacao", "raciocinio"]),
      d("revisao", "Revisão da semana + Quiz 20 + História: trabalho, indústria e urbanização", "História", ["revisao", "quiz20", "historia"])
    ]
  },
  {
    semana: 33,
    fase: "fase-3-ponte-6ano",
    titulo: "Infográfico e porcentagem aplicada",
    descricao: "Leitura de infográficos e problemas de desconto e acréscimo.",
    dias: [
      d("portugues", "Leitura de infográficos", "Dados + imagem + texto", ["infografico", "multissemiose", "dados"]),
      d("matematica", "Porcentagem aplicada", "Desconto simples", ["porcentagem", "aplicacao", "dinheiro"]),
      d("portugues", "Texto verbal + imagem + dados", "Leitura integrada", ["imagem", "dados", "texto"]),
      d("matematica", "Problemas de desconto e acréscimo simples", "Situações de compra", ["porcentagem", "desconto", "acrescimo"]),
      d("revisao", "Revisão da semana + Quiz 20 + Geografia: cartografia e coordenadas simples", "Geografia", ["revisao", "quiz20", "geografia"])
    ]
  },
  {
    semana: 34,
    fase: "fase-3-ponte-6ano",
    titulo: "Simulados da ponte 5º-6º",
    descricao: "Revisão da transição e simulado guiado.",
    dias: [
      d("portugues", "Revisão da ponte 5º-6º — Português", "Mapa de erros", ["revisao", "ponte", "portugues"]),
      d("matematica", "Revisão da ponte 5º-6º — Matemática", "Mapa de erros", ["revisao", "ponte", "matematica"]),
      d("portugues", "Simulado da ponte — Português", "Correção comentada", ["simulado", "ponte", "portugues"]),
      d("matematica", "Simulado da ponte — Matemática", "Correção comentada", ["simulado", "ponte", "matematica"]),
      d("revisao", "Revisão + Quiz 20 + correção comentada da ponte", "Diagnóstico", ["revisao", "quiz20", "correcao"])
    ]
  },
  {
    semana: 35,
    fase: "fase-3-ponte-6ano",
    titulo: "Reforço da ponte",
    descricao: "Prática guiada para fechar os pontos fracos da transição.",
    dias: [
      d("portugues", "Reforço dos pontos fracos — Português", "Exercícios focados", ["reforco", "ponte", "portugues"]),
      d("matematica", "Reforço dos pontos fracos — Matemática", "Exercícios focados", ["reforco", "ponte", "matematica"]),
      d("portugues", "Prática guiada de inferência e gênero", "Mediação", ["pratica-guiada", "inferencia", "generos"]),
      d("matematica", "Prática guiada de frações e múltiplos", "Mediação", ["pratica-guiada", "fracao", "multiplos"]),
      d("revisao", "Revisão da semana + Quiz 20 + Ciências: sistema respiratório", "Ciências", ["revisao", "quiz20", "ciencias"])
    ]
  },
  {
    semana: 36,
    fase: "fase-3-ponte-6ano",
    titulo: "Fechamento da fase 3",
    descricao: "Mini simulados avançados e preparação para a fase híbrida.",
    dias: [
      d("portugues", "Fechamento da fase 3 — Português", "Síntese", ["fechamento", "fase3", "portugues"]),
      d("matematica", "Fechamento da fase 3 — Matemática", "Síntese", ["fechamento", "fase3", "matematica"]),
      d("portugues", "Mini simulado avançado — Português", "Correção comentada", ["mini-simulado", "fase3", "portugues"]),
      d("matematica", "Mini simulado avançado — Matemática", "Correção comentada", ["mini-simulado", "fase3", "matematica"]),
      d("revisao", "Revisão + Quiz 20 + preparação para a fase híbrida", "Transição", ["revisao", "quiz20", "transicao"])
    ]
  },
  {
    semana: 37,
    fase: "fase-4-dominio-hibrido",
    titulo: "Crônica e expressões numéricas",
    descricao: "Mistura de leitura crítica e cálculo estruturado.",
    dias: [
      d("portugues", "Crônica e cotidiano", "Observação do dia a dia", ["cronica", "cotidiano", "leitura"]),
      d("matematica", "Expressões numéricas", "Sequência de operações", ["expressoes", "operacoes", "ordem"]),
      d("portugues", "Humor, crítica e observação", "Leitura interpretativa", ["cronica", "humor", "critica"]),
      d("matematica", "Interpretação de expressões", "Explicar o raciocínio", ["expressoes", "interpretacao", "calculo"]),
      d("revisao", "Revisão da semana + Quiz 20 + História: direitos e cidadania", "História", ["revisao", "quiz20", "historia"])
    ]
  },
  {
    semana: 38,
    fase: "fase-4-dominio-hibrido",
    titulo: "Texto instrucional e ângulos",
    descricao: "Leitura de regras e classificação de ângulos.",
    dias: [
      d("portugues", "Texto instrucional e regulamento", "Regras do cotidiano", ["instrucional", "regulamento", "leitura-funcional"]),
      d("matematica", "Ângulos", "Dobras e giros", ["angulos", "geometria", "classificacao"]),
      d("portugues", "Verbos no imperativo e clareza", "Comandos", ["imperativo", "clareza", "instrucao"]),
      d("matematica", "Classificação e medição intuitiva", "Transferidor ilustrativo", ["angulos", "medicao", "geometria"]),
      d("revisao", "Revisão da semana + Quiz 20 + Geografia: recursos naturais", "Geografia", ["revisao", "quiz20", "geografia"])
    ]
  },
  {
    semana: 39,
    fase: "fase-4-dominio-hibrido",
    titulo: "Notícia e opinião + polígonos",
    descricao: "Comparar posições textuais e aprofundar geometria plana.",
    dias: [
      d("portugues", "Comparação entre notícia e opinião", "Leitura crítica", ["noticia", "opiniao", "comparacao"]),
      d("matematica", "Polígonos e classificação", "Desenho e análise", ["poligonos", "classificacao", "geometria"]),
      d("portugues", "Marcas de posicionamento", "Palavras de opinião", ["opiniao", "marcas", "argumentacao"]),
      d("matematica", "Construção e análise de figuras", "Malha geométrica", ["figuras", "analise", "construcao"]),
      d("revisao", "Revisão da semana + Quiz 20 + Ciências: sistema circulatório", "Ciências", ["revisao", "quiz20", "ciencias"])
    ]
  },
  {
    semana: 40,
    fase: "fase-4-dominio-hibrido",
    titulo: "Reescrita e perímetro/área",
    descricao: "Melhoria de texto e problemas integrados de geometria.",
    dias: [
      d("portugues", "Reescrita e melhoria de texto", "Versão 1 e versão 2", ["reescrita", "melhoria", "texto"]),
      d("matematica", "Perímetro e área em figuras variadas", "Figuras compostas", ["perimetro", "area", "figuras"]),
      d("portugues", "Revisar para melhorar sentido", "Autocorreção", ["revisao", "sentido", "escrita"]),
      d("matematica", "Problemas integrados", "Situações mistas", ["problemas", "perimetro", "area"]),
      d("revisao", "Revisão da semana + Quiz 20 + História: movimentos sociais", "História", ["revisao", "quiz20", "historia"])
    ]
  },
  {
    semana: 41,
    fase: "fase-4-dominio-hibrido",
    titulo: "Anúncios e gráficos",
    descricao: "Leitura persuasiva e análise crítica de gráficos.",
    dias: [
      d("portugues", "Leitura crítica de anúncios", "Publicidade", ["anuncios", "persuasao", "leitura-critica"]),
      d("matematica", "Leitura crítica de gráficos", "Comparação de dados", ["graficos", "analise", "dados"]),
      d("portugues", "Linguagem persuasiva", "Recursos de convencimento", ["persuasao", "publicidade", "linguagem"]),
      d("matematica", "Escolher gráfico, ler tendência e comparar dados", "Análise de situações", ["graficos", "tendencia", "comparacao"]),
      d("revisao", "Revisão da semana + Quiz 20 + Geografia: economia e espaço geográfico", "Geografia", ["revisao", "quiz20", "geografia"])
    ]
  },
  {
    semana: 42,
    fase: "fase-4-dominio-hibrido",
    titulo: "Sentido figurado e probabilidade",
    descricao: "Introdução a linguagem figurada e noções intuitivas de chance.",
    dias: [
      d("portugues", "Figuras de linguagem em nível introdutório", "Sentido figurado", ["figuras-de-linguagem", "sentido-figurado", "interpretacao"]),
      d("matematica", "Probabilidade intuitiva", "Jogos e sorteios", ["probabilidade", "chance", "raciocinio"]),
      d("portugues", "Sentido literal e figurado", "Comparação de frases", ["literal", "figurado", "sentido"]),
      d("matematica", "Chance, certeza, impossível, provável", "Eventos", ["probabilidade", "eventos", "classificacao"]),
      d("revisao", "Revisão da semana + Quiz 20 + Ciências: sistema nervoso e sentidos", "Ciências", ["revisao", "quiz20", "ciencias"])
    ]
  },
  {
    semana: 43,
    fase: "fase-4-dominio-hibrido",
    titulo: "Opinião escrita e problemas mistos",
    descricao: "Justificar respostas por escrito e resolver problemas variados.",
    dias: [
      d("portugues", "Produção de opinião curta", "Tomar posição", ["opiniao", "escrita", "argumentacao"]),
      d("matematica", "Problemas mistos 1", "Interleaving", ["problemas", "mistos", "interleaving"]),
      d("portugues", "Justificar uma resposta com texto", "Citar evidência", ["justificativa", "texto", "argumentacao"]),
      d("matematica", "Interleaving pesado", "Mistura de estratégias", ["interleaving", "estrategia", "problemas"]),
      d("revisao", "Revisão da semana + Quiz 20 + História: Brasil contemporâneo", "História", ["revisao", "quiz20", "historia"])
    ]
  },
  {
    semana: 44,
    fase: "fase-4-dominio-hibrido",
    titulo: "Interpretação avançada e autocorreção",
    descricao: "Treino de alto nível em leitura e resolução de problemas.",
    dias: [
      d("portugues", "Interpretação em alto nível", "Comparação e inferência", ["interpretacao", "alto-nivel", "leitura"]),
      d("matematica", "Problemas mistos 2", "Estratégias múltiplas", ["problemas", "mistos", "raciocinio"]),
      d("portugues", "Inferência, ironia e comparação textual", "Leitura crítica", ["inferencia", "ironia", "comparacao"]),
      d("matematica", "Erro típico e autocorreção", "Análise do erro", ["erro", "autocorrecao", "estrategia"]),
      d("revisao", "Revisão da semana + Quiz 20 + Geografia: meio ambiente e sociedade", "Geografia", ["revisao", "quiz20", "geografia"])
    ]
  },
  {
    semana: 45,
    fase: "fase-4-dominio-hibrido",
    titulo: "Fechamento da fase híbrida",
    descricao: "Simulados híbridos e síntese da fase 4.",
    dias: [
      d("portugues", "Revisão híbrida — Português", "Mapa de erros", ["revisao", "hibrida", "portugues"]),
      d("matematica", "Revisão híbrida — Matemática", "Mapa de erros", ["revisao", "hibrida", "matematica"]),
      d("portugues", "Simulado híbrido — Português", "Correção comentada", ["simulado", "hibrido", "portugues"]),
      d("matematica", "Simulado híbrido — Matemática", "Correção comentada", ["simulado", "hibrido", "matematica"]),
      d("revisao", "Revisão + Quiz 20 + fechamento da fase 4", "Síntese", ["revisao", "quiz20", "fechamento"])
    ]
  },
  {
    semana: 46,
    fase: "fase-5-sprint-final",
    titulo: "Diagnóstico final",
    descricao: "Mapeamento fino dos pontos fortes e fracos antes do sprint.",
    dias: [
      d("portugues", "Diagnóstico final — Português", "Mapeamento", ["diagnostico", "final", "portugues"]),
      d("matematica", "Diagnóstico final — Matemática", "Mapeamento", ["diagnostico", "final", "matematica"]),
      d("portugues", "Reforço 1 — Português", "Exercícios focados", ["reforco", "final", "portugues"]),
      d("matematica", "Reforço 1 — Matemática", "Exercícios focados", ["reforco", "final", "matematica"]),
      d("revisao", "Revisão + Quiz 20 + mapa de erros", "Diagnóstico", ["revisao", "quiz20", "erros"])
    ]
  },
  {
    semana: 47,
    fase: "fase-5-sprint-final",
    titulo: "Reforço orientado",
    descricao: "Treino objetivo para múltipla escolha e correção de lacunas críticas.",
    dias: [
      d("portugues", "Reforço 2 — interpretação, inferência e gêneros", "Questões objetivas", ["reforco", "interpretacao", "generos"]),
      d("matematica", "Reforço 2 — frações, decimais e problemas", "Questões objetivas", ["reforco", "fracao", "decimais"]),
      d("portugues", "Treino objetivo de múltipla escolha — Português", "Estratégia de prova", ["multipla-escolha", "estrategia", "portugues"]),
      d("matematica", "Treino objetivo de múltipla escolha — Matemática", "Estratégia de prova", ["multipla-escolha", "estrategia", "matematica"]),
      d("revisao", "Revisão + Quiz 20 + correção guiada", "Estratégia", ["revisao", "quiz20", "correcao"])
    ]
  },
  {
    semana: 48,
    fase: "fase-5-sprint-final",
    titulo: "Treino sob tempo",
    descricao: "Velocidade com precisão e técnicas de eliminação de alternativas.",
    dias: [
      d("portugues", "Leitura sob tempo", "Cronometrado", ["tempo", "leitura", "estrategia"]),
      d("matematica", "Cálculo sob tempo", "Cronometrado", ["tempo", "calculo", "estrategia"]),
      d("portugues", "Estratégias de eliminação de alternativas", "Questões objetivas", ["alternativas", "estrategia", "prova"]),
      d("matematica", "Estratégias de conferência rápida", "Revisão de resposta", ["conferencia", "estrategia", "prova"]),
      d("revisao", "Revisão + Quiz 20 + simulado parcial", "Treino de prova", ["revisao", "quiz20", "simulado"])
    ]
  },
  {
    semana: 49,
    fase: "fase-5-sprint-final",
    titulo: "Simulado 1",
    descricao: "Primeiro grande simulado com correção comentada.",
    dias: [
      d("portugues", "Simulado 1 — Português", "Prova objetiva", ["simulado", "portugues", "final"]),
      d("matematica", "Simulado 1 — Matemática", "Prova objetiva", ["simulado", "matematica", "final"]),
      d("portugues", "Correção comentada do Simulado 1 — Português", "Análise de erros", ["correcao", "simulado", "portugues"]),
      d("matematica", "Correção comentada do Simulado 1 — Matemática", "Análise de erros", ["correcao", "simulado", "matematica"]),
      d("revisao", "Revisão + Quiz 20 + reforço dos erros", "Correção focada", ["revisao", "quiz20", "erros"])
    ]
  },
  {
    semana: 50,
    fase: "fase-5-sprint-final",
    titulo: "Simulado 2",
    descricao: "Segundo simulado e consolidação emocional para a prova.",
    dias: [
      d("portugues", "Simulado 2 — Português", "Prova objetiva", ["simulado", "portugues", "final"]),
      d("matematica", "Simulado 2 — Matemática", "Prova objetiva", ["simulado", "matematica", "final"]),
      d("portugues", "Correção comentada do Simulado 2 — Português", "Análise de erros", ["correcao", "simulado", "portugues"]),
      d("matematica", "Correção comentada do Simulado 2 — Matemática", "Análise de erros", ["correcao", "simulado", "matematica"]),
      d("revisao", "Revisão + Quiz 20 + estratégia emocional de prova", "Confiança", ["revisao", "quiz20", "emocional"])
    ]
  },
  {
    semana: 51,
    fase: "fase-5-sprint-final",
    titulo: "Fechamento final",
    descricao: "Revisão leve, confiança e encerramento do ciclo.",
    dias: [
      d("portugues", "Revisão final leve — Português", "Leitura e confiança", ["revisao", "final", "portugues"]),
      d("matematica", "Revisão final leve — Matemática", "Cálculo e confiança", ["revisao", "final", "matematica"]),
      d("portugues", "Confiança, leitura e precisão", "Estratégia final", ["confianca", "leitura", "precisao"]),
      d("matematica", "Confiança, organização e precisão", "Estratégia final", ["confianca", "organizacao", "precisao"]),
      d("revisao", "Quiz final 20 + fechamento do ciclo + mensagem final ao Eiji", "Encerramento", ["quiz20", "fechamento", "mensagem-final"])
    ]
  }
];

function montarSemanas() {
  return SEMANAS_BASE.map((semanaObj) => {
    const fase = FASES.find((f) => f.id === semanaObj.fase);

    return {
      ...semanaObj,
      reino: fase ? fase.reino : "",
      reinoIcone: fase ? fase.icone : "🗺️",
      lore: fase ? fase.lore : "",
      narrativa: narrativaSemana(semanaObj.semana, semanaObj.fase, semanaObj.titulo),
      recompensaSemana: recompensaSemana(semanaObj.semana)
    };
  });
}

const SEMANAS = montarSemanas();

function padDia(numero) {
  return String(numero).padStart(3, "0");
}

function gerarDias(semanas) {
  const dias = [];

  semanas.forEach((semanaObj) => {
    semanaObj.dias.forEach((diaObj, index) => {
      const numeroDia = ((semanaObj.semana - 1) * 5) + index + 1;
      const id = `dia-${padDia(numeroDia)}`;
      const disciplinaMeta = DISCIPLINAS[diaObj.disciplina] || DISCIPLINAS.revisao;
      const posicaoSemana = index + 1;

      dias.push({
        numero: numeroDia,
        id,
        semana: semanaObj.semana,
        fase: semanaObj.fase,
        reino: semanaObj.reino,
        reinoIcone: semanaObj.reinoIcone,
        semanaTitulo: semanaObj.titulo,
        semanaDescricao: semanaObj.descricao,
        narrativaSemana: semanaObj.narrativa,
        titulo: diaObj.titulo,
        disciplina: diaObj.disciplina,
        disciplinaNome: disciplinaMeta.nome,
        disciplinaIcone: disciplinaMeta.icone,
        disciplinaCor: disciplinaMeta.cor,
        expansao: diaObj.expansao,
        tags: diaObj.tags,
        arquivo: `apostilas/${id}.html`,
        concluido: false,
        posicaoSemana,
        iconeMissao: ICONES_MISSAO_POR_POSICAO[index],
        raridade: RARIDADE_POR_POSICAO[index],
        xp: 10,
        moedas: 3,
        reward: {
          xp: 10,
          moedas: 3
        }
      });
    });
  });

  return dias;
}

const DIAS = gerarDias(SEMANAS);

const CONFIG = {
  projeto: {
    nome: "desafio-objetivo-eiji",
    titulo: "Jornada do Eiji | Desafio Objetivo",
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
    ],
    recompensas: {
      xpPorDia: 10,
      moedasPorDia: 3,
      xpPorBau: 25,
      moedasPorBau: 15
    }
  },
  disciplinas: DISCIPLINAS,
  fases: FASES,
  semanas: SEMANAS,
  dias: DIAS,
  bauPool: BAU_POOL
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

function getRecompensaDaSemana(numeroSemana) {
  const semana = getSemana(numeroSemana);
  return semana ? semana.recompensaSemana : null;
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
window.getRecompensaDaSemana = getRecompensaDaSemana;
window.getDiaPorData = getDiaPorData;
