import { AiOutlineDelete } from 'react-icons/ai'

const ListItems = ({elem}) => {
    return ( 
        <div className="bg-cyan-600 flex justify-between w-full p-3 rounded-lg text-white">
            <input  
            type="checkbox"
            className="w-5 cursor-pointer"
            onClick={(e) => {console.log(e.target.checked)}}
            />
            <div className='flex place-items-center gap-5'>
                <h1>{elem.name}</h1>
                <AiOutlineDelete
                className='cursor-pointer'
                onClick={() => {console.log(elem.id)}} 
                />
            </div>
        </div>
     );
}
 
export default ListItems;