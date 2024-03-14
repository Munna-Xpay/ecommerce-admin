import * as Yup from 'yup'

export const productValidationSchema=Yup.object({
    images:Yup.array().required('Images is required'),
    thumbnail:Yup.string().required('Thumbnail is required'),
    description:Yup.string().required('Description is required'),
    title:Yup.string().required('Product name is required'),
    manufacturer:Yup.string().required('Brand name is required'),
    about:Yup.string().required('About is required'),
    stock:Yup.string().required('Stock status is required'),
    stockQuantity:Yup.number().required('Stock Quantity is required'),
    memory:Yup.array(),
    colors:Yup.array(),
    discounted_price:Yup.number().required('Sale price is required'),
    original_price:Yup.number().required('Regular price is required'),
    ships_from:Yup.string().required("Ships from is required"),
    seller:Yup.string().required('Seller is required'),
    category:Yup.string().required('Category is required')
})