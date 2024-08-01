import Todoitem from "./Todoitem";
export default function Todolist({ tasks }) {
  return tasks.map((item) => <Todoitem key={item} item={item} />);
}
