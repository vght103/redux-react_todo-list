import { createStore } from "redux";

// dispatch type 을 사용할 때의 변수 지정
const TODO_ADD = "TODO_ADD";
const TODO_DELETE = "TODO_DELETE";
const TOTO_COMPLETED = "TODO_COMPLETED";

const onAddTodo = (text) => {
  return {
    type: TODO_ADD,
    text,
  };
};

const onDeleteTodo = (id) => {
  return {
    type: TODO_DELETE,
    id,
  };
};

//  state, action 을 받아서 기존 state를 변경한다
const reducer = (state = [], action) => {
  switch (action.type) {
    case TODO_ADD:
      return [
        ...state,
        { text: action.text, id: new Date().getTime(), completed: false },
      ];
    case TODO_DELETE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = { onAddTodo, onDeleteTodo };
export default store;
