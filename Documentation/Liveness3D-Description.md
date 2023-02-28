## O que é Liveness 3D?
É um SDK para detecção da prova de vida de usuários em três verificações: **identificação de vivacidade**, **reconhecimento facial utilizando tecnologia 3D** e a **autenticação da identidade**.
O que significam essas verificações?
1. **Identificação de vivacidade**: validar se é uma pessoa "mesmo" e não um objeto ou foto de foto por exemplo.
2. **Reconhecimento facial**: depois de identificar um rosto de uma pessoa, é feito o processo de reconhecimento facial.
3. **Autenticação da identidade**: depois de coletar as evidências da pessoal é validado no backend se aquele rosto bate com o rosto de cadastro.
 
### Como funciona?
A solução utiliza algoritmos para detecção de distorções e alterações da face através de uma tecnologia 3D.
Após a captura, é gerado um mapa tridimensional que mede a profundidade da face, a textura da pele e o reflexo dos olhos. Em poucos segundos esse SDK é capaz de processar mais de 100 quadros de vídeo e realizar engenharia reversa de um mapa da face.
 
## Resultado
As soluções de Liveness mencionadas acima fornecem alguns retornos para o usuário. Entenda quais são eles:
 
### Resultado positivo
Acontece quando os desafios são concluídos com sucesso. Isso significa que existe um baixo risco de fraude.
 
### Resultado negativo
Ocorre quando há uma falha na autenticação facial. Esses resultados podem indicar fraude.
- falha na validação da autenticidade facial;
- erro na execução de interações do usuário;
- alcance do limite de tentativas de execução do liveness pelo usuário.
 
Os retornos são representados pelos seguintes códigos:
 
| codID| Descrição |
| - | - |
| 1.1    | Cadastro com sucesso  |
| 1.2 | Certificação positiva (Conhecido = True)|
| 200.1 | Cadastro com alertas |
| 200.2 | Certificação negativa (Conhecido = True) |
| 200.3 | Certificação positiva (Conhecido = False) |
| 200.4 | Certificação negativa (Conhecido = False) |
| 300.1 | Prova de vida inválida |
| 300.2 | Usuário bloqueado |
