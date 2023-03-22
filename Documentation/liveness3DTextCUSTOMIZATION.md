# 1. Exemplo de Customização de Textos no Android

Para iniciar a customização dos textos você deve importar a classe Liveness3DTextKey no arquivo do modulo Liveness3dReactNativeModule

### PASSO 1

```java
import br.com.oiti.liveness3d.data.model.Liveness3DTextKey;
```

### PASSO 2

Após importar a classe Liveness3DTextKey você pode customizar o texto criando o MAP das strings da seguinte forma;

```java
        Map<Liveness3DTextKey, String> texts = new HashMap<Liveness3DTextKey, String>() {{
                put(Liveness3DTextKey.READY_HEADER_1,"TESTE TEXTO");
                put(Liveness3DTextKey.READY_HEADER_2,"DE REC FACIAL");
        }};
```

## PASSO 3

Após prepara o MAP das strings vocé deve colocar o putExtra na Activity Liveness3DActivity utilizando PARAM_TEXTS;

```java
        Liveness3DUser liveness3DUser = new Liveness3DUser(appKey, ENVIRONMENT3D.HML, null);
                        Intent intent = new Intent(getCurrentActivity(), Liveness3DActivity.class);
                        intent.putExtra(Liveness3DActivity.PARAM_LIVENESS3D_USER, liveness3DUser);
                        intent.putExtra(Liveness3DActivity.PARAM_TEXTS, (Serializable) texts);
```

# 2. Guia de Parâmetros de Customização no Android

Abaixo, estão mapeadas as propriedades para customização de Textos.

```java
            Liveness3DTextKey.READY_HEADER_1,"Prepare-se para seu"
            Liveness3DTextKey.READY_HEADER_2,"reconhecimento facial."
            Liveness3DTextKey.READY_MESSAGE_1,"Posicione o seu rosto na moldura, aproxime-se"
            Liveness3DTextKey.READY_MESSAGE_2,"e toque em começar."
            Liveness3DTextKey.READY_BUTTON,"Começar"

            Liveness3DTextKey.RETRY_HEADER,"Vamos tentar novamente?"
            Liveness3DTextKey.RETRY_SUBHEADER,"Siga o exemplo de foto ideal abaixo:"
            Liveness3DTextKey.RETRY_MESSAGE_SMILE,"Expressão Neutra, Sem Sorrir",
            Liveness3DTextKey.RETRY_MESSAGE_LIGHTING,"Evite reflexos e iluminação extrema."
            Liveness3DTextKey.RETRY_MESSAGE_CONTRAST,"Limpe Sua Câmera"
            Liveness3DTextKey.RETRY_YOUR_PICTURE,"Sua foto"
            Liveness3DTextKey.RETRY_IDEAL_PICTURE,"Foto ideal"
            Liveness3DTextKey.RETRY_BUTTON,"Tentar novamente"

            Liveness3DTextKey.RESULT_UPLOAD_MESSAGE,"Enviando..."
            Liveness3DTextKey.RESULT_SUCCESS_MESSAGE,"Sucesso",

            Liveness3DTextKey.FEEDBACK_CENTER_FACE,"Centralize Seu Rosto"
            Liveness3DTextKey.FEEDBACK_FACE_NOT_FOUND,"Enquadre o Seu Rosto"
            Liveness3DTextKey.FEEDBACK_FACE_NOT_LOOKING_STRAIGHT_AHEAD,"Olhe Para Frente"
            Liveness3DTextKey.FEEDBACK_FACE_NOT_UPRIGHT,"Mantenha a Cabeça Reta"
            Liveness3DTextKey.FEEDBACK_HOLD_STEADY,"Segure Firme"
            Liveness3DTextKey.FEEDBACK_MOVE_PHONE_AWAY,"Afaste-se"
            Liveness3DTextKey.FEEDBACK_MOVE_PHONE_CLOSER,"Aproxime-se"
            Liveness3DTextKey.FEEDBACK_MOVE_PHONE_TO_EYE_LEVEL,"Telefone ao Nível dos Olhos"
            Liveness3DTextKey.FEEDBACK_USE_EVEN_LIGHTING,"Ilumine Seu Rosto Uniformemente"

            Liveness3DTextKey.FEEDBACK_FRAME_YOUR_FACE,"Encaixe Seu Rosto no Espaço Oval"
            Liveness3DTextKey.FEEDBACK_HOLD_STEADY_1,"Aguente Firme: 1"
            Liveness3DTextKey.FEEDBACK_HOLD_STEADY_2,"Aguente Firme: 2"
            Liveness3DTextKey.FEEDBACK_HOLD_STEADY_3,"Aguente Firme: 3"
            Liveness3DTextKey.FEEDBACK_EYES_STRAIGHT_AHEAD,"Olhe Para Frente"
            Liveness3DTextKey.FEEDBACK_REMOVE_DARK_GLASSES,"Tire Seus Óculos de Sol"
            Liveness3DTextKey.FEEDBACK_NEUTRAL_EXPRESSION,"Fique Neutro, Não Sorria"
            Liveness3DTextKey.FEEDBACK_CONDITIONS_TOO_BRIGHT,"Ambiente Muito Iluminado"
            Liveness3DTextKey.FEEDBACK_BRIGHTEN_YOUR_ENVIRONMENT,"Ambiente Muito Escuro"
```
