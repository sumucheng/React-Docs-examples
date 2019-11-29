//
import React, { useState } from "react";
import "./product.css";

function SearchBar(props) {
  function searchChange(e) {
    props.searchChange(e.target.value);
  }
  function checkboxChange() {
    props.stockChange();
  }

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search..."
        value={props.searchText}
        onChange={searchChange}
      />
      <p>
        <input
          type="checkbox"
          checked={props.stockedOnly}
          onChange={checkboxChange}
        />
        Only show stocked
      </p>
    </div>
  );
}

function Category(props) {
  return (
    <tr>
      <th colSpan="2">{props.category}</th>
    </tr>
  );
}

function Product(props) {
  const name = props.stocked ? (
    props.name
  ) : (
    <span style={{ color: "red" }}>{props.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{props.price}</td>
    </tr>
  );
}

function ProductList(props) {
  let rows = [];
  let cat = null;
  props.products.forEach(i => {
    if (
      i.name.indexOf(props.searchText) < 0 ||
      (props.stockedOnly && !i.stocked)
    )
      return;
    if (i.category !== cat) {
      rows.push(<Category category={i.category} key={i.category} />);
    }
    rows.push(<Product stocked={i.stocked} name={i.name} price={i.price} />);
    cat = i.category;
  });

  return (
    <div className="productList">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

function ProductTable() {
  const [searchText, setSearchText] = useState("");
  const [stockedOnly, setStockedOnly] = useState(false);

  function searchChange(value) {
    setSearchText(value);
  }
  function stockChange() {
    setStockedOnly(!stockedOnly);
  }

  return (
    <div className="productTable">
      <SearchBar
        searchText={searchText}
        stockedOnly={stockedOnly}
        searchChange={searchChange}
        stockChange={stockChange}
      />
      <ProductList
        products={PRODUCTS}
        searchText={searchText}
        stockedOnly={stockedOnly}
      />
    </div>
  );
}

let PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

export default ProductTable;
