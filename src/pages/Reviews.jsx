import React, { useEffect } from 'react'
import PageHead from '../components/PageHead'
import ReviewsAndUsers from '../components/ReviewsAndUsers'
import AllReviews from '../components/AllReviews'
import { useDispatch } from 'react-redux'
import { fetchAllReviewStat } from '../redux/reviewSlice'

const Reviews = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllReviewStat(''))
  }, [])

  return (
    <>
      <PageHead heading='Reviews' />
      <ReviewsAndUsers />
      <AllReviews />
    </>
  )
}

export default Reviews