import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <>
        <Head>
            <title>DigitalKios</title>
        </Head>
        <Header />
            <div>
                {children}
            </div>
        <Footer />
    </>
  )
}

export default Layout;