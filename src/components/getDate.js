export const getTime = (dateStr) => {
    const dateObj = new Date(dateStr);

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const day = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();

    // Create the words representation of the date
    return `${day} ${month} ${year}`;
}