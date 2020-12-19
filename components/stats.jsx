import dynamic from "next/dynamic";

const Abilities = dynamic(() => import("components/charts/abilities"), {
    ssr: false,
    loading: () => <div>Loading...</div>,
});

const SocialAffect = dynamic(() => import("components/charts/social"), {
    ssr: false,
    loading: () => <div>Loading...</div>,
});
Stats.propTypes = {};

function Stats(props) {
    const labels = ["Python", "Node.js", "Javascript", "CSS", "React.js"];
    const values = [{ title: "Abilities", values: [70, 30, 90, 90, 80] }];
    return (
        <div>
            <div className="flex">
                <span>
                    <Abilities labels={labels} values={values} />
                </span>
                <span>
                    <SocialAffect />
                </span>
            </div>
            <style jsx>{`
                div.flex {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </div>
    );
}

export default Stats;
