import React from "react";
import "./fragments.css";

const cat = [
  { number: 1, name: "喵喵", cate: "三花", price: 2000 },
  { number: 2, name: "奶盖", cate: "布偶", price: 8000 },
  { number: 3, name: "端午", cate: "起司", price: 5000 },
  { number: 4, name: "屁屁", cate: "三花", price: 3000 },
  { number: 5, name: "年糕", cate: "加白", price: 5000 },
  { number: 6, name: "奶糖", cate: "银渐层", price: 7000 }
];

function Table() {
  return (
    <div className="fragments-wrapper">
      <table className="fragments-table">
        <thead>
          <tr>
            <th>序号</th>
            <th>名字</th>
            <th>品种</th>
            <th>价格</th>
          </tr>
        </thead>
        <tbody>
          {cat.map(i => (
            <tr>
              <Td cat={i} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Td(props) {
  return (
    <>
      <td>{props.cat.number}</td>
      <td>{props.cat.name}</td>
      <td>{props.cat.cate}</td>
      <td>{props.cat.price}</td>
    </>
  );
}

export default Table;
