import SectionDivider from "../components/common-components/SectionDivider"
import Banner from "../components/HomeComponents/Banner/Banner"
import ClientSection from "../components/HomeComponents/ClientSection/ClientSection"
import FaqSection from "../components/HomeComponents/Faq/FaqSection"
import ProcessSection from "../components/HomeComponents/ProcessSection/ProcessSection"
import Profile from "../components/HomeComponents/profileSection/Profile"
import TeamSection from "../components/HomeComponents/TeamSection/TeamSection"


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Profile></Profile>
      <ProcessSection/>
      <SectionDivider/>
      <ClientSection/>
      <SectionDivider/>
      <TeamSection/>
      <SectionDivider/>
      <FaqSection/>
      <SectionDivider/>
    </div>
  )
}

export default Home