import Banner from "../../Component/Banner/Banner";
import CoreCommitment from "../../Component/CoreCommitment/CoreCommitment";
import FormArea from "../../Component/FormArea/FormArea";
import ThreeStep from "../../Component/ThreeStep/ThreeStep";
import UserReviews from "../../Component/UserReviews/UserReviews";

const Home = () => {
  return (
    <div>
      <section id="banner">
        <Banner />
      </section>
      <div className="px-4 md:px-0">
        {" "}
        <section id="coreCommitment">
          <CoreCommitment />
        </section>
        <section id="steps">
          <ThreeStep />
        </section>
        <section id="reviews">
          <UserReviews />
        </section>
      </div>
      <section id="quote">
        <FormArea />
      </section>
    </div>
  );
};

export default Home;
