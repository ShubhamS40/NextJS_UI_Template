import React from 'react'
import { InfiniteCard } from './InfiniteCard'

function Review() {
    return (
        <div className='h-[40rem] flex-col flex justify-around items-center'>

            <div className="h-[50rem]  w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-around">
            <div className='text-4xl font-bold'>
                <h1>Hear Our Review:Feedback of Success</h1>
            </div>
            <div>
                <InfiniteCard>
                </InfiniteCard>
            </div>
            </div>
        </div>
    )
}

export default Review
