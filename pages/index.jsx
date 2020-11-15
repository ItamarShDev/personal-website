import AppLayout from "layouts/app-layout";
import { centered } from "../theme/theme";
import { Links, LanguagesList } from "components";
import Personal from "layouts/personal";
import FloatingButton from "components/floating-button";

export default function Home() {
    const { className, styles } = centered({ isColumns: true });
    return (
        <AppLayout title="Itamar Sharify">
            <div className={className}>
                <Personal />
                <Links />
                <LanguagesList />
                <FloatingButton />
            </div>
            {styles}
        </AppLayout>
    );
}
