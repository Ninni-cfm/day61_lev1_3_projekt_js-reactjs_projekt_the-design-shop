import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <a href="https://thedsgnshop.com/" className="headerLogo" >THE DESIGN SHOP</a>

            <ul className="headerNavigation">
                <li><a href="">Featured</a></li>
                <li><a href="">Lifestyle</a></li>
                <li><a href="">Books</a></li>
                <li><a href="">Digital</a></li>
                <li className="headerNavigationDivider">|</li>
                <li><a href="">Weekly Picks</a></li>
                <li><a href="https://thedsgnblog.com/">The Design Blog</a></li>
            </ul>
        </header>
    );
}

export default Header;