import React, { useEffect, useState } from 'react';
import { UserList } from '../UserList/UserList';
import { getUsers } from '../../utilities/restUtil';

export const MainPage: React.FC = () => {
    const [users, setUsers] = useState<any>([]);

    useEffect(() => { loadUsers() }, []);

    const loadUsers = async () => {
        const users = await getUsers();
        console.log('users', users);
        setUsers(users);
    };

    return (
        <UserList users={users} />
    );
};
