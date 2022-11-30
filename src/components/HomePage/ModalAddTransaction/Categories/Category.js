export default function Category({ category }) {
  return <option value={category.id}>{category.name}</option>;
}
