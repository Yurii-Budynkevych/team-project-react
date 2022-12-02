export default function Table({name, type, total}) {
  return (
    <li >
      <span>{name}</span>
      <span>{type}</span>
      <span>{total}</span>
    </li>
  )

}