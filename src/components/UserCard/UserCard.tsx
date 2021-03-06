import React from 'react';
import { User } from 'model';
import { OnlineStatusIndicator } from 'components';
import css from './UserCard.module.css';

interface UserCardProps {
    user: User;
}

const locationIcon = '&#10147;'; // TODO: Create separate icons file

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
    const {
        picture,
        personal,
        name,
        location,
        online_status,
        last_login,
        headline
    } = user;

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
                {online_status &&
                    <OnlineStatusIndicator onlineStatus={online_status} lastLogin={last_login} />
                }
            </div>
            <div className={css.distance}>
                {location.distance}m{/* TODO: Create utility function to parse to different measurements */}
                <div className={css.distanceIcon} title={location.name}>{locationIcon}</div>
            </div>
            <div className={css.headline}><i>{headline}</i></div>
        </div>
    );
};
