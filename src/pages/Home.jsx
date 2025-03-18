import Banner from "../components/HomeComponents/Banner/Banner"
import ProcessSection from "../components/HomeComponents/ProcessSection/ProcessSection"
import Profile from "../components/HomeComponents/profileSection/Profile"


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Profile></Profile>
      <ProcessSection/>
    </div>
  )
}

export default Home