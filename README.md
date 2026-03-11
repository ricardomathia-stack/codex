# Dashboard Comercial RD CRM (Vercel)

Projeto base em Next.js para publicar um dashboard comercial na Vercel, conectado ao GitHub.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Como ver no Vercel (com GitHub já conectado)

Se você já conectou sua conta GitHub na Vercel, o fluxo é este:

1. Entre em https://vercel.com/dashboard.
2. Clique em **Add New... > Project**.
3. Selecione este repositório.
4. Em **Framework Preset**, deixe **Next.js**.
5. Em **Build and Output Settings**, mantenha padrão:
   - Build Command: `npm run build`
   - Output Directory: padrão do Next.js
6. Clique em **Deploy**.
7. Ao finalizar, a Vercel mostra uma URL pública como:
   - `https://<nome-do-projeto>.vercel.app`

## Não está achando no GitHub? (checklist rápido)

Se o projeto não aparece no GitHub, normalmente é porque o repositório local ainda não está conectado ao remoto ou ainda não foi feito `push`.

### 1) Verifique se há remoto configurado

```bash
git remote -v
```

Se não aparecer uma URL do GitHub, configure:

```bash
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
```

### 2) Verifique sua branch atual

```bash
git branch --show-current
```

### 3) Envie o código para o GitHub

```bash
git push -u origin SUA_BRANCH
```

Exemplo comum:

```bash
git push -u origin main
```

### 4) Confirme no GitHub

- Abra: `https://github.com/SEU_USUARIO/SEU_REPO`
- Vá na aba **Code** para ver os arquivos.
- Vá em **Commits** para confirmar o histórico.

### 5) Se o repo for privado, confira permissões

- Sua conta precisa ter acesso ao repositório.
- Na Vercel, em **Settings > Git**, confirme que a integração com GitHub está na conta correta.

## Próximos deploys automáticos

Depois do primeiro deploy, qualquer `git push` na branch configurada dispara novo deploy automaticamente.

## Como acompanhar deploy e logs

- Projeto > **Deployments**: lista de deploys.
- Clique em um deploy para ver:
  - status de build
  - logs de instalação/build
  - URL de preview/produção

## Se quiser publicar em domínio próprio

1. Projeto > **Settings** > **Domains**.
2. Adicione seu domínio.
3. Configure os DNS conforme instruções da Vercel.

## Variáveis de ambiente (RD CRM)

Quando for integrar dados reais do RD CRM:

1. Projeto > **Settings** > **Environment Variables**.
2. Crie `RD_TOKEN` (nunca commitar token no código).
3. Redeploy para aplicar as variáveis.

## Próximos passos para integrar dados reais do RD CRM

- Criar rota API (`app/api/...`) para ingestão segura dos endpoints do RD.
- Substituir os dados mock de `lib/dashboard-data.ts` por dados reais.
