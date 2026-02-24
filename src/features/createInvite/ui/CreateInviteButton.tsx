import { useState } from 'react';
import { Button } from 'shared';
import { useNotification } from 'entities/notification';
import { api } from 'shared/api';

export const CreateInviteButton = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { showNotification } = useNotification();

    const handleCreate = async () => {
        try {
            const token = await api.generateInvite();

            const link = `${window.location.origin}?invite=${token}`;

            await navigator.clipboard.writeText(link);

            showNotification('Ссылка скопирована в буфер обмена!', 'success');
        } catch (error) {
            showNotification('Не удалось создать ссылку', 'error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Button onClick={handleCreate} disabled={isLoading}>
            {isLoading ? 'Генерация...' : 'Пригласить друга'}
        </Button>
    );
};