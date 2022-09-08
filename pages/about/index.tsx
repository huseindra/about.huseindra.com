import { Container } from "../../components/Container"
import { MainLayout } from "../../components/MainLayout"

const About = () => {

    return(
       <Container>
        <MainLayout title='☕️ About Me'>
          I`m an <span className="line-through">average</span> software engineer who loves web technologies. I have a mantra that I always bring to my life which is a learn, unlearn and relearn. 
          I love entrepreneurship, I had built several things such as media blog, crowdfunding platform, and eCommerce but they mostly failed, that`s why I keep those mantras planted in my brain. Then I realized, I`m fascinated with technology and the community.
          <br/><br/>
          Basically,  I love to learn and do practical things which are the fundamentals, it helps me to open my knowledge and connect the dots.
          For the last three years, I work as IT Project Manager as well as a freelance full-stack engineer but I am more comfortable with frontend development and React. 
          <br/><br/>
          Currently, I am ...
          <br/><br/>
          In my spare time, I enjoy writing on my blog and watching Netflix.
          <h2 className="font-bold text-xl">My Interest Area</h2>
          <h2 className="font-bold text-xl">My Specialties Area</h2>
          <h2 className="font-bold text-xl">Skills</h2>
          <h2 className="font-bold text-xl">Trainings & Certifications</h2>
          <h2 className="font-bold text-xl">Entrepreneurship Journey</h2>
          <h2 className="font-bold text-xl">Leadership in Community Journey</h2>
        </MainLayout>
      </Container>
    )
}

export default About