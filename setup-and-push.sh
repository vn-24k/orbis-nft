#!/bin/bash
echo "======= CORRIGINDO INFRAESTRUTURA DE CONEXÃO ======="

# 1. Garante que a branch local chama-se main
git branch -m master main 2>/dev/null || git branch -m main

# 2. Remove o link remoto antigo que falhou
git remote remove origin 2>/dev/null

# 3. Solicita a URL direta do seu repositório para evitar adivinhação ou timeout da CLI
echo "Por favor, digite ou cole a URL do seu repositório GitHub (ex: https://github.com/usuario/orbis-nft.git):"
read REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "Erro: URL vazia. Abortando."
    exit 1
fi

# 4. Adiciona o novo link remoto correto
git remote add origin "$REPO_URL"

# 5. Adiciona todos os arquivos criados até agora (Componentes, App, Estilos)
git add .

# 6. Cria o Commit unificado das Seções 1 e 2
git commit -m "feat: core infrastructure, navbar, hero and about sections completed"

# 7. Sobe os arquivos de verdade para a nuvem
echo "Subindo os arquivos para o GitHub..."
git push -u origin main

echo "======= PROCESSO CONCLUÍDO ======="
