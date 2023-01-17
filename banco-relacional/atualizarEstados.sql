update estados
set nome = 'Maranhão'
where sigla = 'MA'

select nome from estados where sigla = "MA"

select est.nome, sigla, populacao from estados est where sigla = 'PR'