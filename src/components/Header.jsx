//Import components
import HeaderMenus from "./HeaderMenus";
import { metadata } from "@app/layout";

//Header
const Header = () => {
    return <HeaderMenus title={metadata.title} />;
};

export default Header;
