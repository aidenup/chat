import MessageListItem from "@/pages/chat/MessageListItem"
import './LeftSidebar.scss'
function LeftSideBar() {


  return(
    <div className="left_sidebar">
      <div className="avatar">
        <img src="" />
        <span className="user_name">username</span>
        <span className="setup">*</span>
      </div>
      <div className="search">
        <input type="text" />
      </div>
      <div className="message_menu">message_menu</div>
      <div className="message_list">
        <MessageListItem />
      </div>
    </div>
  )
}

export default LeftSideBar