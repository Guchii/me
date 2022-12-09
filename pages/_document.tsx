import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Hi, My name is Shivom Srivastava. I am a Frontend Developer, Learning Data Scientist and an Anime enthusiast. You can download my resume or contact me with the links present on this website. This website also has some of my micro projects embedded as well. Enjoy!"
          />
          <meta property="og:title" content="Shivom Srivastava's Website" />
          <meta property="og:image" content="/naruto1.jpg" />
          <meta
            property="og:description"
            content="Hi, My name is Shivom Srivastava. This website showcases my skills and projects."
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@400;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body style={{ overflowX: "hidden" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
