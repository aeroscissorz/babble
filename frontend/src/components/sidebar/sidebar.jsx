import Conversations from "./conversations"
import LogoutButton from "./logoutButton"
import SearchInput from "./searchInput"

const Sidebar = () => {
  return (
    <div className='border-r border-slate p-4 flex flex-col'>

        <SearchInput />
        <div className='divider px-3'></div>
        <Conversations />
        <LogoutButton />

    </div>
  )
}

export default Sidebar