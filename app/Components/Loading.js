import React from 'react'
import Image from 'next/image'
import img from '../../public/images/loading.gif'
export default function Loading() {
    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-9999 bg-white bg-opacity-50">
            <Image
                src={img}
                className="h-24 w-24 animate-spin"
                alt="Loading Spinner"
            />
        </div>

    )
}
