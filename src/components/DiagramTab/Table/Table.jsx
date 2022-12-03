import './Table.css';

export default function Table({ name, type, total }) {
  return (
    <li className="list">
      <span>{name}</span>
      {/* <span>{type}</span> */}
      <span>{total}</span>
    </li>
  );
}
