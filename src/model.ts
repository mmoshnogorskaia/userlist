interface Picture {
    url: string;
    comment: string;
}

export interface User {
    id: number;
    is_plus: boolean;
    last_login: string;
    name: string;
    online_status: 'OFFLINE' | 'ONLINE';
    picture: Picture;
}
