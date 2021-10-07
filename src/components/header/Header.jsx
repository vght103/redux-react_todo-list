import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../../store";

const Header = ({ addTodo }) => {
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
      <h1>Todo List</h1>
      <form onSubmit={onSubmit}>
        <input value={inputText} onChange={onChange} />
        <button>Add</button>
      </form>
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

export default connect(mapStateToProps, mapDispatchProps)(Header);
