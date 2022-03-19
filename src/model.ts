interface Location {
    area: string;
    city: string;
    country: string;
    distance: number;
    name: string;
}

interface Measurement {
    [propName: string]: number;
}

interface Personal {
    age: number;
    body_hair: string;
    body_type: string;
    ethnicity: string;
    eye_color: string;
    relationship: string;
    smoker: 'YES' | 'NO';
    height: Measurement;
    weight: Measurement;
}

interface Picture {
    url: string;
    comment: string;
}

interface Sexual {
    anal_position: string;
    safer_sex: string;
    sm: string;
}

export enum OnlineStatus {
    Offline = 'OFFLINE',
    Online = 'ONLINE'
}

export interface User {
    id: number;
    is_plus: boolean;
    last_login: string;
    name: string;
    online_status?: OnlineStatus;
    picture?: Picture;
    headline: string;
    location: Location;
    personal: Personal;
    sexual: Sexual;
}
