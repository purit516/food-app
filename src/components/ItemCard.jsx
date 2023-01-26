import { AddItem } from "./AddItem"
export const ItemCard = ({item, onAddItem}) => {

  const addItem = () => {
    //TODO
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <AddItem onAddItem={addItem}/>
    </div>
  )
}