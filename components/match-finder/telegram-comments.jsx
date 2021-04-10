import EmailMeFooter from "../email-footer";

export default function CallMe({ percentage }) {
    if (percentage >= 90) {
        return <EmailMeFooter title="We are a match!" text="Email me" />;
    }
    return null;
}
