import React from 'react';
import { User } from '../../model';
import css from './UserCard.module.css';

interface UserCardProps {
    user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <div className={css.container}>
            123
        </div>
    );
};
