/* Atualize este arquivo para publicar novos status e releases sem mexer no layout. */
window.INVESTTRACK_DATA = {
  progress: 0,
  currentVersion: "v0.0.0",
  progressCaption: "Planejamento em andamento",
  roadmap: [
    {title:"Planejamento e definição do produto",description:"Escopo, requisitos, regras de negócio, decisões tecnológicas e documentação inicial.",status:"active",label:"Em andamento"},
    {title:"Preparação do ambiente e solução .NET",description:"Repositório Git, .NET 10, estrutura da solução, projetos e referências.",status:"planned",label:"Planejado"},
    {title:"Domínio e regras de negócio",description:"Entidades, orientação a objetos, validações, algoritmos e princípios SOLID.",status:"planned",label:"Planejado"},
    {title:"Banco de dados e persistência",description:"PostgreSQL, modelagem, SQL, EF Core, migrations, LINQ e Dapper.",status:"planned",label:"Planejado"},
    {title:"API REST",description:"Endpoints, DTOs, DI, Options Pattern, exceções, logging e Swagger/OpenAPI.",status:"planned",label:"Planejado"},
    {title:"Testes automatizados",description:"Testes unitários, mocks e testes de integração dos principais fluxos.",status:"planned",label:"Planejado"},
    {title:"Interface web Blazor",description:"Telas, formulários, tabelas, gráficos e consumo da API.",status:"planned",label:"Planejado"},
    {title:"Importação e processamento CSV",description:"Upload, validação, processamento assíncrono e prevenção de duplicidade.",status:"planned",label:"Planejado"},
    {title:"Integração AWS",description:"S3, SQS e Lambda .NET; IAM e observabilidade com CloudWatch.",status:"planned",label:"Planejado"},
    {title:"Docker, CI/CD e publicação",description:"Containerização, GitHub Actions, documentação e publicação demonstrável.",status:"planned",label:"Planejado"}
  ],
  releases: [
    {version:"v0.0.0",title:"Início do projeto",description:"Projeto apresentado e escopo inicial definido. Site de acompanhamento criado para registrar a jornada de desenvolvimento.",date:"Novembro/2026",status:"Atual"},
    {version:"v0.1.0",title:"Planejamento e requisitos",description:"Previsto: visão do produto, escopo funcional, regras de negócio e requisitos não funcionais.",date:"A definir",status:"Planejado"},
    {version:"v0.2.0",title:"Modelagem e arquitetura",description:"Previsto: modelo de dados, relacionamentos, estrutura da solução e decisões arquiteturais.",date:"A definir",status:"Planejado"},
    {version:"v0.3.0",title:"Fundação .NET e domínio",description:"Previsto: solução .NET 10, projetos, entidades e primeiras regras de negócio.",date:"A definir",status:"Planejado"},
    {version:"v0.4.0",title:"API e persistência",description:"Previsto: PostgreSQL, EF Core, Dapper, endpoints REST e Swagger.",date:"A definir",status:"Planejado"},
    {version:"v0.5.0",title:"Experiência web",description:"Previsto: interface Blazor integrada à API, com os principais fluxos do usuário.",date:"A definir",status:"Planejado"},
    {version:"v0.6.0",title:"Qualidade e automação",description:"Previsto: testes, Docker, pipeline CI/CD e documentação técnica.",date:"A definir",status:"Planejado"},
    {version:"v0.7.0",title:"Processamento e AWS",description:"Previsto: importação CSV e integração complementar com S3, SQS e Lambda.",date:"A definir",status:"Planejado"},
    {version:"v1.0.0",title:"Primeira versão demonstrável",description:"Meta: aplicação publicada ou reproduzível, documentação e demonstração final.",date:"Meta: dezembro/2026",status:"Planejado"}
  ],
  technologies: [
    {icon:"C#",name:"C# / .NET 10",desc:"Linguagem e plataforma backend"},
    {icon:"API",name:"ASP.NET Core",desc:"Construção da API REST"},
    {icon:"B",name:"Blazor Web App",desc:"Interface web"},
    {icon:"PG",name:"PostgreSQL",desc:"Banco de dados relacional"},
    {icon:"EF",name:"EF Core",desc:"Mapeamento e persistência"},
    {icon:"SQL",name:"Dapper + LINQ",desc:"Consultas e leitura de dados"},
    {icon:"TEST",name:"xUnit + Moq",desc:"Testes automatizados"},
    {icon:"DOC",name:"Swagger / OpenAPI",desc:"Documentação da API"},
    {icon:"GIT",name:"Git + GitHub",desc:"Versionamento e colaboração"},
    {icon:"DO",name:"Docker",desc:"Ambiente containerizado"},
    {icon:"CI",name:"GitHub Actions",desc:"Automação CI/CD"},
    {icon:"AWS",name:"AWS",desc:"S3, SQS, Lambda e CloudWatch"}
  ],
  deliverables: [
    ["Cadastro e consulta de usuários","Gestão básica dos usuários da plataforma."],
    ["Criação e gestão de carteiras","Organização de uma ou mais carteiras por usuário."],
    ["Cadastro de ativos financeiros","Ações, FIIs, ETFs e outros tipos definidos no escopo."],
    ["Registro de compras e vendas","Registro de movimentações já realizadas pelo usuário."],
    ["Cálculo de posições e preço médio","Apuração da quantidade e custo com base no histórico."],
    ["Visão de patrimônio e distribuição","Resumo e gráficos com valores de referência cadastrados."],
    ["Importação de movimentações CSV","Envio, validação e acompanhamento do processamento."],
    ["API documentada e testada","Swagger e cobertura dos principais cenários."],
    ["Aplicação containerizada e pipeline","Docker e automação de build/testes."],
    ["Demonstração publicada","Acesso à aplicação ou instruções reproduzíveis de execução."]
  ]
};