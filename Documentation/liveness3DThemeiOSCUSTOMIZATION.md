# 1. Exemplo de Customização do Liveness3DTheme iOS

Para iniciar a customização do Liveness3D você deve adicionar a classe Liveness3dTheme que existe dentro do POD FaceCaptcha da seguinte forma;

```swift
var theme = Liveness3DTheme(Liveness3DThemeType.light)
            theme.ovarCustomizationStrokeColor = UIColor(red: 0.9137, green: 0.3216, blue: 0.149, alpha: 1.0)
            theme.ovarCustomizationProgressColor1 = UIColor(red: 0.9137, green: 0.3216, blue: 0.149, alpha: 1.0)
            theme.ovarCustomizationProgressColor2 = UIColor(red: 0.9137, green: 0.3216, blue: 0.149, alpha: 1.0)
            theme.guidanceCustomizationButtonBackgroundNormalColor = UIColor(red: 0.9137, green: 0.3216, blue: 0.149, alpha: 1.0)
            theme.guidanceCustomizationButtonBackgroundHighlightColor = UIColor(red: 0.9137, green: 0.3216, blue: 0.149, alpha: 1.0)
            theme.guidanceCustomizationButtonBackgroundDisabledColor = UIColor(red: 0.9137, green: 0.3216, blue: 0.149, alpha: 0.5)
```

Após isso você deve inserir os parametros na ViewControler do Liveness3D;

```swift
let vc = Liveness3DViewController(
                    endpoint: "",
                    liveness3DUser: Liveness3DUser(
                                          appKey: APP_KEY,
                                          environment: .HML,
                                          defaultTheme: theme, //tema default
                                          lowLightTheme: theme, //tema com baixas luzes
                                          texts: Liveness3DStrings.values
                                      ),
                    debugOn: true,
                    customInstructionView: instructionView, //aqui é chamado a view de instruções
                    customPermissionView: permissionView    // aqui é chamado a view de permissões
                  )
```

# 2. Guia de Customização do Liveness3DTheme iOS

A customização do fluxo de prova de vida, dar-se por meio da utilização da `Liveness3DTheme`. Essa classe na sua construção recebe o template padrão, podendo ser DarkTheme ou LightTheme.<br>
Abaixo, estão mapeadas as propriedades para customização do `Liveness3DTheme`.

