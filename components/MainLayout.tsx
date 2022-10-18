import React from "react"

interface Props {
    title:string,
    subTitle:string,
    children?:React.ReactNode
}

export const MainLayout = (props:Props) => {
    return(
        <div className='flex flex-col w-full mx-auto max-w-2xl'>
          <div className='mt-12'>
            <div className='flex flex-col sm:flex-row sm:items-center'>
              <h1 className='text-2xl font-bold'>{props.title}</h1>
              <p className='mx-2 text-xs'>{props.subTitle}</p>
            </div>
          </div>
          <div className='mb-16 sm:mb-2'>
            {props.children}
          </div>
        </div>
    )
}
