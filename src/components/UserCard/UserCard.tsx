import React from 'react';
import { User, OnlineStatus } from 'model';
import css from './UserCard.module.css';

interface UserCardProps {
    user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
    const { picture, personal, name, location, online_status } = user;
    return (
        <div className={css.container}>
            <div className={css.pictureContainer}>
                {picture &&
                    <img src={picture.url} className={css.picture} alt='User picture' />
                }
            </div>
            <div className={css.username}>
                <div className={css.age}>{personal.age}</div>
                {name}
                <div className={`${css.onlineStatus} ${online_status === OnlineStatus.Online ? css.online : ''}`}></div>
            </div>
            <div className={css.distance}>
                {location.distance}
                <div className={css.distanceIcon}>&#10147;</div>
            </div>
        </div>
    );
};
