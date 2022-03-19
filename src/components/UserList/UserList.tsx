import React from 'react';
import { UserCard } from '../UserCard/UserCard';

interface UserListProps {
    users: any[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
    return (
        <div>
            {users.map(user =>
                <UserCard />
             )}
        </div>
    );
};
