import { Autocomplete, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { countries } from '../countryDatas'
import { useDispatch, useSelector } from 'react-redux'
import { profileEditAdmin } from '../redux/userSlice'
import { userSchema } from '../formValidation/profileEditValidation'
import toast, { Toaster } from 'react-hot-toast';


const AdminProfileEditBox = () => {

    const dispatch = useDispatch()
    const admin = useSelector(state => state.userReducer.admin)
    const [adminData, setAdminData] = useState({})
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (admin) {
            setAdminData(admin)
        }
    }, [admin])

    const updateAdminProfile = async () => {
        console.log(adminData)
        try {
            await userSchema.validate(adminData, { abortEarly: false })
            const { _id, __v, ...others } = adminData
            console.log(others)
            dispatch(profileEditAdmin(others))
            setErrors({})
            setAdminData(admin)
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
            <Stack p={2} spacing={1}>
                <Typography variant='h6' sx={{ fontWeight: 'bold', opacity: '.9' }} >My Profile Details</Typography>
                <Grid container spacing={2} pr={3}>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={4}>
                            <TextField value={admin && adminData?.fullName} onChange={(e) => setAdminData({ ...adminData, fullName: e.target.value })} InputLabelProps={{ shrink: true }} InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }} fullWidth label="Name" variant="filled" />
                            <TextField error={errors.email} helperText={errors.email} value={admin && adminData?.email} onChange={(e) => setAdminData({ ...adminData, email: e.target.value })} InputLabelProps={{ shrink: true }} InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }} fullWidth label="Email" variant="filled" />
                            <TextField error={errors.phoneNum} helperText={errors.phoneNum} value={admin && adminData?.phoneNum ? adminData?.phoneNum : null} onChange={(e) => setAdminData({ ...adminData, phoneNum: e.target.value })} type='number' InputLabelProps={{ shrink: true }} InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }} fullWidth label="Phone Number" variant="filled" />
                            <TextField value={admin && adminData?.birthday ? adminData?.birthday : null} onChange={(e) => setAdminData({ ...adminData, birthday: e.target.value })} name='birthday' InputLabelProps={{ shrink: true }}
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
                                    value={admin && adminData?.gender ? adminData?.gender : ""}
                                    onChange={(e) => setAdminData({ ...adminData, gender: e.target.value })}
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
                                value={admin && adminData?.address ? adminData?.address : ""}
                                onChange={(e) => setAdminData({ ...adminData, address: e.target.value })}
                                InputLabelProps={{ shrink: true }}
                                InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }}
                                fullWidth
                                label="Street Address"
                                type='text'
                                variant="filled" />
                            <TextField error={errors.zipCode} helperText={errors.zipCode} value={admin && adminData?.zipCode ? adminData?.zipCode : null} onChange={(e) => setAdminData({ ...adminData, zipCode: e.target.value })} InputLabelProps={{ shrink: true }} InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }} fullWidth label="Zip Code" variant="filled" />
                            <TextField value={admin && adminData?.city ? adminData?.city : null} onChange={(e) => setAdminData({ ...adminData, city: e.target.value })} InputLabelProps={{ shrink: true }} InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }} fullWidth label="City" type='text' variant="filled" />
                            <Autocomplete
                                onChange={(e, newVal) => setAdminData({ ...adminData, country: newVal })}
                                value={admin && adminData?.country ? adminData?.country : ""}
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
                <Stack justifyContent={'flex-end'} direction={{ md: 'row', xs: 'column' }}>
                    <Button onClick={updateAdminProfile} variant='contained' color='success' size='large' >Update Informations</Button>
                </Stack>
            </Stack>
        </Paper >
    )
}

export default AdminProfileEditBox