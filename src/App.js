import './App.css';

import Header from './components/Header';
import Article from './components/Article';
import ArticleWide from './components/ArticleWide';
import Footer from './components/Footer';
import FooterArticle from './components/FooterArticle';

const shopData = [
    { name: "Vifa Copenhagen 2.0 Loudspeaker", price: 799.00, img: "/img/01-Home.png" },
    { name: "Bang & Olufsen Wireless Headphones", price: 174.00, img: "/img/29-Lifestyle_b-o.png" },
    { name: "Poketo: Creative Spaces", price: 25.00, img: "/img/01-Books.png" },
    { name: "Ucon Acrobatics Hajo Backpack", price: 79.00, img: "/img/02-Lifestyle.png" },
    { name: "Summer Print by Bratislav Milenkovic", price: 27.00, img: "/img/46-home_bm.png" },
    { name: "Palo Modular Corner Sofa by Hem", price: 3699.00, img: "/img/45-Home_hem.png" }
]

function App() {
    return (
        <div className="App">
            <Header></Header>

            <div className="ArticleList">
                <Article value={shopData[0]}></Article>
                <Article value={shopData[1]}></Article>
                <Article value={shopData[2]}></Article>
                <Article value={shopData[3]}></Article>
                <ArticleWide value={shopData[4]}></ArticleWide>
                <ArticleWide value={shopData[5]}></ArticleWide>
            </div>

            <Footer>
                <FooterArticle></FooterArticle>
                <FooterArticle></FooterArticle>
                <FooterArticle></FooterArticle>
                <FooterArticle></FooterArticle>
            </Footer>

        </div>
    );
}

export default App;
