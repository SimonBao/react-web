const ApprovalCard = ({name, image, description, meta}) => (
  <div className="card">
    <div className="content">
      <img alt="card" className="right floated mini ui image" src={image}/>
      <div className="header">
        {name}
      </div>
      <div className="meta">
        {meta}
      </div>
      <div className="description">
        {description}
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
);

export default ApprovalCard;
