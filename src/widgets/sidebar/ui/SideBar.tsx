import { useChats, ChatListItem} from 'entities/chat';

export const SideBar = () => {
    const { chats, activeChatId, setActiveChat } = useChats();

    return (
        <div style={{
            width: '300px',
            borderRight: '1px solid #ccc',
            height: '100%',
            overflowY: 'auto',
            backgroundColor: "#fafafa"
        }}>
            <div style={{ padding: '15px', borderBottom: '1px solid #dd', fontWeight: 'bold' }}>
                Мессенджер
            </div>
            {chats.map(chat => (
                <ChatListItem
                    key={chat.id}
                    chat={chat}
                    isActive={chat.id === activeChatId}
                    onClick={() => setActiveChat(chat.id)}
                />
            ))}
        </div>
    );
};