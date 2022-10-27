# 1. Exemplo de Customização do Liveness3DTheme Android

Para iniciar a customização do Liveness3D você deve importar a classe Liveness3DTheme no arquivo do modulo Liveness3dReactNativeModule

```kt
import br.com.oiti.liveness3d.data.model.Liveness3DTheme
```

Após importar a classe Liveness3DTheme você pode adicionar o tema da seguinte forma;

```kt
val liveness3DUser = new Liveness3DUser(appKey, ENVIRONMENT3D.HML, new Liveness3DTheme.Builder()
        .ovalCustomizationStrokeColor(R.color.brand_color_primary)
        .ovalCustomizationProgressColor1(R.color.brand_color_primary)
        .ovalCustomizationProgressColor2(R.color.white)
        .guidanceCustomizationButtonBackgroundNormalColor(R.color.brand_color_primary)
        .resultScreenCustomizationUploadProgressFillColor(R.color.brand_color_primary)
        .resultScreenCustomizationActivityIndicatorColor(R.color.brand_color_primary)
        .guidanceCustomizationButtonTextNormalColor(R.color.white)
        .resultScreenCustomizationCustomActivityIndicatorAnimation(R.drawable.animated_activity_indicator)
        .resultScreenCustomizationCustomResultAnimationSuccess(R.drawable.animated_success)
        .resultScreenCustomizationCustomResultAnimationUnSuccess(R.drawable.animated_unsuccess)
        .build());
```

# 2. Guia de Customização do Liveness3DTheme Android

> Versão Beta.

