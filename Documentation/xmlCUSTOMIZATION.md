# 1. Como fazer a estilização do XML?

Para estilizar a SDK da Oiti você precisa realizar algumas alterações nativa dentro das pastas do <mark style="color: white; background-color:#333">/ios</mark> e <mark style="color: white; background-color:#333">/android</mark> .

## 1.1 Como personalizar os textos no Android?

Para personalizar os valores das strings(textos), você deve criar ou alterar o arquivo strings.xml dentro da sua pasta nativa <mark style="color: white; background-color:#333">values</mark> do Android.

```xml
<resources>
    <string name="app_name">YourAppNAme</string>

    <!--  Liveness Layout  -->
    <string name="ft_start">Começar</string>
    <string name="ft_camera_permission_request">Para usar essa funcionalidade você precisa permitir o acesso à câmera.</string>
    <string name="ft_camera_permission_denied">Não é possível usar essa funcionalidade sem as permissões solicitadas</string>
    <string name="ft_got_it">Entendi</string>
    <string name="ft_initial_text">Posicione seu rosto dentro da marcação e toque em começar.</string>
    <string name="ft_cancel">Cancelar</string>
    <string name="ft_is_picture_ok">Sua foto ficou boa?</string>
    <string name="ft_no_redo">Não, refazer</string>
    <string name="ft_try_again">Tentar novamente</string>
    <string name="ft_yes_continue">Sim, continuar</string>
    <string name="ft_facial_recognition">Reconhecimento facial</string>
    <string name="recognizing">Reconhecendo…</string>

    <!--  Liveness Instructions  -->
    <string name="ft_instructions_title">Reconhecimento facial</string>
    <string name="ft_instructions_subtitle">Isso garante que você é você mesmo.</string>
    <string name="ft_instructions_lighting">Escolha um ambiente bem iluminado.</string>
    <string name="ft_instructions_accessories">Não use acessórios como óculos, boné, máscara e afins.</string>

    <!--  Liveness Feedback  -->
    <string name="ft_verification_error">Não foi possível concluir sua verificação.</string>
    <string name="bt_continue">Continuar</string>

    <!-- Result -->
    <string name="back_button_result">É necessário adicionar o botão voltar no Layout!</string>
    <string name="continue_button_result">É necessário adicionar o botão continuar no Layout!</string>

    <!-- Facetec -->
    <string name="FaceTec_accessibility_cancel_button">Cancelar</string>

    <string name="FaceTec_feedback_center_face">Centralize Seu Rosto</string>
    <string name="FaceTec_feedback_face_not_found">Enquadre o Seu Rosto</string>
    <string name="FaceTec_feedback_move_phone_away">Afaste-se</string>
    <string name="FaceTec_feedback_move_away_web">Afaste-se</string>
    <string name="FaceTec_feedback_move_phone_closer">Aproxime-se</string>
    <string name="FaceTec_feedback_move_phone_to_eye_level">Telefone ao Nível dos Olhos</string>
    <string name="FaceTec_feedback_move_to_eye_level_web">Olhe Para a Câmera</string>
    <string name="FaceTec_feedback_face_not_looking_straight_ahead">Olhe Para Frente</string>
    <string name="FaceTec_feedback_face_not_upright">Mantenha a Cabeça Reta</string>
    <string name="FaceTec_feedback_face_not_upright_mobile">Mantenha a Cabeça Reta</string>
    <string name="FaceTec_feedback_hold_steady">Segure Firme</string>
    <string name="FaceTec_feedback_move_web_closer">Aproxime-se</string>
    <string name="FaceTec_feedback_move_web_even_closer">Mais Próximo</string>
    <string name="FaceTec_feedback_use_even_lighting">Ilumine Seu Rosto Uniformemente</string>

    <string name="FaceTec_instructions_header_ready_1">Prepare-se para seu</string>
    <string name="FaceTec_instructions_header_ready_2">reconhecimento facial.</string>
    <string name="FaceTec_instructions_message_ready_1">Posicione o seu rosto na moldura, aproxime-se</string>
    <string name="FaceTec_instructions_message_ready_2">e toque em começar.</string>

    <string name="FaceTec_action_im_ready">Começar</string>
    <string name="FaceTec_presession_frame_your_face">Encaixe Seu Rosto no Espaço Oval</string>
    <string name="FaceTec_presession_look_straight_ahead">Olhe Para Frente </string>
    <string name="FaceTec_presession_hold_steady3">Aguente Firme: 3</string>
    <string name="FaceTec_presession_hold_steady2">Aguente Firme: 2</string>
    <string name="FaceTec_presession_hold_steady1">Aguente Firme: 1</string>
    <string name="FaceTec_presession_eyes_straight_ahead">Olhe Para Frente</string>
    <string name="FaceTec_presession_remove_dark_glasses">Tire Seus Óculos de Sol</string>
    <string name="FaceTec_presession_neutral_expression">Fique Neutro, Não Sorria</string>
    <string name="FaceTec_presession_conditions_too_bright">Ambiente Muito Iluminado</string>
    <string name="FaceTec_presession_brighten_your_environment">Ambiente Muito Escuro</string>

    <string name="FaceTec_result_facescan_upload_message">Enviando...</string>
    <string name="FaceTec_result_idscan_upload_message">Enviando...</string>

    <string name="FaceTec_retry_header">Vamos tentar novamente?</string>
    <string name="FaceTec_retry_subheader_message">Siga o exemplo de foto ideal abaixo:</string>
    <string name="FaceTec_retry_your_image_label">Sua foto</string>
    <string name="FaceTec_retry_ideal_image_label">Foto ideal</string>
    <string name="FaceTec_retry_instruction_message_1">Expressão Neutra, Sem Sorrir</string>
    <string name="FaceTec_retry_instruction_message_2">Evite reflexos e iluminação extrema.</string>
    <string name="FaceTec_retry_instruction_message_3">Limpe Sua Câmera</string>
    <string name="FaceTec_action_try_again">Tentar novamente</string>

    <string name="FaceTec_camera_feed_issue_header"><b>Problemas Para Criptografar o Conteúdo da Câmera</b></string>
    <string name="FaceTec_camera_feed_issue_subheader_message">Esse sistema não pode ser verificado: </string>
    <string name="FaceTec_camera_feed_issue_table_header_1">Possível Erro </string>
    <string name="FaceTec_camera_feed_issue_table_header_2">Corrigir </string>
    <string name="FaceTec_camera_feed_issue_table_row_1_cell_1_firefox_permissions_error">Permissões da Câmera Não Lembrada Pelo Firefox. </string>
    <string name="FaceTec_camera_feed_issue_table_row_1_cell_2_firefox_permissions_error">Permissões da Câmera Verificadas. </string>
    <string name="FaceTec_camera_feed_issue_table_row_1_cell_1">Câmera em uso por outro aplicativo. </string>
    <string name="FaceTec_camera_feed_issue_table_row_1_cell_2">Feche outros aplicativos. </string>
    <string name="FaceTec_camera_feed_issue_table_row_2_cell_1">Um aplicativo de terceiros está modificando o vídeo. </string>
    <string name="FaceTec_camera_feed_issue_table_row_2_cell_2">Feche/Desinstale o outro aplicativo. </string>
    <string name="FaceTec_camera_feed_issue_table_row_3_cell_1">O dispositivo não é seguro. </string>
    <string name="FaceTec_camera_feed_issue_table_row_3_cell_2">Use um dispositivo diferente. </string>
    <string name="FaceTec_camera_feed_issue_subtable_message">Este aplicativo bloqueia configurações suspeitas de Webcam. <a href='https://livenesscheckhelp.com/' target='_blank' style='text-decoration:underline;'>Saiba Mais</a>. </string>
    <string name="FaceTec_camera_feed_issue_action">Tentar novamente </string>
    <string name="FaceTec_camera_feed_issue_action_firefox_permissions_error">OK </string>

    <string name="FaceTec_camera_permission_header">Ativar Câmera </string>
    <string name="FaceTec_camera_permission_message">O acesso à câmera está desativado. Toque abaixo para ativar em ajustes. </string>
    <string name="FaceTec_action_ok">OK</string>

    <string name="FaceTec_enter_fullscreen_header">Selfie Modo Tela Cheia </string>
    <string name="FaceTec_enter_fullscreen_message">Antes de começar, clique no botão abaixo para abrir o modo tela cheia </string>
    <string name="FaceTec_enter_fullscreen_action">Abrir Tela Cheia </string>

    <string name="FaceTec_initializing_camera">Iniciando a Câmera... </string>
    <string name="FaceTec_initializing_camera_still_loading">Criptografando o Conteúdo da Câmera... </string>

    <string name="FaceTec_idscan_type_selection_header">Tipo do Documento </string>
    <string name="FaceTec_action_select_id_card">Documento Com Foto </string>
    <string name="FaceTec_action_select_passport">PASSAPORTE </string>
    <string name="FaceTec_idscan_capture_id_card_front_instruction_message">Mostre a Frente do Documento Com Foto </string>
    <string name="FaceTec_idscan_capture_id_card_back_instruction_message">Mostre o Verso do Documento </string>
    <string name="FaceTec_idscan_capture_passport_instruction_message">Mostre a Página da Foto no Passaporte </string>
    <string name="FaceTec_action_take_photo">Tirar Foto</string>
    <string name="FaceTec_idscan_review_id_card_front_instruction_message">Confirme Se a Foto Está Clara e Legível </string>
    <string name="FaceTec_idscan_review_id_card_back_instruction_message">Confirme Se Está Claro e Legível </string>
    <string name="FaceTec_idscan_review_passport_instruction_message">Confirme Se a Foto Está Clara e Legível </string>
    <string name="FaceTec_action_accept_photo">Aceitar</string>
    <string name="FaceTec_action_retake_photo">Recapturar</string>

    <string name="FaceTec_result_idscan_unsuccess_message">Foto do Documento Nāo Corresponde com Rosto do Usuário </string>



    <!-- Common -->
    <string name="check_permission_title">Permissões da câmera desativadas.</string>
    <string name="check_permission_description">Verifique as configurações de permissão.</string>
    <string name="bt_ok">Ok</string>
    <string name="bt_check">Verificar</string>
</resources>
```

