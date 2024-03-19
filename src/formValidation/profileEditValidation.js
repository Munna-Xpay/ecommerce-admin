import * as yup from 'yup'

export const userSchema = yup.object({
    email: yup.string().email("Invalid email address").required(),
    phoneNum: yup.number().min(1000000000).max(9999999999),
    zipCode: yup.number().min(100000).max(999999)
})