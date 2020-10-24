import AppLayout from "../layouts/app-layout";
import { centered } from "../theme/theme";
import Card from "@components/Card";
import Personal from "@layouts/Personal";
export default function Home() {
  const { className, styles } = centered({ isColumns: true });
  return (
    <AppLayout title="Itamar Sharify">
      <Personal />

      <div className={className}>
        <Card route="resume" title="Resume &rarr;" subTitle="Resume Timeline" />
        <Card
          route="blog"
          title="Blog &rarr;"
          subTitle="My Development Journy"
        />
      </div>
      {styles}
    </AppLayout>
  );
}
