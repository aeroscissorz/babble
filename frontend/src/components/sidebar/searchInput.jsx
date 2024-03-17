import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type='text' placeholder='Search' className='w-full input input-bordered h-10' />
        <button type = 'submit' className='btn btn-circle bg-purple-600 text-white'>
        <IoIosSearch className='w-6 h-6 outline-none' />

        </button>
    </form>
    )
}

export default SearchInput