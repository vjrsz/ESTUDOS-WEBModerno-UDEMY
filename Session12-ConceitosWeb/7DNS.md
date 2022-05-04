# DNS  
- Traduzir nomes de domínio em endereço IP  
- Tem apenas o registro de onde está minha máquina  
- Usa o UDP, na porta 53  

## Funcionamento  
1. Usuário informa o endereço no browser  
2. Computador envia uma consulta DNS para o servidor local  
3. O servidor responde com o endereço IP  
4. Computador acessa o servidor a partir do IP obtido

## Buscas
- Recursiva
    DNS client(envia uma requisição www.cod3r.com.br) -> DNS Sever 1 -> *Envia para outro servers e espera uma resposta*
- Iterativa
    DNS client(envia uma requisição www.cod3r.com.br) -> DNS Sever 1 -> *retorna o ip de outro DNS que possa ter o IP do site*

## DNS Records

- A - IPV4
- AAAA - IPV6
- MX - Servidor de Email
- NS - Sevidor DNS
- CNAME - Canonical Name (apelido)