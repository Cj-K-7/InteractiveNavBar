import { atom } from "recoil";

export const isDark = atom({
    key: 'themeState',
    default : false,
})

export const isExpand = atom({
    key: 'navWidthState',
    default : false,
})