import Header from "@/components/Header";
import Invest from "@/components/Invest";
import Marquee from "@/components/Marquee";
import YCharts from "@/components/YCharts";

export default function Home() {
  return (
    <div>
      <Header />
      <Marquee />
      {/* <Invest /> */}
      <YCharts />
    </div>
  );
}
