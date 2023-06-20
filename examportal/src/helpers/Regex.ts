export const onlyNumbers = /^[0-9]+$/;

export const alphaNumeric = /^[0-9][a-z][A-Z]+$/;

export const sequenceAlphaNumeric = /[^a-zA-Z0-9 ]/g;

export const pageRange = /^[0-9,-]+$/;

export const emailAddress=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const dateValidate=/^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;

export const trimSpaces= /\s+/g;

export const passwordlowercaseRegex = /(?=.*[a-z])/; // Match any string that contains at least one lowercase alphabet

export const  passworduppercaseRegex = /(?=.*[A-Z])/; 

export const passwordnumberRegex = /(?=.*[0-9])/;

export const passwordsymbolRegex = /(?=.*[!@#$%^&*])/;