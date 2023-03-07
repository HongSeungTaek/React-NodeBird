import PropTypes from 'prop-types';
import Head from 'next/head';

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
            </Head>
            <Component/>
        </>
    )
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default App;