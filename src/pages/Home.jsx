import SectionDivider from "../components/common-components/SectionDivider"
import Banner from "../components/HomeComponents/Banner/Banner"
import ClientSection from "../components/HomeComponents/ClientSection/ClientSection"
import ProcessSection from "../components/HomeComponents/ProcessSection/ProcessSection"
import Profile from "../components/HomeComponents/profileSection/Profile"


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Profile></Profile>
      <ProcessSection/>
      <SectionDivider/>
      <ClientSection/>
    </div>
  )
}

export default Home