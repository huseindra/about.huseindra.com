import Head from "next/head";
import { Footer } from "./Footer"
import { MobileNavbar, Navbar } from "./Navbar"

type Props = {
    children?: React.ReactNode
}

const meta = {
    title: 'Husein Ik – Software engineer, writer, entrepreneur.',
    description: `Front-end developer, JavaScript enthusiast.`,
    type: 'website',
  };

export const Container = (props:Props) => {
    return(
    <div className=''>
    <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
    </Head>
      <Navbar />

      <main className='flex flex-col px-8'>
        {props.children}
        <Footer/>
        <MobileNavbar />
      </main>
    </div>
    )
}