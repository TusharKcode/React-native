import { Image, useColorScheme } from "react-native"
import LightLogo from '../assets/img/black_logo.png'
import DarkLogo from '../assets/img/color_logo.png'

const ThemeLogo = ({ ...props }) => {
    const colorScheme = useColorScheme()
    const logo = colorScheme === 'light' ? DarkLogo : LightLogo
    return(
        <Image source={logo} { ...props } />
    )
}

export default ThemeLogo