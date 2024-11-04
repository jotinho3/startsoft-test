# Deploy do Projeto 🚀

Este guia irá orientá-lo sobre como configurar o ambiente Docker e como realizar o deploy das atualizações no servidor hospedado no **Netlify**.

## 📦 Configuração do Docker

Para inicializar o ambiente Docker, siga os passos abaixo:

### 1. Criar o Container

Primeiro, você deve **criar o container** a partir do Dockerfile. Utilize o comando:

```bash
docker build -t starsoft-test .
Nota: O parâmetro -t starsoft-test define o nome do container como starsoft-test para fácil referência em comandos futuros.
```

### 2. Executar o Container
Com o container criado, execute o comando abaixo para iniciar o container:

```bash
docker run -p 4000:4000 -e PORT=4000 starsoft-test
```

Esse comando faz o seguinte:

Mapeia a porta 4000 do seu sistema local para a porta 4000 do container.
Define a variável de ambiente PORT=4000, permitindo que o container escute na porta configurada.
Importante: Certifique-se de que a porta 4000 está disponível em sua máquina para evitar conflitos.

### 🔄 Atualização de Deploy
Sempre que uma nova atualização for feita no código e você desejar enviá-la para o Netlify, basta realizar um push para o repositório:

```bash
git push origin main
```

O Netlify está configurado para detectar automaticamente mudanças no repositório e realizar o deploy com as últimas atualizações.

Dica: Verifique as configurações de deploy no Netlify para confirmar que o deploy automático está ativado.

### 📌 Considerações Finais
Para verificar o status do deploy no Netlify, acesse o painel de controle do Netlify e vá para a seção de deploys.
Certifique-se de realizar testes locais antes de enviar novas atualizações, para garantir que tudo funcione como esperado.
Siga esses passos para garantir que o processo de deploy seja rápido e eficiente. Boa sorte e bons deploys! 🚀


Você pode copiar e colar esse texto em um arquivo chamado `DEPLOY.MD`. Se precisar 
