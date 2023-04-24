function Article(props) {
  return (
    <article className="main__article" style={props.style}>
      {props.contents.map((content) => (
        <section className="article__content" key={content.id}>
          <h3 className="article__title">{content.content}</h3>
        </section>
      ))}
    </article>
  );
}

export default Article;
