
import styles from './Avatar.module.css';
import DEFAULT_AVATAR from './assets/default-avatar.png'

interface AvatarProps {
    src?: string;
    alt?: string;
    size?: 'xs' | 'sm' | 'md' | 'xl';
    status?: 'online' | 'offline' | 'busy';
}

export const Avatar = ({ 
    src, alt = 'Avatar', 
    status, 
    ...props}: AvatarProps) => {
    return (
        <div className={`${styles.avatar}`} {...props}>
            <img
                src={src || DEFAULT_AVATAR}
                alt={alt}
                className={styles.image}
                onError={(e) => {
                    (e.target as HTMLImageElement).src = DEFAULT_AVATAR;
                }}
            />
            {status && <span className={`${styles.status} ${styles[status]}`} />}
        </div>
    );
};