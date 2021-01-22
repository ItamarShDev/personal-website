import PropTypes from "prop-types";

FunnyGif.propTypes = {
    percentage: PropTypes.number,
};

function Gif(props) {
    if (props.percentage > 90)
        return (
            <img
                height="200px"
                src="https://media.giphy.com/media/3orieRpuhW70wWhIju/giphy.gif"
                alt="we have a match gif"
            />
        );
    if (props.percentage > 30)
        return (
            <>
                <h5>Keep looking</h5>
                <img
                    height="200px"
                    src="https://media.giphy.com/media/70nidvnqNadeEPHtWI/giphy.gif"
                    alt="keep looking"
                />
            </>
        );
    return (
        <>
            <h5>Start looking</h5>
            <img
                height="200px"
                src="https://media.giphy.com/media/42wQXwITfQbDGKqUP7/giphy.gif"
                alt="start looking gif"
            />
        </>
    );
}

function FunnyGif(props) {
    return (
        <div>
            <Gif percentage={props.percentage} />
            <style jsx>{`
                div {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                }
            `}</style>
        </div>
    );
}

export default FunnyGif;
