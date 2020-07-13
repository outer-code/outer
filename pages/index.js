import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>OUTER</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/outer.svg" alt="OUTER Logo" className="logo" />
        <h1 className="title">OUTER</h1>
        <p className="description">Design and development consultancy</p>
        <a href="mailto:outer@hey.com">Start a project</a>
      </main>

      <style jsx>{`
        .container {
          height: 100vh;
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: #4200ff;
          background: #f9f9f9;
          text-decoration: none;
          padding: 1ch 2ch;
          border-radius: 2ch;
        }

        a:hover {
          background: #4200ff;
          color: #fff;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .logo {
          width: 16ch;
          margin-bottom: 4ch;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          color: #4200ff;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
