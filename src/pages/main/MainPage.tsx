import { Header } from 'widgets/Header';
import { ChatRoom } from 'widgets/chatRoom';
import { SideBar } from 'widgets/sidebar'

export const MainPage = () => {
    return (
        <>
            <Header />
            <div style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
                <SideBar />
                <ChatRoom />
            </div>
        </>
    )
}