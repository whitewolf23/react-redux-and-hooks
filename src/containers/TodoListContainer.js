import React, { useCallback } from 'react';
import { useSelector, useActions, useDispatch } from 'react-redux';
import { changeInput, insert, toggleCheck, remove } from '../modules/todos';
import TodoList from '../components/TodoList';

const TodoListContainer = () => {
  // todos 리듀서에서 관리하는 객체를 통째로 가져올 거라면 state.todos 로 간소화 시킬 수 있습니다.
  const { input, todos } = useSelector(state => state.todos, []);
  const dispatch = useDispatch()


  const onChange = useCallback(
    e => {
      dispatch(changeInput(e.target.value));
    },
    [dispatch]
  );

  const onRemove = useCallback(
    id => {
      dispatch(remove(id));
    },
    [dispatch]
  );

  const onToggle = useCallback(
    id => {
      dispatch(toggleCheck(id));
    },
    [dispatch]
  );


  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(insert(input));
      dispatch(changeInput(''));
    },
    [dispatch, input]
  );

  return (
    <TodoList
      input={input}
      todos={todos}
      onChange={onChange}
      onSubmit={onSubmit}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default TodoListContainer;