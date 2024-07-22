import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Card from "./Components/Card";
import Businesses from "./Components/Businesses";
import FinanceServices from "./Components/FinanceServices";
import OurProcess from "./Components/OurProcess";
import ServicesSlider from "./Components/ServicesSlider";
import Achievement from "./Components/Achievement";
import Team from "./Components/Team";
import Box from "./Components/Box";
import Testimonials from "./Components/Testimonials";
import News from "./Components/News";
import Footer from "./Components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.Page_Container}>
      <Nav />
      <Header />
      <Card />
      <Businesses />
      <FinanceServices />
      <OurProcess />
      <ServicesSlider />
      <Achievement />
      <Team />
      <Box />
      <Testimonials />
      <News />
      <Footer />
    </div>
  );
}
