# Deploy do Projeto 🚀

Este guia irá orientá-lo sobre como configurar o ambiente Docker e como realizar o deploy das atualizações no servidor hospedado no **Netlify**.

## 📦 Configuração do Docker

Para inicializar o ambiente Docker, siga os passos abaixo:

### 1. Criar o Container

Primeiro, você deve **criar o container** a partir do Dockerfile. Utilize o comando:

```bash
docker build -t starsoft-test .
