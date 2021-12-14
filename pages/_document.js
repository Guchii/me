import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet" />
          <meta name="google-site-verification" content="umuE18l7ZJfhDqnvm0EA1YE40Wtc3ikWpkxM5FyEUE8" />
          <meta name="description" content="Hi, My name is Shivom Srivastava. I am a Frontend Developer, Learning Data Scientist and an Anime enthusiast. You can download my resume or contact me with the links present on this website. This website also has some of my micro projects embedded as well. Enjoy!" />
          <meta property="og:title" content="Shivom Srivastava's Website" />
          <meta property="og:image" content="/naruto1.jpg" />
          <meta property="og:description" content="Hi, My name is Shivom Srivastava. This website showcases my skills and projects." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument