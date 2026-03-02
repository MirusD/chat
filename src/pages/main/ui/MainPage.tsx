import { Header } from 'widgets/Header';
import { ChatRoom } from 'widgets/chatRoom';
import { ChatsList } from 'widgets/chatsList'

import './MainPage.module.css'

export const MainPage = () => {
    return (
        <div className='main-page'>
            <aside className='main-page__sidebar'>
                <Header />
                <ChatsList />
            </aside>
            <ChatRoom />
        </div>
    )
}