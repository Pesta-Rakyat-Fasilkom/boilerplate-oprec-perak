import React from 'react'
import Image from 'next/image'

const ImageContainer = () => {
    return (
        <div className='h-48 w-48'>
            <div className='h-full w-full bg-purple-700 rounded-md flex items-center justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-400 duration-300'>
                <div className='m-2 bg-purple-900 rounded-md hover:bg-green-600 duration-300'>
                    <div className='m-5'>
                       <img src='https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageContainer