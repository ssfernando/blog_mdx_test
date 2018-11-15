import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono"
        rel="stylesheet"
      />
    </Head>
    <style jsx global>{`
      body {
        margin: 0;
        font: 12px 'IBM Plex Mono';
      }

      a {
        color: black;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </div>
)