Abaixo, estão mapeadas as propriedades para customização do `Liveness3DTheme`.

    //Guidance customization
    val guidanceCustomizationBackgroundColors: Int? = -1,
    val guidanceCustomizationForegroundColor: Int? = Color.parseColor("#417FB2"),
    val guidanceCustomizationHeaderFont: Typeface? = null,
    val guidanceCustomizationSubtextFont: Typeface? = null,

    //Ready Screen
    val guidanceCustomizationReadyScreenHeaderFont: Typeface? = null,
    val guidanceCustomizationReadyScreenHeaderTextColor: Int? = 0,
    val guidanceCustomizationReadyScreenHeaderAttributedString: String? = "",
    val guidanceCustomizationReadyScreenSubtextFont: Typeface? = null,
    val guidanceCustomizationReadyScreenSubtextTextColor: Int? = 0,
    val guidanceCustomizationReadyScreenSubtextAttributedString: String? = "",

    //Retry Screen
    val guidanceCustomizationRetryScreenHeaderFont: Typeface? = null,
    val guidanceCustomizationRetryScreenHeaderTextColor: Int? = 0,
    val guidanceCustomizationRetryScreenHeaderAttributedString: String = "",
    val guidanceCustomizationRetryScreenSubtextFont: Typeface? = null,
    val guidanceCustomizationRetryScreenSubtextTextColor: Int? = 0,
    val guidanceCustomizationRetryScreenSubtextAttributedString: String? = "",
    val guidanceCustomizationButtonFont: Typeface? = null,
    val guidanceCustomizationButtonTextNormalColor: Int? = -1,
    val guidanceCustomizationButtonBackgroundNormalColor: Int? = Color.parseColor("#417FB2"),
    val guidanceCustomizationButtonTextHighlightColor: Int? = -1,
    val guidanceCustomizationButtonBackgroundHighlightColor: Int? = Color.parseColor("#396E99"),
    val guidanceCustomizationButtonTextDisabledColor: Int? = -1,
    val guidanceCustomizationButtonBackgroundDisabledColor: Int? = Color.parseColor("#66417FB2"),
    val guidanceCustomizationButtonBorderColor: Int? = 0,
    val guidanceCustomizationButtonBorderWidth: Int? = -1,
    val guidanceCustomizationButtonCornerRadius: Int? = -1,
    val guidanceCustomizationReadyScreenOvalFillColor: Int? = Color.parseColor("#00FFFFFF"),
    val guidanceCustomizationReadyScreenTextBackgroundColor: Int? = -1,
    val guidanceCustomizationReadyScreenTextBackgroundCornerRadius: Int? = -1,
    val guidanceCustomizationRetryScreenImageBorderColor: Int? = Color.parseColor("#417FB2"),
    val guidanceCustomizationRetryScreenImageBorderWidth: Int? = -1,
    val guidanceCustomizationRetryScreenImageCornerRadius: Int? = -1,
    val guidanceCustomizationRetryScreenOvalStrokeColor: Int? = -1,

    //Result Screen Customization
    val resultScreenCustomizationAnimationRelativeScale: Float = 1.0F,
    val resultScreenCustomizationForegroundColor: Int = Color.parseColor("#417FB2"),
    val resultScreenCustomizationBackgroundColors: Int = -1,
    val resultScreenCustomizationActivityIndicatorColor: Int = Color.parseColor("#417FB2"),
    @DrawableRes
    val resultScreenCustomizationCustomActivityIndicatorImage: Int = 0,
    val resultScreenCustomizationCustomActivityIndicatorRotationInterval: Int = 1000,
    val resultScreenCustomizationCustomActivityIndicatorAnimation: Int = 0,
    val resultScreenCustomizationShowUploadProgressBar: Boolean = true,
    val resultScreenCustomizationUploadProgressFillColor: Int = Color.parseColor("#417FB2"),
    val resultScreenCustomizationUploadProgressTrackColor: Int = Color.parseColor("#66000000"),
    val resultScreenCustomizationResultAnimationBackgroundColor: Int = Color.parseColor("#417FB2"),
    val resultScreenCustomizationResultAnimationForegroundColor: Int = -1,
    @DrawableRes
    val resultScreenCustomizationResultAnimationSuccessBackgroundImage: Int = 0,
    @DrawableRes
    val resultScreenCustomizationResultAnimationUnSuccessBackgroundImage: Int = 0,
    @DrawableRes
    val resultScreenCustomizationCustomResultAnimationSuccess: Int = 0,
    @DrawableRes
    val resultScreenCustomizationCustomResultAnimationUnSuccess: Int = 0,
    @DrawableRes
    val resultScreenCustomizationCustomStaticResultAnimationSuccess: Int = 0,
    @DrawableRes
    val resultScreenCustomizationCustomStaticResultAnimationUnSuccess: Int = 0,
    val resultScreenCustomizationMessageFont: Typeface? = null,

    //Oval Customization
    val ovalCustomizationStrokeWidth: Int? = -1,
    val ovalCustomizationStrokeColor: Int? = Color.parseColor("#417FB2"),
    val ovalCustomizationProgressStrokeWidth: Int? = -1,
    val ovalCustomizationProgressColor1: Int? = Color.parseColor("#B3417FB2"),
    val ovalCustomizationProgressColor2: Int? = Color.parseColor("#B3417FB2"),
    val ovalCustomizationProgressRadialOffset: Int? = -1,

    //Frame Customization
    val frameCustomizationBorderWidth: Int? = -1,
    val frameCustomizationCornerRadius: Int? = -1,
    val frameCustomizationBorderColor: Int? = Color.parseColor("#417FB2"),
    val frameCustomizationBackgroundColor: Int? = -1,
    val frameCustomizationElevation: Int? = 0,

    //Overlay Customization
    val overlayCustomizationBackgroundColor: Int? = -1,
    @DrawableRes
    val overlayCustomizationBrandingImage: Int? = 0,
    val overlayCustomizationShowBrandingImage: Boolean = false,

    //Feedback Customization
    val feedbackCustomizationCornerRadius: Int? = -1,
    val feedbackCustomizationBackgroundColors: Int? = Color.parseColor("#417FB2"),
    val feedbackCustomizationTextColor: Int? = -1,
    val feedbackCustomizationTextFont: Typeface? = null,
    val feedbackCustomizationEnablePulsatingText: Boolean = true,
    val feedbackCustomizationElevation: Int? = 10,

    //Cancel Button Customization
    @DrawableRes
    val cancelButtonCustomizationCustomImage: Int? = R.drawable.cancel_button,
    val cancelButtonCustomizationLocation: Liveness3DButtonLocation? = Liveness3DButtonLocation.TOP_LEFT,

    //Exit Animation Style
    val exitAnimationStyle: Liveness3DExitAnimationStyle? = Liveness3DExitAnimationStyle.RIPPLE_IN

    //Result Screen Message
    val resultScreenOverrideSuccessMessage : String = "Tudo certo!"
