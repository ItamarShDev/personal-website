import AppLayout from "../layouts/app-layout";
export async function getStaticProps() {
   return {
      props: {
         headerTitle: "Resume",
      },
   };
}
export default function Resume(props) {
   return (
      <AppLayout>
         <main>My stack</main>
      </AppLayout>
   );
}
