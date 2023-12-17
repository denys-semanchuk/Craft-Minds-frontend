import {InputErrorType} from "../types";

export function findInputError(errors: any, name: string): InputErrorType {
    return Object.keys(errors).filter((key) => key.includes(name)).reduce<InputErrorType>((cur, key) => {
        return Object.assign(cur, {error: errors[key]})
    }, {})
}

export const isFormValid = (err: InputErrorType) => Object.keys(err).length > 0;