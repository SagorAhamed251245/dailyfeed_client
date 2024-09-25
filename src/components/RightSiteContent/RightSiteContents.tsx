import RandomAdvice from "./RandomAdvice";
import RecommendedTopic from "./RecommendedTopic/RecommendedTopic";
import SubscribeCard from "./SubscribeCard";
import SuggestedAuthor from "./SuggestedAuthor/SuggestedAuthor";

const RightSiteContents = () => {
  return (
    <>
      <RandomAdvice />
      <SubscribeCard />
      <RecommendedTopic />
      <SuggestedAuthor />
    </>
  );
};

export default RightSiteContents;
