import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html len="en">
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="title" content="Itamar Sharify" />
                    <meta
                        name="description"
                        content="Itamar Sharify's personal website"
                    />

                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://itamar.tech/" />
                    <meta property="og:title" content="Itamar Sharify" />
                    <meta
                        property="og:description"
                        content="Itamar Sharify's personal website"
                    />
                    <meta
                        property="og:image"
                        content="https://itamar.tech/images/meta-image.png"
                    />
                    <meta
                        property="og:site_name"
                        content="Itamar Sharify's personal website"
                    />
                    <meta
                        name="twitter:image:alt"
                        content="Itamar Sharify's personal websitee"
                    />

                    <meta property="twitter:card" content="website" />
                    <meta property="twitter:title" content="Itamar Sharify" />
                    <meta
                        property="twitter:url"
                        content="https://itamar.tech/"
                    />
                    <meta
                        property="twitter:description"
                        content="Itamar Sharify's personal website"
                    />
                    <meta
                        property="twitter:image"
                        content="https://itamar.tech/images/meta-image.png"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
