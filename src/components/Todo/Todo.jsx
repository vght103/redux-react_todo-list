import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../../store";
import "./todo.scss";

const Todo = ({ todo, onDelete }) => {
  return (
    <li>
      <input type="checkbox" />
      <label>{todo.text}</label>
      <button onClick={onDelete}>삭제</button>
    </li>
  );
};

const mapDispatchProps = (dispatch, ownProps) => {
  console.log(ownProps.todo.id);
  return {
    onDelete: () => dispatch(actionCreators.onDeleteTodo(ownProps.todo.id)),
  };
};

export default connect(null, mapDispatchProps)(Todo);
