export const AddItem = ({onAddItem}) => {
   return (
    <div>
      <button onClick={onAddItem} className = "bg-red-400 hover:bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-lg"><span>+</span></button>
    </div>
   )
}