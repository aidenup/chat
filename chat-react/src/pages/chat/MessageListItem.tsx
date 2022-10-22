import './MessageListItem'
function MessageListItem() {

  // :class="{active: props.active}"
  return(
    <div className="message_list_item" >
    <div className="avatar"><img src="" /></div>
    <div className="info">
      <div>
        <p>user_name</p><span>time</span>
      </div>
      <div className="short_message">hello world</div>
    </div>
  </div>
  )
}

export default MessageListItem