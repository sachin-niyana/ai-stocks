import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Invest from "@/components/Invest";
import MoneyControl from "@/components/MoneyControl";
import Nasdaq from "@/components/Nasdaq";
import YCharts from "@/components/YCharts";
import Authors from "@/components/Authors";
import Trending from "@/components/Trending";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="!scroll-smooth transition-all ease-in-out duration-1000">
      <BackToTop />
      <Header />
      <Authors />
      <Invest />
      <YCharts />
      <Trending />
      <MoneyControl />
      <Nasdaq />
      <Footer />
    </div>
  );
}
