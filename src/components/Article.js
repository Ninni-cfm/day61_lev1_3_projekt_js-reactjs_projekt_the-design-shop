import './Article.css';

const Article = (props) => {
    console.log(props);
    return (
        <div className="article">
            <img className="articleImage" src={props.value.img} />
            <p className="articleName">{props.value.name}</p>
            <p className="articlePrice">${props.value.price.toFixed(2)}</p>
        </div>
    );
}

export default Article;
