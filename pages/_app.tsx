import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import { AppProps } from 'next/dist/shared/lib/router/router';

const supportedChainIds = [4];
const connectors = {
  injected: {}
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp
