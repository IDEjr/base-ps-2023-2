import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Netlify Widget ... spoliers com que trabalhamos?*/}
          <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
          <title>Site PS 2023/2</title>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* spoliers com que trabalhamos?*/}
          <script dangerouslySetInnerHTML={{
            __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
          `}}/>
        </body>
      </Html>
    )
  }
}

export default MyDocument