## 1.2 Como personalizar as cores no Android?

Para personalizar as cores, você deve criar ou alterar o arquivo colors.xml dentro da sua pasta nativa <mark style="color: white; background-color:#333">values</mark> do Android.

```xml
<resources>
    <color name="oiti_green">#4bb75f</color>
    <color name="oiti_green_30">#4d4bb75f</color>
    <color name="dark_text">#363636</color>
    <color name="doc_green">#a5cd38</color>

    <color name="brand_color_primary_pure">#A5CD39</color>
    <color name="brand_color_primary_light">#DDE28A</color>
    <color name="brand_color_primary_medium">#B7C72C</color>
    <color name="brand_color_primary_dark">#93A229</color>

    <color name="brand_color_secondary_pure">#3CB994</color>
    <color name="brand_color_secondary_light">#58D0AC</color>
    <color name="brand_color_secondary_medium">#36A684</color>
    <color name="brand_color_secondary_dark">#348D73</color>

    <color name="highlight_color_pure">#6443E1</color>
    <color name="highlight_color_light">#8666FF</color>
    <color name="highlight_color_medium">#5338BA</color>
    <color name="highlight_color_dark">#422C94</color>

    <color name="neutral_color_low_pure">#1E1E1E</color>
    <color name="neutral_color_low_light">#A3A3A3</color>
    <color name="neutral_color_low_medium">#666666</color>
    <color name="neutral_color_low_dark">#52575D</color>

    <color name="neutral_color_high_pure">#FFFFFF</color>
    <color name="neutral_color_high_pure_24">#3DFFFFFF</color>
    <color name="neutral_color_high_light">#F5F5F5</color>
    <color name="neutral_color_high_medium">#E0E0E0</color>
    <color name="neutral_color_high_dark">#CCCCCC</color>

    <color name="feedback_color_warning_pure">#DD0101</color>
    <color name="feedback_color_warning_light">#F7638B</color>
    <color name="feedback_color_warning_medium">#C40135</color>
    <color name="feedback_color_warning_dark">#910127</color>

    <color name="feedback_color_helper_pure">#0070D8</color>
    <color name="feedback_color_helper_light">#4DA9FF</color>
    <color name="feedback_color_helper_medium">#005DB2</color>
    <color name="feedback_color_helper_dark">#00417D</color>

    <color name="feedback_color_success_pure">#05D758</color>
    <color name="feedback_color_success_light">#40C957</color>
    <color name="feedback_color_success_medium">#166323</color>
    <color name="feedback_color_success_dark">#0E4217</color>

    <color name="instructions_gradient_start">#1648CD</color>
    <color name="instructions_gradient_end">#1648CD</color>

    <color name="white">#FFFFFF</color>
    <color name="background">#1E1E1E</color>
    <color name="brand_color_primary">#05D758</color>
    <color name="brand_color_secondary">#1648CD</color>
    <color name="black">#000000</color>
</resources>
```

