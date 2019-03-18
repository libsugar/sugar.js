export function deleteAll(obj, ...keys) {
    let ret = true;
    for (const key of keys) {
        if (!(delete obj[key]))
            ret = false;
    }
    return ret;
}
