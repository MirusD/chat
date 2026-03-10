import { IMessage } from '../model/types';

import './MessageCard.module.css';


function getHoursAndMinutes(date: Date | string | number): string {
  const d = new Date(date);
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}

export const MessageCard = ({ message }: { message: IMessage }) => {
    const isOwn = message.user === 'Вы';

    return (
        <div className={`message-card ${isOwn ? 'message-card_own' : ''}`}>
            {/* <strong>{message.user}: </strong> */}
            <span className='message-card__text'>
                {message.text}
            </span>

            <span className='message-card__date'>
                {getHoursAndMinutes(message.dateAt)}
            </span>

            <span className='message-card__status'>
                {message.status === 'pending' && '⏳'}
                {message.status === 'sent' && '✅'}
                {message.status === 'error' && '❌'}
            </span>

        </div>
    );
};