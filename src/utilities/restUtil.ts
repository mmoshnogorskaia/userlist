import { User } from 'model';

const getResponseBody = async (url: string) => {
    const response = await fetch(url);
    const stream = new Response(response.body);
    return stream.json();
}

export const getUsers = async () => {
    try {
        const userResponse = await getResponseBody('/search?length=20');
        const users = userResponse.items;
        const detailedInfoQuery = users.map(({ id }: any) => `ids=${id}`).join('&');
        const detailedResponce = await getResponseBody(`/profiles?${detailedInfoQuery}`);

        return users.map((user: any) => {
            const userDetails = detailedResponce.find((details: any) => user.id === details.id);
            return { ...user, ...userDetails };
        });
    } catch (e) {
        console.log(e);
    }
};
