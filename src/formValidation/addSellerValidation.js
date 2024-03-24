import * as yup from 'yup'

export const sellerSchema = yup.object({
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().required("Password is required"),
    phoneNum: yup.number().min(1000000000).max(9999999999).required("Phone number is required"),
    address: yup.string().required("Address is required"),
    country: yup.string().required("Country is required"),
    company_name: yup.string().required("Company name is required"),
    website: yup.string().required("Website is required"),
    company_icon: yup.string().required("Company icon is required")
})

export const sellerSchemaForEdit = yup.object({
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().required("Password is required"),
    phoneNum: yup.number().min(1000000000).max(9999999999)
})