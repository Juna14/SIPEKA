export const id = "a0a07ef9-1a61-46d2-b00b-ea4d580e714a";

export const credential = {
    "username": "4PU03FXTjYYrMxACQLD5fvxwUOKc4B8OmXpNPU9MnkU=",
    "password": "uCAYSxR7hlGK/63OzBFRQBWF60S7+n01nTbbxi822uHNKyscLAAiKAt40yNK/a0f",
    "id_pengguna": "272fbc02-cf64-4ad9-9363-33afd4d55198"
}

export function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

export const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

export const dateFormater = (date) => new Date(date).toLocaleDateString(
    "id-ID",
    dateOptions
  );