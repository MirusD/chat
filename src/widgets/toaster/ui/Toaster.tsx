import { useNotification, INotification } from 'entities/notification';

const styleMap: Record<INotification['type'], React.CSSProperties> = {
    success: { backgroundColor: '#4cdf50', color: 'white' },
    error: { backgroundColor: '#f44336', color: 'white' },
    info: { backgroundColor: '#2196f3', color: 'white'},
};

export const Toaster = () => {
    const { notifications, removeNotification } = useNotification();

    return (
        <div style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
        }}>
            {notifications.map((notif) => (
                <div
                    key={notif.id}
                    onClick={() => removeNotification(notif.id)}
                    style={{
                        padding: '15px 20px',
                        borderRadius: '5px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        cursor: 'pointer',
                        minWidth: '200px',
                        ...styleMap[notif.type],
                    }}
                >
                    {notif.message}
                </div>
            ))}
        </div>
    );
};