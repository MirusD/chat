export type NotificationType = 'success' | 'error' | 'info';

export interface INotification {
    id: string;
    message: string;
    type: NotificationType;
}