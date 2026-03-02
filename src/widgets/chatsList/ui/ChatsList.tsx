import { useChats, ChatListItem} from 'entities/chat';

export const ChatsList = () => {
    const { chats, activeChatId, setActiveChat } = useChats();

    return (
        <div className='chats-list'>
            <div>
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