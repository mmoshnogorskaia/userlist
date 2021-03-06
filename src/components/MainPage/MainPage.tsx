import React, { useEffect, useState } from 'react';
import { UserList } from 'components';
import { getUsers } from 'utilities/restUtil';

import css from './MainPage.module.css';

export const MainPage: React.FC = () => {
    const [users, setUsers] = useState<any>([]);

    useEffect(() => { loadUsers(); }, []);

    const loadUsers = async () => {
        const users = await getUsers();
        setUsers(users);
    };

    return (
        <div className={css.container}>
            <UserList users={users} />
        </div>
    );
};
