export const timeSince = (date: string | undefined) => {
    const dateToString = new Date(parseInt(date || "")).toString();
    const d = new Date(dateToString);
    var seconds = Math.floor((new Date().getTime() - d.getTime()) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
};

export const timeSinceShort = (date: string | undefined) => {
    const dateToString = new Date(parseInt(date || "")).toString();
    const d = new Date(dateToString);
    var seconds = Math.floor((new Date().getTime() - d.getTime()) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + "y ";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + "m ";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + "d";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + "h";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + "m";
    }
    return Math.floor(seconds) + "s";
};
