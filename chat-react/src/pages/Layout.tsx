
import SideMenu from '@/components/menu/SideMenu'
import LeftSideBar from '@/pages/chat/LeftSidebar'
import MessageCon from '@/pages/chat/MessageCon'
import './Layout.scss'
function Layout() {

  return(
    <div className="layout">
      <div className="sidebar_menu">
        <SideMenu />
      </div>
      <div className="left">
        <LeftSideBar />
      </div>
      <div className="right">
        <MessageCon />
      </div>
    </div>
  )
}
export default Layout