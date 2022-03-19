export const getTimeAgo = (startDateString: string) => {
    const differenceMilliseconds = Date.now() - Date.parse(startDateString);
    const differenceInMinutes = Math.round(differenceMilliseconds / 60000);

    let timeString;
    if (differenceInMinutes < 60) {
        timeString = `${differenceInMinutes} min ago`;
    } else if (differenceInMinutes > 60 && differenceInMinutes < 1440) {
        timeString = `${Math.round(differenceInMinutes / 60)} hours ago`;
    } else if (differenceInMinutes > 1440) {
        timeString = 'long time ago';
    }

    return timeString;
}
