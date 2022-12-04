import './Table.css';

export default function Table({ name, total, color }) {
  console.log(color);
  // const elColor = color.map(el => {
  //   return el;
  // });
  return (
    <li className="list">
      <span className="list__item">
        <div style={{ backgroundColor: color }} className="list__index"></div>
        {name}
      </span>
      <span>{total}</span>
    </li>
  );
}
