import { ChangeEvent, FormEvent, Fragment, MouseEvent } from "react";
import styled from "styled-components";
import { useState } from "react";
import { Button } from "./ui/Butotn";
import Todo from "./Todo";

const HeaderTitle = styled.h2`
  text-align: center;
  width: 100%;
`;

const StyledInput = styled.input`
  margin-right: 8px;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const List = styled.div`
  margin-top: 16px;
`;

type TodoType = {
  id: number;
  text: string;
  isDone: boolean;
};

const TodoList = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [idCounter, setIdCounter] = useState(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.length > 0) {
      const todo = { id: idCounter + 1, text, isDone: false };
      setIdCounter((prev) => prev + 1);
      setTodos((prev) => [...prev, todo]);
      setText("");
    } else {
      alert("テキストを1文字以上入力してください");
    }
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onChange = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const onDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // Reactの良さは宣言的なView。
  // JSの場合、ユーザーインターフェースを作成するときに、DOMを操作して、データを同期するのを手動でやる必要があった。DOMを操作するので、ビューにidを付与する必要もあった
  // ReactではJSXを用意すれば、JSXにデータ(もしくはstate)を入れれば、Reactが勝手にデータを同期してビューを再構築してくれる。
  // さらにstateが変化すれば勝手に同期してビューを再構築してくれる
  // あるべき姿(JSX)を宣言しておけば、その表示や更新はReactが担う
  return (
    <>
      <HeaderTitle>TODO LIST</HeaderTitle>
      <Main>
        <form onSubmit={handleSubmit}>
          <StyledInput type="text" value={text} onChange={handleTextChange} />
          <Button type="submit">登録</Button>
        </form>
      </Main>
      <List>
        {todos.map((todo, i) => {
          return (
            <Fragment key={i}>
              <Todo {...{ ...todo, onChange, onDelete, todos }} />
            </Fragment>
          );
        })}
      </List>
    </>
  );
};

export default TodoList;
