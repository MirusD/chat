import { IChat } from '../model/types';
import { Avatar } from 'shared';
import { Badge } from 'shared';
import { formatRelativeDate } from '../lib/formatRelativeDate';

import './ChatListItem.module.css';

interface Props {
    chat: IChat;
    isActive: boolean;
    onClick: () => void;
}


export const ChatListItem = ({ chat, isActive, onClick }: Props) => {
    const classname = `chat ${isActive ? 'chat--active' : ''}`;
    return (
        <div
            className={classname}
            onClick={onClick}
        >
            <div className='chat__avatar'>
                <Avatar />
            </div>
            <div>
                <div className='chat__title'>{chat.title}</div>
                <div className='chat__last-message'>
                    {chat.lastMessage || 'Нет сообщений'}
                </div>
            </div>
            <div className='chat__right-block'>
                <span className='chat__date-last-message'>
                    {chat.lastMessageAt && formatRelativeDate(chat.lastMessageAt)}
                </span>
                <Badge count={10} />
            </div>
        </div>
    );
};