import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Todo from "../../components/Todo/Todo";
import { actionCreators } from "../../store";
import "./home.scss";

const Home = ({ todos, addTodo }) => {
  const [inputText, setInputText] = useState("");

  const onChange = (event) => {
    setInputText(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!inputText) {
      return;
    }

    // await dbService.collection("todo-list").add({
    //   createdAt: new Date(),
    //   todoText: inputText,
    // });
    addTodo(inputText);
    setInputText("");
  };

  return (
    <>
      <h1 className="hi">Todo List</h1>
      <form onSubmit={onSubmit}>
        <input value={inputText} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>

      <Link to="/login">
        <div>로그인</div>
      </Link>
    </>
  );
};

// store에서 getState() 해오기
//
const mapStateToProps = (state) => {
  // 가져온 state를 리턴하여 자기자신의 prop에 저장하여 사용
  return {
    todos: state,
  };
};

// 변경된 state를 전달
const mapDispatchProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(actionCreators.onAddTodo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(Home);
