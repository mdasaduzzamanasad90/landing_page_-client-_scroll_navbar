import Banner from "../../Component/Banner/Banner";
import CoreCommitment from "../../Component/CoreCommitment/CoreCommitment";
import FormArea from "../../Component/FormArea/FormArea";
import ScrollToTop from "../../Component/ScrollToTop/ScrollToTop";
import ThreeStep from "../../Component/ThreeStep/ThreeStep";
import UserReviews from "../../Component/UserReviews/UserReviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <ScrollToTop></ScrollToTop>
      <div className="px-4 md:px-0">
        <CoreCommitment />
        <ThreeStep />
        <UserReviews />
      </div>
      <FormArea />
    </div>
  );
};

export default Home;
