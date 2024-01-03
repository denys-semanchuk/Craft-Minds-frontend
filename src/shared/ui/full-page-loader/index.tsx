import {FallingLines} from 'react-loader-spinner'

export const FullPageLoader = () => {
    return <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <FallingLines
            color="#4fa94d"
            width="100"
            visible={true}
        />
    </div>
}
