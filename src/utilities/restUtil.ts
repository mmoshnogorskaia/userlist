import { User } from 'model';

const getResponseBody = async (url: string) => {
    const response = await fetch(url);
    const stream = new Response(response.body);
    return stream.json();
}

export const getUsers = async () => { // TODO: Add backend types validation
    try {
        const userResponse = await getResponseBody('/search?length=20'); // TODO: Move URLs to constants file
        const users = userResponse.items;
        const detailedInfoQuery = users.map(({ id }: Partial<User>) => `ids=${id}`).join('&');
        const detailedResponce = await getResponseBody(`/profiles?${detailedInfoQuery}`);

        return users.map((user: Partial<User>) => {
            const userDetails = detailedResponce.find((details: Partial<User>) => user.id === details.id);
            return { ...user, ...userDetails };
        });
    } catch (e) {
        console.log(e);
        return [];
    }
};
