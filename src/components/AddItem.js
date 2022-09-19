const AddItem = ({newItems, setInputValue, inputValue}) => {
    return ( 
        <form 
        className="w-full flex justify-between"
        onSubmit={newItems}
        >
            <input 
            type="text" 
            className="w-1/2 p-2 border border-black rounded-lg"
            value={inputValue}
            onChange={(e) => {setInputValue(e.target.value)}}
            />
            <button 
            type="submit"
            className="bg-slate-600 p-5 m-auto rounded-lg text-white"
            >Add Item
            </button>
        </form>
     );
}
 
export default AddItem;