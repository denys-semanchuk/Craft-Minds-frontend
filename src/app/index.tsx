import type {AppProps} from 'next/app'
import {Header} from "@/widgets/header";
import './styles/index.scss'
import {withProviders} from "@/app/withProviders";

const App = ({Component, pageProps}: AppProps) => {

    return <>
        <Header/>
        <Component {...pageProps} />
    </>
}
export default withProviders(App)