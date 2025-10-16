import Banner from "../../Component/Banner/Banner";
import CoreCommitment from "../../Component/CoreCommitment/CoreCommitment";
import FormArea from "../../Component/FormArea/FormArea";
import ThreeStep from "../../Component/ThreeStep/ThreeStep";
import UserReviews from "../../Component/UserReviews/UserReviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="px-4 md:px-0">
        {" "}
        <CoreCommitment></CoreCommitment>
        <ThreeStep></ThreeStep>
        <UserReviews></UserReviews>
      </div>
      <FormArea></FormArea>
    </div>
  );
};

export default Home;
