// import RalewayWoff2 from './fonts/Raleway-Regular.woff2';
// import Asap from "../assets/fonts/Asap-Regular.ttf"
import Font from "../assets/fonts/almoni/almoni-dl-aaa-regular.otf"
import { FONT_FAMILY } from "./config"

console.log("Font", Font)

export const regularFont = {
  fontFamily: FONT_FAMILY,
  fontStyle: "regular",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local(${FONT_FAMILY}),
    local('${FONT_FAMILY}-Regular'),
    url(${Font}) format('woff2')
    `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
}

// url(${Font}) format('woff2')
