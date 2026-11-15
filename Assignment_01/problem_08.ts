
const validateAgeAsync = (age: number): Promise<string> => {
    return new Promise((res, rej) => {

        if (age < 18) {
            rej(new Error("Access Denied: Must be 18 or older"));
        }
        else {
            setTimeout(() => {
                res("Access Granted");
            }, 1000);
        }

    });
};
