import { SessionProvider } from "next-auth/react";
import '../styles/globals.css'; // Assicurati di avere i tuoi stili tailwind

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;