import React, {useState, useEffect} from "react"
import { ItemCard } from "./ItemCard"

export const Items = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/items')
    .then(res => res.json())
    .then(data => setItems(data?.data))
    .catch(e => console.log(e))
  }, [])

const onAddItem = (item) => {
  console.log(item)
}
 
  return (
    <div>
      <h2>Menu</h2>
      {
        items.length > 0 && items.map((item, idx) => {
          return (
            <div className="w-full p-3">
              <ItemCard key={idx} item = {item} onAddItem={onAddItem}/>
            </div>
          )
        })
      }
    </div>
  )
}