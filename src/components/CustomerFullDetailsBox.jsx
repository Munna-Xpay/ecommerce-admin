import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Autocomplete, Button, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Paper, Select, Stack, Switch, TextField, Typography } from '@mui/material'
import { countries } from '../countryDatas'
import { profileEditCustomer } from '../redux/userSlice'
import { userSchema } from '../formValidation/profileEditValidation'

const CustomerFullDetailsBox = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const customer = useSelector(state => state.userReducer.allUsers?.find(item => item._id == id))
    // console.log(customer)

    const [customerData, setCustomerData] = useState({})
    const [errors, setErrors] = useState({})
    console.log(customerData)


    useEffect(() => {
        if (customer) {
            setCustomerData(customer)
        }
    }, [customer])

    const updateCustomerProfile = async () => {
        console.log(customerData)
        try {
            await userSchema.validate(customerData, { abortEarly: false })
            const { _id, __v, ...others } = customerData
            console.log(others)
            dispatch(profileEditCustomer({ userData: others, id: customer._id }))
            setErrors({})
            setCustomerData(customer)
        } catch (err) {
            console.log(err)
            const newErrors = {};
            err.inner.forEach((error) => {
                newErrors[error.path] = error.message;
            });
            setErrors(newErrors);
            console.log(newErrors)
        }

    }

    return (
        <Paper>
            <Stack p={1} spacing={1}>
                <Typography variant='h6' sx={{ fontWeight: 'bold', opacity: '.9' }} >My Profile Details</Typography>
                <Grid container spacing={2} pr={3}>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={4}>
                            <TextField value={customer && customerData?.fullName} onChange={(e) => setCustomerData({ ...customerData, fullName: e.target.value })} InputLabelProps={{ shrink: true }} InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }} fullWidth label="Name" variant="filled" />
                            <TextField error={errors.email} helperText={errors.email} value={customer && customerData?.email} onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })} InputLabelProps={{ shrink: true }} InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }} fullWidth label="Email" variant="filled" />
                            <TextField error={errors.phoneNum} helperText={errors.phoneNum} value={customer && customerData?.phoneNum ? customerData?.phoneNum : null} onChange={(e) => setCustomerData({ ...customerData, phoneNum: e.target.value })} type='number' InputLabelProps={{ shrink: true }} InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }} fullWidth label="Phone Number" variant="filled" />
                            <TextField value={customer && customerData?.birthday ? customerData?.birthday : null} onChange={(e) => setCustomerData({ ...customerData, birthday: e.target.value })} name='birthday' InputLabelProps={{ shrink: true }}
                                InputProps={{ disableUnderline: true, style: { borderRadius: '7px' }, min: '1900-01-01', max: '2100-12-31' }}
                                fullWidth label="Birthday" type='date' variant="filled" />

                            <FormControl style={{ borderRadius: '7px' }} sx={{ backgroundColor: '#f2f4f5' }} fullWidth >
                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                <Select
                                    style={{ borderRadius: '7px' }}
                                    sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name='gender'
                                    label="Gender"
                                    value={customer && customerData?.gender ? customerData?.gender : ""}
                                    onChange={(e) => setCustomerData({ ...customerData, gender: e.target.value })}
                                >
                                    <MenuItem value={'Male'}>Male</MenuItem>
                                    <MenuItem value={'Female'}>Female</MenuItem>
                                    <MenuItem value={'Others'}>Others</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={4}>
                            <TextField
                                value={customer && customerData?.address ? customerData?.address : ""}
                                onChange={(e) => setCustomerData({ ...customerData, address: e.target.value })}
                                InputLabelProps={{ shrink: true }}
                                InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }}
                                fullWidth
                                label="Street Address"
                                type='text'
                                variant="filled" />
                            <TextField error={errors.zipCode} helperText={errors.zipCode} value={customer && customerData?.zipCode ? customerData?.zipCode : null} onChange={(e) => setCustomerData({ ...customerData, zipCode: e.target.value })} InputLabelProps={{ shrink: true }} InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }} fullWidth label="Zip Code" variant="filled" />
                            <TextField value={customer && customerData?.city ? customerData?.city : null} onChange={(e) => setCustomerData({ ...customerData, city: e.target.value })} InputLabelProps={{ shrink: true }} InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }} fullWidth label="City" type='text' variant="filled" />
                            <Autocomplete
                                onChange={(e, newVal) => setCustomerData({ ...customerData, country: newVal })}
                                value={customer && customerData?.country ? customerData?.country : ""}
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
                        </Stack>
                    </Grid>
                </Grid>
                <Stack justifyContent={'flex-end'} spacing={5} alignItems={'center'} direction={{ md: 'row', xs: 'column' }}>
                    <FormControlLabel
                        control={<Switch checked={customerData?.isBlocked} onChange={(e) => setCustomerData({ ...customerData, isBlocked: e.target.checked })} />}
                        label="Block User"
                    />
                    <Button onClick={updateCustomerProfile} variant='contained' color='success' size='small' >Update Informations</Button>
                </Stack>
            </Stack>
        </Paper >
    )
}

export default CustomerFullDetailsBox