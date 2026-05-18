import TopStrip from "./TopStrip";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="app">
    <TopStrip />
    <Navbar />
    <main className="page-main">{children}</main>
    <Footer />
  </div>
);

export default Layout;
