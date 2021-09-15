const Comment = ({randomName, randomImage}) => (
    <div className="comment">
    <a href="/" className="avatar">
      <img alt="avatar" src={randomImage} />
    </a>
    <div className="content">
      <a href="/" className="author">
        {randomName}
      </a>
      <div className="metadata">
        <span className="date"> Time: 14am </span>
      </div>
      <div className="text">
        Nice blog post!
      </div>
    </div>
  </div>
);

export default Comment
