import React from "react";

function Header({ title, subTitle }) {
  return (
    <h1 className="title">
      {title /* Todo List */}
      <span> {subTitle /*Get things done. One item at a time*/}</span>
    </h1>
  );
}

export default Header;
