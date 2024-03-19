import React, { useEffect, useState } from 'react'
import PageHead from '../components/PageHead'
import { Autocomplete, Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { countries } from '../countryDatas'
import { useDispatch } from 'react-redux'
import { addSeller } from '../redux/sellerSlice'
import { sellerSchema } from '../formValidation/addSellerValidation'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'


const AddSeller = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [sellerDetails, setSellerDetails] = useState({
        email: "",
        password: "",
        phoneNum: null,
        address: "",
        country: "",
        company_name: "",
        website: ""
    })
    const [errors, setErrors] = useState({})
    const [file, setFile] = useState(null)
    const [company_icon, setCompany_icon] = useState("")
    console.log(file)

    useEffect(() => {
        file && setCompany_icon(URL.createObjectURL(file))
    }, [file])

    const handleAddSeller = async () => {
        sellerSchema.validate({ ...sellerDetails, company_icon: file }, { abortEarly: false })
            .then(value => {
                const { email, password, phoneNum, address, country, company_name, website } = sellerDetails;
                const formData = new FormData();
                formData.append("email", email)
                formData.append("password", password)
                formData.append("phoneNum", phoneNum)
                formData.append("address", address)
                formData.append("country", country)
                formData.append("company_name", company_name)
                formData.append("website", website)
                formData.append("company_icon", file)
                dispatch(addSeller({ data: formData, navigate }))
            })
            .catch(err => {
                // console.log(err.inner)
                const validateErrors = {}
                err.inner.forEach(error => {
                    validateErrors[error.path] = error.message
                })
                setErrors(validateErrors)
                console.log(validateErrors)
            })

    }

    return (
        <>
            <PageHead heading='Add Seller' />
            <Paper sx={{ width: '100%', marginTop: '50px' }}>
                <Grid container spacing={4} p={3}>
                    <Grid item xs={12} md={4}>
                        <Stack spacing={3}>
                            <TextField error={errors.email} helperText={errors.email} onChange={(e) => setSellerDetails({ ...sellerDetails, email: e.target.value })} value={sellerDetails.email} label="Email" type='email' variant='filled' color="secondary" />
                            <TextField error={errors.password} helperText={errors.password} onChange={(e) => setSellerDetails({ ...sellerDetails, password: e.target.value })} value={sellerDetails.password} label="Password" type='password' variant='filled' color="secondary" />
                            <TextField error={errors.phoneNum} helperText={errors.phoneNum} onChange={(e) => setSellerDetails({ ...sellerDetails, phoneNum: e.target.value })} value={sellerDetails.phoneNum} label="Mobile Number" type='number' variant='filled' color="secondary" />
                            <TextField error={errors.address} helperText={errors.address} onChange={(e) => setSellerDetails({ ...sellerDetails, address: e.target.value })} value={sellerDetails.address} label="Address" color="secondary" variant='filled' />
                            <TextField error={errors.company_name} helperText={errors.company_name} onChange={(e) => setSellerDetails({ ...sellerDetails, company_name: e.target.value })} value={sellerDetails.company_name} label="Company name" variant='filled' color="secondary" fullWidth />
                            <TextField error={errors.website} helperText={errors.website} onChange={(e) => setSellerDetails({ ...sellerDetails, website: e.target.value })} value={sellerDetails.website} label="Website" variant='filled' color="secondary" fullWidth />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <Stack spacing={4} alignItems={'start'}>
                            <Autocomplete
                                fullWidth
                                style={{ borderRadius: '7px' }}
                                id="country-select-demo"
                                sx={{ width: '396px', backgroundColor: '#f2f4f5', marginLeft: { md: 1, xs: 0 }, marginTop: '20px', boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                                options={countries}
                                autoHighlight
                                onInputChange={(e, value) => setSellerDetails({ ...sellerDetails, country: value })}
                                getOptionLabel={(option) => option.label}
                                renderOption={(props, option) => (
                                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                        <img
                                            loading="lazy"
                                            width="20"
                                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                            alt=""
                                        />
                                        {option.label} ({option.code}) +{option.phone}
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        fullWidth
                                        error={errors.country}
                                        helperText={errors.country}
                                        value={sellerDetails.country}
                                        {...params}
                                        label="Country"
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: 'new-password', // disable autocomplete and autofill
                                        }}
                                    />
                                )}
                            />
                            <Stack>
                                <Box
                                    component={'img'}
                                    src={company_icon ? company_icon : 'https://th.bing.com/th/id/OIP.y757S8hQiezX3CSo1AI5vgAAAA?rs=1&pid=ImgDetMain'}
                                    sx={{ width: '220px', height: '220px', objectFit: 'contain' }}
                                />
                                {errors.company_icon && <Typography color={'error'}>{errors.company_icon}</Typography>}
                            </Stack>
                            <Button
                                variant="outlined"
                                component="label"
                            >
                                Browse company icon
                                <input
                                    onChange={(e) => setFile(e.target.files[0])}
                                    type="file"
                                    hidden
                                />
                            </Button>
                            <Button onClick={handleAddSeller} variant='contained' size='large' fullWidth>Add Seller</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Paper>

            <Toaster />
        </>
    )
}

export default AddSeller