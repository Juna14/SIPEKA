import { fetchUser } from '@/helper/api/api'
import { isError, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Single = () => {
    const router = useRouter()
    const id = typeof router.query?.id === "string" ? router.query.id : ""
    const {data, error, isLoading, isSuccess, isError} = useQuery({
        queryKey: ['user', id],
        queryFn: () => null,
        enabled: id.length > 0
    })

    if (isLoading) {
        return <>
        Loading
        </>
    }
    if (isSuccess) {
        return <>
        data {JSON.stringify(data)}
        </>
    }
    if (isError) {
        return <>
        error {JSON.stringify(error)}
        </>
    }
  return (
    <></>
  )
}

export default Single