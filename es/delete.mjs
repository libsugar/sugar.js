export function deleteAll(obj, ...keys) {
    for (const key of keys) {
        if (!(delete obj[key]))
            return false;
    }
    return true;
}
