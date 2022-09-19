import { IoMdAddCircleOutline } from 'react-icons/io'

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
            className="bg-slate-600 flex gap-5 items-center px-5 py-3 m-auto rounded-lg text-white"
            >
            Add Items
            <IoMdAddCircleOutline size={25} />
            </button>
        </form>
     );
}
 
export default AddItem;