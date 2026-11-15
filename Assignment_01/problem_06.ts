const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {

    let result: T[K][] = [];

    for (let i = 0; i < items.length; i++) {

        result.push(items[i][key]);

    }

    return result;
};

