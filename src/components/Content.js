import AddItem from "./AddItem";
import FilterItems from "./FilterItem";
import ListItems from "./ListItem";

const Content = (props) => {
    const {list, newItems, inputValue, setInputValue, listFilter, handleFilter, handleDelete, handleCheck} = props;


    return ( 
        <main className="h-full w-2/3 flex flex-col items-center m-auto gap-3 my-5">
            <AddItem newItems={newItems} inputValue={inputValue} setInputValue={setInputValue} />
            <FilterItems 
            handleFilter={handleFilter}
            />
            {listFilter.length ? 
            listFilter.map(elem => <ListItems key={elem.id} elem={elem} handleDelete={handleDelete} handleCheck={handleCheck} />) : 
            list.map(elem => <ListItems key={elem.id} elem={elem} handleDelete={handleDelete} handleCheck={handleCheck} />)}
        </main>
     );
}
 
export default Content;
