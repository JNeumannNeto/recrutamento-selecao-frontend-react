# Instruções de Execução - Frontend React

## 🚀 Como executar o projeto

### Pré-requisitos
- Node.js 16 ou superior
- npm ou yarn
- Backend Go rodando (opcional para desenvolvimento da interface)

### Passo a passo

1. **Navegue até o diretório do projeto:**
```bash
cd recrutamento-selecao-frontend-react
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure as variáveis de ambiente:**
```bash
# Copie o arquivo de exemplo
cp .env.example .env

# Edite o arquivo .env se necessário
# Por padrão, a API está configurada para http://localhost
```

4. **Execute o projeto em modo de desenvolvimento:**
```bash
npm start
```

5. **Acesse a aplicação:**
   - Abra seu navegador em: `http://localhost:3000`

## 🔧 Scripts disponíveis

```bash
# Desenvolvimento
npm start                 # Inicia o servidor de desenvolvimento

# Build
npm run build            # Cria build de produção
npm run build:analyze    # Analisa o bundle de produção

# Testes
npm test                 # Executa os testes
npm run test:coverage    # Executa testes com coverage

# Linting e formatação
npm run lint             # Verifica problemas de código
npm run lint:fix         # Corrige problemas automaticamente
npm run format           # Formata o código
```

## 🌐 Configuração da API

O frontend está configurado para se comunicar com os seguintes serviços:

- **Auth Service**: `http://localhost:8083/api/v1`
- **Job Service**: `http://localhost:8081/api/v1`
- **Candidate Service**: `http://localhost:8082/api/v1`

### Executando sem o Backend

Se você quiser apenas visualizar a interface sem o backend:

1. O projeto irá funcionar normalmente
2. As funcionalidades de login/registro não funcionarão
3. Você pode navegar pelas páginas públicas
4. As páginas protegidas redirecionarão para login

## 📱 Funcionalidades Disponíveis

### ✅ Implementadas
- Página inicial responsiva
- Sistema de autenticação (login/registro)
- Navegação com header dinâmico
- Rotas protegidas por role
- Layout responsivo com Tailwind CSS

### 🚧 Em Desenvolvimento
- Listagem de vagas com filtros
- Perfil do candidato
- Dashboard administrativo
- Upload de currículo
- Sistema de candidaturas

## 🎨 Tecnologias Utilizadas

- **React 18** com TypeScript
- **Tailwind CSS** para estilização
- **React Router DOM** para navegação
- **React Hook Form** + **Yup** para formulários
- **Axios** para requisições HTTP
- **Context API** para gerenciamento de estado

## 🔍 Estrutura de Pastas

```
src/
├── components/          # Componentes reutilizáveis
│   └── Layout/         # Header, Footer, Layout principal
├── contexts/           # Context API (AuthContext)
├── hooks/              # Hooks customizados
├── pages/              # Páginas da aplicação
│   ├── Home.tsx        # Página inicial
│   ├── Login.tsx       # Página de login
│   └── Register.tsx    # Página de registro
├── services/           # Serviços de API
├── types/              # Tipos TypeScript
└── utils/              # Utilitários
```

## 🐛 Solução de Problemas

### Erro de dependências
```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
```

### Erro de porta ocupada
```bash
# O React tentará usar a próxima porta disponível
# Ou especifique uma porta diferente:
PORT=3001 npm start
```

### Problemas com Tailwind CSS
```bash
# Verifique se o PostCSS está configurado corretamente
npm run build
```

## 📞 Suporte

Se encontrar problemas:

1. Verifique se todas as dependências foram instaladas
2. Confirme que o Node.js está na versão correta
3. Verifique os logs no console do navegador
4. Consulte a documentação do projeto

## 🚀 Deploy

### Build de Produção
```bash
npm run build
```

### Servir localmente
```bash
# Instale um servidor estático
npm install -g serve

# Sirva o build
serve -s build -l 3000
```

### Deploy em Vercel/Netlify
1. Conecte seu repositório
2. Configure as variáveis de ambiente
3. O deploy será automático a cada push

---

**Nota**: Este é um projeto em desenvolvimento. Algumas funcionalidades podem não estar completamente implementadas.
