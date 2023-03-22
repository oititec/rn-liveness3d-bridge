# 1. Exemplo de Customização de Textos no Android

Para iniciar a customização dos textos você deve importar a classe Liveness3DTextKey no arquivo do modulo Liveness3dReactNativeModule

### PASSO 1

```kotlin
import br.com.oiti.liveness3d.data.model.Liveness3DTextKey
```

### PASSO 2

Após importar a classe Liveness3DTextKey você pode customizar o texto criando o MAP das strings da seguinte forma;

```kotlin
        val texts = hashMapOf<Liveness3DTextKey, String>(
            Liveness3DTextKey.READY_HEADER_1 to "Prepare-se para seu",
            Liveness3DTextKey.READY_HEADER_2 to "reconhecimento facial.",
            Liveness3DTextKey.READY_MESSAGE_1 to "Posicione o seu rosto na moldura, aproxime-se",
            Liveness3DTextKey.READY_MESSAGE_2 to "e toque em começar.",
            Liveness3DTextKey.READY_BUTTON to "Começar",
        )
```

## PASSO 3

Após prepara o MAP das strings vocé deve colocar o put na Activity chamada utilizando o PARAM_TEXTS.

```kotlin

          startActivityForResult?.launch(Intent(this, Liveness3DActivity::class.java).apply {
            putExtra(Liveness3DActivity.PARAM_LIVENESS3D_USER, liveness3DUser)
            putExtra(Liveness3DActivity.PARAM_TEXTS, texts)
        })
```

# 2. Guia de Parâmetros de Customização no Android

Abaixo, estão mapeadas as propriedades para customização de Textos.

```kotlin
            Liveness3DTextKey.READY_HEADER_1 to "Prepare-se para seu",
            Liveness3DTextKey.READY_HEADER_2 to "reconhecimento facial.",
            Liveness3DTextKey.READY_MESSAGE_1 to "Posicione o seu rosto na moldura, aproxime-se",
            Liveness3DTextKey.READY_MESSAGE_2 to "e toque em começar.",
            Liveness3DTextKey.READY_BUTTON to "Começar",

            Liveness3DTextKey.RETRY_HEADER to "Vamos tentar novamente?",
            Liveness3DTextKey.RETRY_SUBHEADER to "Siga o exemplo de foto ideal abaixo:",
            Liveness3DTextKey.RETRY_MESSAGE_SMILE to "Expressão Neutra, Sem Sorrir",
            Liveness3DTextKey.RETRY_MESSAGE_LIGHTING to "Evite reflexos e iluminação extrema.",
            Liveness3DTextKey.RETRY_MESSAGE_CONTRAST to "Limpe Sua Câmera",
            Liveness3DTextKey.RETRY_YOUR_PICTURE to "Sua foto",
            Liveness3DTextKey.RETRY_IDEAL_PICTURE to "Foto ideal",
            Liveness3DTextKey.RETRY_BUTTON to "Tentar novamente",

            Liveness3DTextKey.RESULT_UPLOAD_MESSAGE to "Enviando...",
            Liveness3DTextKey.RESULT_SUCCESS_MESSAGE to "Sucesso",

            Liveness3DTextKey.FEEDBACK_CENTER_FACE to "Centralize Seu Rosto",
            Liveness3DTextKey.FEEDBACK_FACE_NOT_FOUND to "Enquadre o Seu Rosto",
            Liveness3DTextKey.FEEDBACK_FACE_NOT_LOOKING_STRAIGHT_AHEAD to "Olhe Para Frente",
            Liveness3DTextKey.FEEDBACK_FACE_NOT_UPRIGHT to "Mantenha a Cabeça Reta",
            Liveness3DTextKey.FEEDBACK_HOLD_STEADY to "Segure Firme",
            Liveness3DTextKey.FEEDBACK_MOVE_PHONE_AWAY to "Afaste-se",
            Liveness3DTextKey.FEEDBACK_MOVE_PHONE_CLOSER to "Aproxime-se",
            Liveness3DTextKey.FEEDBACK_MOVE_PHONE_TO_EYE_LEVEL to "Telefone ao Nível dos Olhos",
            Liveness3DTextKey.FEEDBACK_USE_EVEN_LIGHTING to "Ilumine Seu Rosto Uniformemente",

            Liveness3DTextKey.FEEDBACK_FRAME_YOUR_FACE to "Encaixe Seu Rosto no Espaço Oval",
            Liveness3DTextKey.FEEDBACK_HOLD_STEADY_1 to "Aguente Firme: 1",
            Liveness3DTextKey.FEEDBACK_HOLD_STEADY_2 to "Aguente Firme: 2",
            Liveness3DTextKey.FEEDBACK_HOLD_STEADY_3 to "Aguente Firme: 3",
            Liveness3DTextKey.FEEDBACK_EYES_STRAIGHT_AHEAD to "Olhe Para Frente",
            Liveness3DTextKey.FEEDBACK_REMOVE_DARK_GLASSES to "Tire Seus Óculos de Sol",
            Liveness3DTextKey.FEEDBACK_NEUTRAL_EXPRESSION to "Fique Neutro, Não Sorria",
            Liveness3DTextKey.FEEDBACK_CONDITIONS_TOO_BRIGHT to "Ambiente Muito Iluminado",
            Liveness3DTextKey.FEEDBACK_BRIGHTEN_YOUR_ENVIRONMENT to "Ambiente Muito Escuro",
```
