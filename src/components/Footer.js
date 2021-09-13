import './Footer.css'

import FooterArticle from './FooterArticle'

const Footer = () => {
    return (
        <footer>
            <FooterArticle value={{ title: "Info", content: "Carefully curated online design store. Featuring\nsimple, beautiful and thoughtfully designed products\nfor everyday use." }}></FooterArticle>

            <FooterArticle value={{ title: "Get in touch", content: "<a href='mailto:hello@thedsgnshop.com'>mailto:hello@thedsgnshop.com\nLos Angeles, CA" }}></FooterArticle>

        </footer>
    );
}

export default Footer;