import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>BKW Design &amp; Development Consultancy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/bkw.svg" alt="BKW Logo" className="logo" />
        <a href="mailto:start@bk-w.com">start@bk-w.com</a>
      </main>

      <style jsx>{`
        main {
          padding: 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100vw;
        }
        a {
          text-decoration: none;
          border-bottom: 1px solid;
          font-weight: bold;
        }
        .logo {
          height: 16vw;
          margin-bottom: 8vw;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          color: #bdff00;
          background: #8d8d8d;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
          color: #bdff00;
        }
      `}</style>
    </div>
  );
}
