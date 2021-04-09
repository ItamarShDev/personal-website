const EmailMeFooter = ({ theme, blog }) => {
    const emailTitle = `Re: ${encodeURI(blog.title)}`;
    const mailTo = `"mailto:itamarsharifytech@gmail.com?subject=${emailTitle}`;
    return (
        <address>
            <p>
                Having thoughts? email me
                <a href={mailTo}>here</a>
            </p>
            <style jsx>{`
                address {
                    color: ${theme.paragraph};
                    font-size: 1.5rem;
                    font-style: italic;
                    border-top: 1px dotted ${theme.text};
                }
                a {
                    margin-inline-start: 5px;
                }
            `}</style>
        </address>
    );
};
export default EmailMeFooter;
