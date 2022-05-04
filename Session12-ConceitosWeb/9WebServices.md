# WebServices  

## O que é?  

- É um serviço web, em outras palavras é um serviço de négocio que sua aplicação oferece ao usuário, que é disponibilizado sobre as tecnologia da web, na qual os dados são trafegados de forma textual.  

## SOAP  

- Simple Object Access Protocol   
- Versão mais antiga e mais burocrático  
- WSDL - Web Service Descripition Language  
- formato XML  
- RPC - Remote Procedure Call  

## REST  

- Represetational State Transfer  
- verbos do HTTP  
- Requisições e Respostas  
- RestFul  
- Simples  
- formato JSON  

**Exemplo: ** 

| URL | Método | Descrição |
|-----------|--------|-----------|
| /clientes | POST | Novo Cliente |
| /clientes | GET | Obtém Todos |
| /clientes/12 | PUT | Atualiza Cliente 12 |
| /clientes/42 | DELETE | Exclui cliente 41 |

## Arquiteturas

1. SOA  
- mais antiga  
- baseada em serviços  
- Linguagens para orquestrar  
2. Micro Service
- Aplicação grande e quebrar ela em varios ambientes
- Equipes são responsavéis por u micro serviço