| **Atributo**                                                     | **Tipo**           | **Valor Padrão**                                         | **Descrição**                                                                      |
| :--------------------------------------------------------------- | :----------------- | :------------------------------------------------------- | :--------------------------------------------------------------------------------- |
| guidanceCustomizationBackgroundColors                            | [UIColor]          | Dark: #000000<br>Light: #FFFFFF                          | Define a cor do background (cor do plano de fundo) do fluxo de Prova de vida       |
| guidanceCustomizationForegroundColor                             | UIColor            | Dark: #000000<br>Light: #FFFFFF                          | Define a cor do foreground (cor do primeiro plano)                                 |
| guidanceCustomizationHeaderFont                                  | UIFont             | Ubuntu-Bold                                              | Define a fonte do título da primeira tela do fluxo de prova de vida                |
| guidanceCustomizationSubtextFont                                 | UIFont             | Inter-Regular                                            | Define a fonte do subtítulo da primeira tela do fluxo de prova de vida             |
| guidanceCustomizationReadyScreenHeaderFont                       | UIFont             | Ubuntu-Bold                                              |                                                                                    |
| guidanceCustomizationReadyScreenHeaderTextColor                  | UIColor            |                                                          | Define a cor do título da primeira tela do fluxo de prova de vida                  |
| guidanceCustomizationReadyScreenHeaderAttributedString           | NSAttributedString | nil                                                      |                                                                                    |
| guidanceCustomizationReadyScreenSubtextFont                      | UIFont             | Inter-Regular                                            | Define a fonte do subtítulo da tela de início de captura do fluxo de prova de vida |
| guidanceCustomizationReadyScreenSubtextTextColor                 | UIColor            | Dark: #FFFFFF<br>Light: #000000                          | Define a cor subtítulo da tela de início de captura do fluxo de prova de vida      |
| guidanceCustomizationReadyScreenSubtextAttributedString          | NSAttributedString | nil                                                      |                                                                                    |
| guidanceCustomizationRetryScreenHeaderFont                       | UIFont             | Ubuntu-Bold                                              | Define a cor do foreground                                                         |
| guidanceCustomizationRetryScreenHeaderTextColor                  | UIColor            | Dark: #FFFFFF<br>Light: #1E1E1E                          | Define a cor do foreground                                                         |
| guidanceCustomizationRetryScreenHeaderAttributedString           | NSAttributedString | nil                                                      |                                                                                    |
| guidanceCustomizationRetryScreenSubtextFont                      | UIFont             | Inter-Regular                                            | Define a cor do foreground                                                         |
| guidanceCustomizationRetryScreenSubtextTextColor                 | UIColor            | Dark: #FFFFFF<br>Light: #666666                          | Define a cor do foreground                                                         |
| guidanceCustomizationRetryScreenSubtextAttributedString          | NSAttributedString | nil                                                      | Define a cor do foreground                                                         |
| guidanceCustomizationButtonFont                                  | UIFont             | Inter-Bold                                               | Define a cor do foreground                                                         |
| guidanceCustomizationButtonTextNormalColor                       | UIColor            | Dark: #000000<br>Light: #FFFFFF                          | Define a cor do foreground                                                         |
| guidanceCustomizationButtonBackgroundNormalColor                 | UIColor            | #05D758                                                  | Define a cor do foreground                                                         |
| guidanceCustomizationButtonTextHighlightColor                    | UIColor            | Dark: #FFFFFF<br>Light: #000000                          | Define a cor do foreground                                                         |
| guidanceCustomizationButtonBackgroundHighlightColor              | UIColor            | Dark: #000000<br>Light: #FFFFFF                          | Define a cor do foreground                                                         |
| guidanceCustomizationButtonTextDisabledColor                     | UIColor            | Dark: #000000<br>Light: #FFFFFF                          | Define a cor do foreground                                                         |
| guidanceCustomizationButtonBackgroundDisabledColor               | UIColor            | #b4fdd1                                                  | Define a cor do foreground                                                         |
| guidanceCustomizationButtonBorderColor                           | UIColor            | nil                                                      | Define a cor do foreground                                                         |
| guidanceCustomizationButtonBorderWidth                           | Int32              | nil                                                      | Define a espessura da borda do botão                                               |
| guidanceCustomizationButtonCornerRadius                          | Int32              | nil                                                      | Define a cor do foreground                                                         |
| guidanceCustomizationReadyScreenOvarFillColor                    | UIColor            | #05D758                                                  | Define a cor do foreground                                                         |
| guidanceCustomizationReadyScreenTextBackgroundColor              | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| guidanceCustomizationReadyScreenTextBackgroundCornerRadius       | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| guidanceCustomizationRetryScreenImageBorderColor                 | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| guidanceCustomizationRetryScreenImageBorderWidth                 | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| guidanceCustomizationRetryScreenImageCornerRadius                | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| guidanceCustomizationRetryScreenOvarStrokeColor                  | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| resultScreenCustomizationAnimationRelativeScale                  | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| resultScreenCustomizationForegroundColor                         | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| resultScreenCustomizationBackgroundColors                        | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| resultScreenCustomizationActivityIndicatorColor                  | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| resultScreenCustomizationCustomActivityIndicatorImage            | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| resultScreenCustomizationCustomActivityIndicatorRotationIntervar | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| resultScreenCustomizationCustomActivityIndicatorAnimation        | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| resultScreenCustomizationShowUploadProgressBar                   | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| resultScreenCustomizationUploadProgressFillColor                 | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| resultScreenCustomizationUploadProgressTrackColor                | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| resultScreenCustomizationResultAnimationBackgroundColor          | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| resultScreenCustomizationResultAnimationForegroundColor          | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| resultScreenCustomizationResultAnimationSuccessBackgroundImage   | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| resultScreenCustomizationResultAnimationUnSuccessBackgroundImage | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| resultScreenCustomizationCustomResultAnimationSuccess            | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| resultScreenCustomizationCustomResultAnimationUnSuccess          | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| resultScreenCustomizationCustomStaticResultAnimationSuccess      | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| resultScreenCustomizationCustomStaticResultAnimationUnSuccess    | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| resultScreenCustomizationMessageFont                             | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| ovarCustomizationStrokeWidth                                     | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| ovarCustomizationStrokeColor                                     | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| ovarCustomizationProgressStrokeWidth                             | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| ovarCustomizationProgressColor1                                  | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| ovarCustomizationProgressColor2                                  | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| ovarCustomizationProgressRadialOffset                            | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| frameCustomizationBorderWidth                                    | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| frameCustomizationCornerRadius                                   | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| frameCustomizationBorderColor                                    | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| frameCustomizationBackgroundColor                                | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| frameCustomizationElevation                                      | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| overlayCustomizationBackgroundColor                              | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| overlayCustomizationBrandingImage                                | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| overlayCustomizationShowBrandingImage                            | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| feedbackCustomizationCornerRadius                                | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| feedbackCustomizationBackgroundColors                            | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| feedbackCustomizationTextColor                                   | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| feedbackCustomizationTextFont                                    | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| feedbackCustomizationEnablePulsatingText                         | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| feedbackCustomizationElevation                                   | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| cancelButtonCustomizationCustomImage                             | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| cancelButtonCustomizationLocation                                | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
| resultScreenOverrideSuccessMessage                               | UIColor            | UIColor(red: 1.00, green: 1.00, blue: 1.00, alpha: 1.00) | Define a cor do foreground                                                         |
