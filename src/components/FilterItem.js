const FilterItems = ({handleFilter}) => {

    return ( 
        <form 
        className="w-full"
        onSubmit={e => {e.preventDefault()}}
        >
            <input 
            type="text"
            className="w-full p-2 border border-black rounded-lg"
            onChange={(e) => handleFilter(e.target.value)}
            />
        </form>
     );
}
 
export default FilterItems;