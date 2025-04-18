import { SVGAttributes } from 'react';
import Logo from '../front-end/images/logo.png'


export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <img src={Logo} alt="Logo" />
    );
}
