import Appcontext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import Header from '@components/header';
import Script from 'next/script';

import '@styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <Appcontext.Provider value={initialState}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'GA_MEASUREMENT_ID');
            `}
      </Script>
      <Header />
      <Component {...pageProps} />
    </Appcontext.Provider>
  );
}

export default MyApp;
