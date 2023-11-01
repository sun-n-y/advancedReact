import { people } from '../../../data';
import Person from './Person';

const List = () => {
  return (
    <div>
      {people.map((person) => {
        return <Person {...person} key={person.name} />;
      })}
    </div>
  );
};
export default List;
