import React from 'react'
import PageHead from '../components/PageHead'
import { Grid } from '@mui/material'
import AdminProfileBox from '../components/AdminProfileBox'
import AdminProfileEditBox from '../components/AdminProfileEditBox'
import { Toaster } from 'react-hot-toast'


const AdminProfile = () => {
  return (
    <>
      <PageHead heading='Settings' />
      <Grid container spacing={2} my={1}>
        <Grid item xs={12} md={3}>
          <AdminProfileBox />
        </Grid>
        <Grid item xs={12} md={9}>
          <AdminProfileEditBox />
        </Grid>
      </Grid>
      <Toaster />
    </>
  )
}

export default AdminProfile