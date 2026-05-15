#!/bin/bash
# 1. Renomeia a branch local de master para main
git branch -m master main

# 2. Verifica se o remote origin já foi adicionado, se não, tenta criar o repo novamente
if ! git remote get-url origin >/dev/null 2>&1; then
    echo "Tentando criar o repositório no GitHub novamente..."
    gh repo create orbis-nft --public --source=. --remote=origin
else
    echo "Remoto 'origin' já configurado."
fi

# 3. Força o push da branch correta
echo "Efetuando o push para origin main..."
git push -u origin main
