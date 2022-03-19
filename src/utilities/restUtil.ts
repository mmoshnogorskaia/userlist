export const getUsers = async () => {
    try {
        const url = '/search?length=2';
        const response = await fetch(url);
        const stream = new Response(response.body);
        const parsedStream = await stream.json();
        return parsedStream.items;
    } catch (e) {
        console.log(e);
    }
};
