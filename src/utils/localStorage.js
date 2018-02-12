export function setItem(item, data) {
    data = typeof data === "object" ? JSON.stringify(data) : data;
    localStorage.setItem(item, data);
}

export function getItem(item) {
    const data = localStorage.getItem(item);
    try {
        return JSON.parse(data);
    } catch (err) {
        return data;
    }
}

export function removeItem(item) {
    localStorage.removeItem(item);
}