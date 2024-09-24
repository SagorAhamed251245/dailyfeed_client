import PostCards from "@/components/(Home)/PostCard/PostCards";
import TopAuthor from "@/components/(Home)/TopAuthor/TopAuthor";
import TopPost from "@/components/(Home)/TopPost/TopPost";

export default function Home() {
  return (
    <>
      <TopAuthor />
      <TopPost />

      <PostCards />
    </>
  );
}
