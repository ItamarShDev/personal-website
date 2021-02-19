import PropTypes from "prop-types";
import Image from "next/image";

FunnyGif.propTypes = {
    percentage: PropTypes.number,
};

function Gif(props) {
    if (props.percentage > 90)
        return (
            <Image
                src="https://media.giphy.com/media/3orieRpuhW70wWhIju/giphy.gif"
                alt="we have a match gif"
                layout="fill"
                objectFit="contain"
            />
        );
    if (props.percentage > 30)
        return (
            <Image
                src="https://media.giphy.com/media/70nidvnqNadeEPHtWI/giphy.gif"
                alt="keep looking"
                layout="fill"
                objectFit="contain"
            />
        );
    return (
        <Image
            src="https://media.giphy.com/media/42wQXwITfQbDGKqUP7/giphy.gif"
            alt="start looking gif"
            layout="fill"
            objectFit="contain"
        />
    );
}
function Header({ percentage }) {
    if (percentage < 30) {
        return <h5>Start looking</h5>;
    }
    if (percentage < 90) {
        return <h5>keep looking</h5>;
    }
    return null;
}
function FunnyGif(props) {
    return (
        <div className="wrapper">
            <Header percentage={props.percentage} />
            <div className="gif">
                <Gif percentage={props.percentage} />
            </div>
            <style jsx>{`
                .wrapper {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    overflow: hidden;
                }
                .gif {
                    position: relative;
                    height: 200px;
                    width: 200px;
                }
            `}</style>
        </div>
    );
}

export default FunnyGif;
