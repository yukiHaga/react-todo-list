import { Button } from "./ui/Butotn";
import styled from "styled-components";
import { ChangeEvent, MouseEvent } from "react";

const Div = styled.div`
  width: 100%;
  margin: 16px 0;
`;

const Span = styled.span<{ isDone: boolean }>`
  margin: 0 8px;
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
`;

type TodoType = {
  text: string;
  id: number;
  isDone: boolean;
};

type Props = {
  text: string;
  id: number;
  isDone: boolean;
  onChange: (id: number) => void;
  onDelete: (id: number) => void;
  todos: TodoType[];
};

const Todo = ({ text, id, isDone, onChange, onDelete, todos }: Props) => {
  const stringId = `${id}`;
  return (
    <Div>
      <input
        type="checkbox"
        id={stringId}
        onChange={() => onChange(id)}
        checked={isDone}
      />
      <Span {...{ isDone }}>{text}</Span>
      {/* 本当はベタ書きするのではなく、定数として定義した方が良い。 */}
      <Button
        type="button"
        id={stringId}
        color="#dc3545"
        onClick={() => onDelete(id)}
      >
        削除
      </Button>
    </Div>
  );
};

export default Todo;
