# 1. Guia de Implementação de View Customizada do Liveness 3D

> Versão Beta.

A Interface do Liveness 3D é altamente customizável e permite alterar cores, fontes, bordas, ícones, textos, fundos e botões.

**São elementos customizáveis:** textos, cores, imagens, fontes, bordas e linhas.

**São telas customizáveis:** tela principal, de identificação e de orientações para usuários; tela de preparação, de progresso e de sucesso.

**Não são customizáveis**: propriedades de segurança e direitos autorais, desvios de layout significativos, dimensionamento das fontes.

## 1. Elementos Customizáveis

![elementos_customizaveis](Images/liveness3d_secao_elementos_customisados.png)

**Botão de cancelamento:** imagem e localização.

**Todas as telas Liveness 3D e Tela de Fundo:** cores: borda, largura, raio, fundo; sombra.

**Marca do cliente:** logotipo de marca personalizada exibido na interface.

**Tela de execução do liveness:** cores: borda, largura, raio, fundo, texto; fonte do texto; sombra.

**Barra de Texto:** cores: borda, largura, raio, fundo, texto; fonte de texto; sombra.

**Bordas da captura da face:** cor, largura, raios; estilo de animação.

**Quadro de captura e identificação:** cores: borda, largura, raio, fundo.

**Botões de ação:** cor da borda, largura, raio, fonte, fundo; fonte de texto.

## 2. Customizações Gerais

![Customizacoes_gerais](Images/liveness3d_secao_customizacoes_gerais.png)

**1 Botão Voltar**

- cancelButtonCustomizationCustomImage
- cancelButtonCustomizationLocation

**2 Barra de texto e Frame geral**

- feedbackCustomizationBackgroundColor
- feedbackCustomizationCornerRadius
- feedbackCustomizationShadow
- feedbackCustomizationTextColor
- feedbackCustomizationTextFont

**3 Borda da captura da face**

- ovalCustomizationStrokeColor
- ovalCustomizationStrokeWidth
- ovalCustomizationProgressColor1
- ovalCustomizationProgressColor2
- ovalCustomizationProgressStrokeWidth
- ovalCustomizationProgressRadialOffset

### 2.1 Outras customizações

**Cores do Texto**

- guidanceCustomizationForegroundColor

**Botões**

- guidanceCustomizationButtonFont
- guidanceCustomizationButtonBorderWidth
- guidanceCustomizationButtonBorderColor
- guidanceCustomizationButtonCornerRadius
- guidanceCustomizationButtonTextNormalColor
- guidanceCustomizationButtonTextHighlightColor
- guidanceCustomizationButtonTextDisabledColor
- guidanceCustomizationButtonBackgroundNormalColor
- guidanceCustomizationButtonBackgroundHighlightColor
- guidanceCustomizationButtonBackgroundDisabledColor

**Customização de orientações**

- guidanceCustomizationReadyScreenTextBackgroundColor
- guidanceCustomizationReadyScreenTextBackgroundCornerRadius

> As customizações de orientações são aplicáveis apenas para dispositivos muito pequenos e com espaço de tela reduzido.

### 2.2 Outras customizações relevantes:

**Customize o estilo da appearing:**

- EntryAnimationCustomization: EntryAnimationStyle

**Customize o estilo da disappearing:**

- ExitAnimationCustomization: ExitAnimationStyle

## 3. Customizações da Tela de Execução do Liveness 3D

As **customizações da tela de execução do Liveness 3D** devem respeitar as propriedades customizáveis vistas acima.

## 4. Customização da Tela de Nova Tentativa (Retry Screen)

Nesta tela, são fornecidas orientações que guiam o usuário a realizar uma nova Sessão Liveness 3D.
Apresenta boa iluminação e pose, permitindo que o usuário compreenda as correções necessárias.

![customizacao_retry](Images/liveness3d_secao_retry.png)

### 4.1 Tela de Nova Tentativa

**1 Orientação Principal**

- guidanceCustomizationHeaderFont

**2 Orientação da Face**

- guidanceCustomizationRetryScreenIdealFaceTecImage
- guidanceCustomizationRetryScreenSlideshowImages
- guidanceCustomizationRetryScreenSlideshowInterval
- guidanceCustomizationEnableRetryScreenSlideshowShuffle
- guidanceCustomizationRetryScreenImageBorderColor
- guidanceCustomizationRetryScreenImageBorderWidth
- guidanceCustomizationRetryScreenImageCornerRadius
- guidanceCustomizationRetryScreenOvalStrokerColor

**3 Orientações secundárias**

- guidanceCustomizationSubtextFont

### 4.2 Tela de Nova Tentativa - Adicionais

**1 Orientação Principal - Adicionais**

- guidanceCustomizationRetryScreenHeaderFont
- guidanceCustomizationRetryScreenHeaderTextColor
- guidanceCustomizationRetryScreenHeaderAttributedString

**2 Orientação Secundária - Adicionais**

- guidanceCustomizationRetryScreenSubtextFont
- guidanceCustomizationRetryScreenSubtextTextColor
- guidanceCustomizationRetryScreenSubtextAttributedString
