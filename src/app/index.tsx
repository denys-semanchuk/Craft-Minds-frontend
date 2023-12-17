import type {AppProps} from 'next/app'
import {Header} from "@/widgets/header";
import {WithProviders} from "./withProviders";
import './styles/index.scss'

const App = ({Component, pageProps}: AppProps) => {
    return <WithProviders>
        <Header/>
        <Component {...pageProps} />
    </WithProviders>
}
export default App