import React from 'react'; // Make sure to import React if you are using JSX
import './index.css';

export default function DisplayData({ data }) {
  const list = data.map((item) => (
    <li key={item.id } className="listitems">
      <img src={item.image} alt={item.name} />
      <p>
        <h1>{item.name}</h1>
        <h2>Age: {item.age}</h2>
      </p>
    </li>
  ));

  return <ul>{list}</ul>;
}
