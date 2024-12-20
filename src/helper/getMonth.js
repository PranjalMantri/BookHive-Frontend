function getMonth() {
    const date = new Date();
    const month = date.getMonth();

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return months[month];
}

export default getMonth;
