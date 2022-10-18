import Link from "next/link"

export const Footer = () => {
    return(
        <footer className='hidden sm:block w-full justify-between mx-auto max-w-2xl my-8 text-center text-sm'>
          Built with <Link href={"https://nextjs.org/"} ><a className='font-bold hover:text-blue-500 hover:underline hover:underline-offset-2 cursor-pointer' target={"_blank"}>Next.js</a></Link>,<Link href={"https://tailwindcss.com/"} ><a className='font-bold hover:text-blue-500 hover:underline hover:underline-offset-2 cursor-pointer' target={"_blank"}>Tailwind</a></Link> and <Link href={"https://vercel.com/"} ><a  className='font-bold hover:text-blue-500 hover:underline hover:underline-offset-2 cursor-pointer' target={"_blank"}>Vercel</a></Link>
        </footer>
    )
}
