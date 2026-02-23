import { useUser } from 'entities/user';
import { CreateInviteButton } from 'features/createInvite';
import { Button } from 'shared';

export const Header = () => {
    const { user, logout } = useUser();

    if (!user) return null;

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            backgroundColor: '#f5f5f5',
            borderBottom: '1px solid #ddd',
            marginBottom: '10px'
        }}>
            <div>
                <strong>Чат закрытого типа</strong>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CreateInviteButton />
                    <span>{user.name}</span>
                    <Button onClick={logout} style={{ backgroundColor: '#ff4d4f', color: 'white' }}>
                        Выйти
                    </Button>
                </div>
            </div>
        </div>
    );
};