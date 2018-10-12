export const capitalize = (mystr) => mystr.toUpperCase();
export const head = ([i]) => i;
export const tail = ([x, ...xr]) => xr;
export const isdef = x => typeof x !== 'undefined';

export const reverse = ([x, ...xr]) => isdef(x) ? [...reverse(xr), x] : [];

export const voteCounter = votes => votes.reduce( (acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
    return acc;
},{})