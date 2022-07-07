import "../styles/globals.css";
import { StyledWrapper } from "../styles/styled_components";
import Layout from "../Components/Shared/Layout";
import { Provider } from "react-redux";
import {store} from "../Redux/Store"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <StyledWrapper>
          <Component {...pageProps} />
        </StyledWrapper>
      </Layout>
    </Provider>
  );
}

export default MyApp;
