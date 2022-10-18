import Image from "next/image"
import Link from "next/link"
import React from "react"

type Props = {
    category?:string,
    title:string,
    image?:string,
    author?:string,
    name?:string,
    published?:string,
    data?:any,
    url?:any
}

const ListBlog = (props:Props) => {
    return(
        <Link href={props.url} >
            <a target={"_blank"}>
                <div className="max-w-sm w-full lg:max-w-full lg:block mt-4">
                <div className="blog-list border rounded-md rounded p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-1">
                    <p className="text-xs sm:text-sm text-gray-600 flex items-center">
                        #
                        {props.category}
                    </p>
                    <div className="my-1 font-bold text-md sm:text-xl mb-2">{props.title}</div>
                    </div>
                    <div className="flex items-center">
                        <img className="w-10 h-10 rounded-full mr-4" src={'/hik.jpeg'} alt={props.image} />

                    <div className="text-sm">
                        <p className=" leading-none">{props.author}</p>
                        <p className="text-gray-600">{props.published}</p>
                    </div>
                    </div>
                </div>
                </div>
            </a>
        </Link>
    )
}

export default ListBlog