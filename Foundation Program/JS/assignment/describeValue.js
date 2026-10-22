function describeValue(param) {
    if (param) {
        return `${typeof(param)} | truthy`;
    } else {
        return `${typeof(param)} | falsy`;
    }
}