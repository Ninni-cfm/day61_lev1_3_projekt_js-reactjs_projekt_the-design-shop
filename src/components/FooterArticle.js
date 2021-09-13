
const FooterArticle = (props) => {
    return (
        <article>
            <h3>{props.value.title}</h3>
            <span>{props.value.link}</span>
            <p>{props.value.content}</p>
        </article>
    );
}

export default FooterArticle;