## 1.3 Como personalizar as dimensões no Android?

Para personalizar as cores, você deve criar ou alterar o arquivo dimens.xml dentro da sua pasta nativa <mark style="color: white; background-color:#333">values</mark> do Android.

```xml
<resources>

    <dimen name="font_size_xxxs">12sp</dimen>
    <dimen name="font_size_xxs">14sp</dimen>
    <dimen name="font_size_xs">16sp</dimen>
    <dimen name="font_size_sm">20sp</dimen>
    <dimen name="font_size_md">24sp</dimen>
    <dimen name="font_size_lg">32sp</dimen>
    <dimen name="font_size_xl">40sp</dimen>
    <dimen name="font_size_xxl">48sp</dimen>
    <dimen name="font_size_xxxl">64sp</dimen>
    <dimen name="font_size_display">80sp</dimen>
    <dimen name="font_size_giant">96sp</dimen>

    <dimen name="border_radius_none">0dp</dimen>
    <dimen name="border_radius_sm">8dp</dimen>
    <dimen name="border_radius_md">16dp</dimen>
    <dimen name="border_radius_lg">24dp</dimen>

    <dimen name="border_width_none">0dp</dimen>
    <dimen name="border_width_hairline">1dp</dimen>
    <dimen name="border_width_thin">2dp</dimen>
    <dimen name="border_width_thick">4dp</dimen>
    <dimen name="border_width_heavy">8dp</dimen>

</resources>

```
