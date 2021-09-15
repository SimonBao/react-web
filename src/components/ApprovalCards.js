import faker from "faker";
import ApprovalCard from './ApprovalCard';

const ApprovalCards = () => (
  <div className="ui cards">
    <ApprovalCard name={faker.name.findName()} image={faker.image.avatar()} description={faker.lorem.sentence()} meta={faker.lorem.words()} />
    <ApprovalCard name={faker.name.findName()} image={faker.image.avatar()} description={faker.lorem.sentence()} meta={faker.lorem.words()} />
    <ApprovalCard name={faker.name.findName()} image={faker.image.avatar()} description={faker.lorem.sentence()} meta={faker.lorem.words()} />
  </div>
)

export default ApprovalCards;
