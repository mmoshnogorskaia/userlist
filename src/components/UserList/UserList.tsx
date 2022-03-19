import React from 'react';
import { UserCard } from 'components';
import { User } from 'model';

import css from './UserList.module.css';

interface UserListProps {
    users: ReadonlyArray<User>;
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
    return (
        <div className={css.container}>
            {users.map(user =>
                <UserCard user={user} key={user.id} />
             )}
        </div>
    );
};
