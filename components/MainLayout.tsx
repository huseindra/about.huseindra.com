import React from "react"

interface Props {
    title:string,
    children?:React.ReactNode
}

export const MainLayout = (props:Props) => {
    return(
        <div className='flex flex-col w-full mx-auto max-w-2xl'>
          <div className='mt-12'>
            <h1 className='text-2xl font-bold'>{props.title}</h1>
          </div>
          <div className=''>
            {props.children}
          </div>
        </div>
    )
}
