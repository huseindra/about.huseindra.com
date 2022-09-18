import Link from "next/link"
import { Container } from "../../components/Container"
import { MainLayout } from "../../components/MainLayout"

const About = () => {

    return(
       <Container>
        <MainLayout title='☕️ About Me'>
          I`m an <span className="line-through">average</span> software engineer who love web technologies. I have a mantra which is to learn, unlearn and relearn. 
          <br/><br/>
          Basically,  I love to learn and do practical things which are the fundamentals, it helps me to open my knowledge and connect the dots.
          For the last three years, I work as IT Project Manager as well as a freelance full-stack engineer but I am more comfortable with frontend development and React. 
          <br/><br/>
          In my spare time, I enjoy writing on my blog and watching Netflix.<br/><br/>
          <h2 className="font-bold text-xl">My Interest Area</h2>
          1. Product Management (SaaS, PaaS, and related)<br/>
          2. Technology Management(Agile Methodologies - Scrum,  ITSM - ITIL4 - <strong>certified</strong>, Project Management - Prince2 & PMBOK6, Program Management - PMI)<br/>
          3. Web Technology<br/>
          4. Servant Leadership<br/><br/>
          <h2 className="font-bold text-xl">Skills </h2>
          I have experience in production with.<br/>
          - Monolothic web services using Laravel, Django <br/>
          - Developing Fullstack App(MERN/PERN).<br/>
          - Web frontend using React & NextJS, Gatsby, Tailwind, Chakra & Bootstrap, Redux<br/>
          - Other technologies/services: Firebase, Contenfull, Heroku, VPS technology.<br/><br/>
          <h2 className="font-bold text-xl">Entrepreneurship Journey</h2>
            I have several Entrepreneurship journey such as:<br/>
            1. <Link href="https://monago.io"><a target="_blank">Monago(2022-now)</a></Link> - Headless CMS - <strong>nurturing</strong><br/>
            2. <Link href="https://dailysocial.id/post/aplikasi-tukutu"><a target="_blank">Tukutu(2018-2019)</a></Link> - eCommerce - <strong>closed</strong><br/>
            3. <Link href="https://www.instagram.com/kampusfund/"><a target="_blank">Kampusfund(2018)</a></Link> - Crowdfunding - <strong>closed</strong><br/>
            4. <Link href="https://zonaedukasi.huseindra.com"><a>Zona Edukasi(2014-2016)</a></Link> - Media & Event Students - <strong>closed</strong><br/>
            5.<Link href="https://www.facebook.com/huublamedia/"><a> Huubla(2013-2016)</a></Link>  - Media Blogs - <strong>closed</strong><br/><br/>
          <h2 className="font-bold text-xl">Leadership in Community Journey</h2>
          I have experience in building community from scratch such as.<br/>
          1. <Link href="https://www.facebook.com/huublamedia/"><a> Google Developer Students Clubs - Lead Chapter Dian Nuswantoro University (2018)</a></Link> 
        </MainLayout>
      </Container>
    )
}

export default About