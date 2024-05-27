import { RecoilRoot, useRecoilState, useRecoilStateLoadable } from "recoil";
import { todosAtomFamily } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
  // {
  //   state,
  //   content
  // }
  if (todo.state === "loading") {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h2>{todo.contents.title}</h2>
        <h3>{todo.contents.description}</h3>
      </div>
    );
  }
}

export default App;
