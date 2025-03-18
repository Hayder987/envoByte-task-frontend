import bannerBg from "../../../assets/images//answer-bg.png";
import BannerSectionTitle from "../../common-components/BannerSectionTitle";
import AnswerSection from "../AnswerSection/AnswerSection";

const Profile = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
      className="pb-20"
    >
      <AnswerSection></AnswerSection>
      <BannerSectionTitle
       shortTitle={'UI/UX PORTFOLIO'}
       mainTitle={'Check Our Previous Work'}
       color={false}
       btnName={'All Portfolio'}
      />

    </div>
  );
};

export default Profile;
