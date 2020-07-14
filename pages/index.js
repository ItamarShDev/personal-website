import AppLayout from "../layouts/app-layout";
import { Grid } from "../theme/theme";
import Card from "@components/card";

export default function Home() {
  return (
    <AppLayout title="Itamar Sharify">
      <div className="grid">
        <Card route="resume" title="Resume &rarr;" subTitle="Resume Timeline" />
        <Card route="uses" title="Uses &rarr;" subTitle="Favorite stack" />
        <Card
          route="blog"
          title="Blog &rarr;"
          subTitle="My Development journy"
        />
        <Card
          route="personal"
          title="Let's get personal &rarr;"
          subTitle="Learn about me"
        />
      </div>
      <style jsx>{Grid}</style>
    </AppLayout>
  );
}
