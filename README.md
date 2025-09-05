# Sistema de Recrutamento e Seleção - Frontend React

Frontend em React TypeScript para o sistema de recrutamento e seleção, desenvolvido para se comunicar com o backend em Go.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **React Router DOM** - Roteamento para aplicações React
- **React Hook Form** - Gerenciamento de formulários
- **Yup** - Validação de esquemas
- **Axios** - Cliente HTTP para requisições
- **Lucide React** - Ícones modernos
- **Context API** - Gerenciamento de estado global

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   └── Layout/         # Componentes de layout
├── contexts/           # Contextos React (AuthContext)
├── hooks/              # Hooks customizados
├── pages/              # Páginas da aplicação
├── services/           # Serviços de API
├── types/              # Definições de tipos TypeScript
├── utils/              # Utilitários e helpers
├── App.tsx             # Componente principal
└── index.tsx           # Ponto de entrada
```

## 🔧 Configuração e Instalação

### Pré-requisitos

- Node.js 16+ 
- npm ou yarn
- Backend Go rodando (portas 8081, 8082, 8083)

### Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd recrutamento-selecao-frontend-react
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
# Crie um arquivo .env na raiz do projeto
REACT_APP_API_BASE_URL=http://localhost
```

4. Execute o projeto:
```bash
npm start
```

O aplicativo estará disponível em `http://localhost:3000`

## 🏗️ Arquitetura

### Serviços de API

O frontend se comunica com 3 microserviços do backend:

- **Auth Service** (porta 8083) - Autenticação e autorização
- **Job Service** (porta 8081) - Gerenciamento de vagas
- **Candidate Service** (porta 8082) - Gerenciamento de candidatos

### Autenticação

- JWT tokens para autenticação
- Refresh tokens para renovação automática
- Context API para gerenciamento de estado de autenticação
- Rotas protegidas baseadas em roles (admin/candidate)

### Tipos de Usuário

1. **Admin**: 
   - Criar e gerenciar vagas
   - Visualizar candidatos
   - Gerenciar processo seletivo

2. **Candidate**:
   - Visualizar vagas disponíveis
   - Candidatar-se a vagas
   - Gerenciar perfil e currículo
   - Acompanhar candidaturas

## 📱 Funcionalidades

### Públicas
- [x] Página inicial com informações do sistema
- [x] Listagem de vagas (sem autenticação)
- [x] Login e registro de usuários

### Candidatos
- [x] Dashboard personalizado
- [ ] Perfil completo com habilidades e experiências
- [ ] Upload de currículo
- [ ] Candidatura a vagas
- [ ] Acompanhamento de candidaturas

### Administradores
- [x] Dashboard administrativo
- [ ] CRUD de vagas
- [ ] Gerenciamento de skills
- [ ] Visualização de candidatos
- [ ] Processo seletivo

## 🎨 Design System

### Cores Principais
- Primary: Azul (#3b82f6)
- Secondary: Cinza
- Success: Verde
- Warning: Amarelo
- Danger: Vermelho

### Componentes Base
- Botões com variações (primary, secondary, danger)
- Inputs com validação
- Cards responsivos
- Badges de status
- Layout responsivo

## 🔒 Segurança

- Tokens JWT com expiração
- Refresh automático de tokens
- Rotas protegidas por role
- Validação de formulários
- Sanitização de dados

## 📊 Estado da Aplicação

### Context API
- **AuthContext**: Gerencia autenticação, usuário logado e tokens

### Hooks Customizados
- **useJobs**: Gerencia estado de vagas
- **useAuth**: Acesso ao contexto de autenticação

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm start

# Build para produção
npm run build

# Testes
npm test

# Análise de bundle
npm run analyze
```

## 🌐 Variáveis de Ambiente

```env
# URL base da API (sem as portas dos serviços)
REACT_APP_API_BASE_URL=http://localhost

# Outras configurações opcionais
REACT_APP_ENVIRONMENT=development
```

## 📝 Próximos Passos

### Funcionalidades Pendentes
1. **Páginas de Vagas**
   - Listagem com filtros avançados
   - Detalhes da vaga
   - Candidatura

2. **Perfil do Candidato**
   - Formulário completo
   - Upload de currículo
   - Gerenciamento de skills

3. **Dashboard Admin**
   - CRUD de vagas
   - Visualização de candidatos
   - Relatórios

4. **Melhorias**
   - Notificações em tempo real
   - Chat entre recrutador e candidato
   - Sistema de avaliações
   - Integração com redes sociais

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🔗 Links Relacionados

- [Backend Go](../RecrutamentoSelecao-Backend-Go/)
- [Documentação da API](../RecrutamentoSelecao-Backend-Go/API_DOCUMENTATION.md)
- [Arquitetura do Sistema](../RecrutamentoSelecao-Backend-Go/ARCHITECTURE.md)
