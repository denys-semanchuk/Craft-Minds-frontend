export const passwordValidator = {
    name: 'password',
    placeholder: 'Your password',
    type: 'password',
    validation: {
        required: 'You must specify a password',
        minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
        },
        pattern: {
            value: "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$",
            message: 'Your password must contain at least 8 characters, 1 lowercase letter, 1 uppercase letter and 1 figure'
        }
    },
}

export const fNameValidator = {
    name: 'firstName',
    placeholder: 'Your first name',
    type: 'text',
    validation: {
        required: 'You must specify your name'
    },
}
export const lNameValidator = {
    name: 'lastName',
    placeholder: 'Your last name',
    type: 'text',
    validation: {
        required: 'You must specify your name'

    },
}

export const emailValidator = {
    name: 'email',
    placeholder: 'Your email',
    type: 'email',
    validation: {
        required: 'You must specify your email',
        pattern: {
            value: "\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$\"\n",
            message: "Please provide valid email"
        }
    },
}