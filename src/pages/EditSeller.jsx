import React, { useEffect, useState } from 'react'
import PageHead from '../components/PageHead'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Autocomplete, Box, Button, FormControlLabel, Grid, Paper, Stack, Switch, TextField, Typography } from '@mui/material'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../redux/baseUrl';
import { countries } from '../countryDatas';
import { fetchAllSellersWithSalesDetails, updateSeller, updateSellerCompanyIcon } from '../redux/sellerSlice';
import { sellerSchemaForEdit } from '../formValidation/addSellerValidation';

const EditSeller = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const seller = useSelector(state => state.sellerReducer.allSellers.find(item => item?.seller?._id == id)?.seller)
    const [sellerData, setSellerData] = useState({})
    const [file, setFile] = useState(null)
    const [fileUrl, setFileUrl] = useState("")
    const [errors, setErrors] = useState({})
    console.log(sellerData)

    const handleEditSeller = async () => {
        sellerSchemaForEdit.validate(sellerData, { abortEarly: false })
            .then(value => {
                const { _id, ...others } = sellerData;
                dispatch(updateSeller({ data: others, navigate, id: seller._id }))
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

    const handleSaveIcon = () => {
        if (file) {
            const formData = new FormData();
            formData.append("company_icon", file)
            dispatch(updateSellerCompanyIcon({ data: formData, setFile, id: seller._id }))
            setSellerData(seller)
        }
    }

    useEffect(() => {
        if (seller) {
            setSellerData(seller)
        }
    }, [seller])

    useEffect(() => {
        if (file) {
            setFileUrl(URL.createObjectURL(file))
        } else {
            setFileUrl("")
        }
    }, [file])

    useEffect(() => {
        dispatch(fetchAllSellersWithSalesDetails(''))
    }, [])

    return (
        <>
            <Link to={'/seller-table'}><Button sx={{ marginTop: '10px' }} startIcon={<ArrowBackIosIcon />} size='small' >Back</Button></Link>
            <PageHead heading='Edit Seller' />
            <Paper sx={{ width: '100%', marginTop: '50px' }}>
                <Grid container spacing={4} p={3}>
                    <Grid item xs={12} md={4}>
                        <Stack spacing={3}>
                            <TextField error={errors.email} helperText={errors.email} onChange={(e) => setSellerData({ ...sellerData, email: e.target.value })} value={sellerData.email} label="Email" type='email' variant='filled' color="secondary" />
                            <TextField disabled onChange={(e) => setSellerData({ ...sellerData, password: e.target.value })} value={sellerData.password} label="Password" type='password' variant='filled' color="secondary" />
                            <TextField error={errors.phoneNum} helperText={errors.phoneNum} onChange={(e) => setSellerData({ ...sellerData, phoneNum: e.target.value })} value={sellerData.phoneNum} label="Mobile Number" type='number' variant='filled' color="secondary" />
                            <TextField onChange={(e) => setSellerData({ ...sellerData, address: e.target.value })} value={sellerData.address} label="Address" color="secondary" variant='filled' />
                            <TextField onChange={(e) => setSellerData({ ...sellerData, company_name: e.target.value })} value={sellerData.company_name} label="Company name" variant='filled' color="secondary" fullWidth />
                            <TextField onChange={(e) => setSellerData({ ...sellerData, website: e.target.value })} value={sellerData.website} label="Website" variant='filled' color="secondary" fullWidth />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <Stack spacing={1} alignItems={'start'}>
                            <Autocomplete
                                onChange={(e, newVal) => setSellerData({ ...sellerData, country: newVal })}
                                value={sellerData?.country}
                                style={{ borderRadius: '7px' }}
                                id="country-select-demo"
                                sx={{ backgroundColor: '#edf2ef' }}
                                fullWidth
                                options={countries.map(country => country.label)}
                                autoHighlight
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Choose a country"
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: 'new-password', // disable autocomplete and autofill
                                        }}
                                    />
                                )}
                            />
                            <FormControlLabel
                                control={<Switch checked={sellerData?.isBlocked} onChange={(e) => setSellerData({ ...sellerData, isBlocked: e.target.checked })} />}
                                label={sellerData?.isBlocked ? "Unblock Seller" : "Block Seller"}
                            />
                            <Stack spacing={1}>
                                <Box
                                    component={'img'}
                                    src={fileUrl ? fileUrl : (sellerData?.company_icon ? `${BASE_URL}/uploadedFiles/${sellerData?.company_icon}` : 'https://th.bing.com/th/id/OIP.y757S8hQiezX3CSo1AI5vgAAAA?rs=1&pid=ImgDetMain')}
                                    sx={{ width: '220px', height: '220px', objectFit: 'contain' }}
                                />
                                <Typography sx={{ color: 'red' }}>Note : Save Icon separately</Typography>
                                <Stack direction={'row'} spacing={2}>
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
                                    {file && <Button onClick={handleSaveIcon} variant="contained" size='small'>Save image</Button>}
                                    {file && <Button onClick={() => setFile(null)} variant="contained" color='error' size='small'>Discard</Button>}
                                </Stack>
                            </Stack>
                            <Button onClick={handleEditSeller} variant='contained' size='large' fullWidth>Edit Seller</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Paper>

            <Toaster />
        </>
    )
}

export default EditSeller