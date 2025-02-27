import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));


const studennts = [
  {id: 1, name: "Sang", age: 24},
  {id: 2, name: "Bùm", age: 23}
];
// <ES6: arrow function
const StudentList = (props) => {
  return props.studenst.map((item, index) => {
    console.log(props);
    return (
      <ul></ul>
    )
  })
}
root.render(<StudentList students={students} />)