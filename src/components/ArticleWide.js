import './Article.css';

const ArticleWide = (props) => {
    console.log(props);
    return (
        <div className="articleWide">
            <img className="articleImage" src={props.value.img} />
            <p className="articleName">{props.value.name}</p>
            <p className="articlePrice">${props.value.price.toFixed(2)}</p>
        </div>
    );
}

export default ArticleWide;