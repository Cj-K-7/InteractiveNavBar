import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        BgColor : string;
        textColor : string;
        activeColor : string;
        hoverColor  :string;
        SearchBgColor : string;
        ModalBgColor : string;
        ModalTextColor : string;
        ModalShadow : string;
    }
}