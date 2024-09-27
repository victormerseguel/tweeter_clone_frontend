import { HomeHeader } from "@/components/home/home-header";
import { TweetPost } from "@/components/tweet/tweet-post";
import { HomeFeed } from "@/components/home/home-feed";

export default function Page() {
  return (
    <div>
      <HomeHeader />
      <TweetPost />
      <HomeFeed />
    </div>
  );
}
