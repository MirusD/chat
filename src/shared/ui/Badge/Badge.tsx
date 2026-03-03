import styles from './Badge.module.css';

type BadgeVariant = 'primary' | 'secondary';

interface BadgeProps {
    count: number;
    variant?: BadgeVariant;
}

export const Badge = ({ count, variant = 'primary' }: BadgeProps ) => {
    const displayCount = count > 99 ? '99+' : count.toString();

    const badgeClass = `${styles.badge} ${styles[variant]} ${count > 9? styles.badge_long : ''}`;

    return (
        <div className={badgeClass}>
            {displayCount}
        </div>
    );
};