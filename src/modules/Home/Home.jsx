import React from "react";
import Banner from "./Banner/Banner";
import ContentMiniwood from "./ContentMiniwood/ContentMiniwood";


import BestSeller from "./BestSeller/BestSeller";

import TrendingProducts from "./TrendingProducts/TrendingProducts";
import Collection from "./Collection/Collection";
import Feedback from "./Feedback/Feedback";
import Coop from "./Coop/Coop";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Banner />
      <ContentMiniwood />

      <TrendingProducts />
      <BestSeller />
      <Collection />
      <Feedback />
      <Coop />
      <Footer />
 
    </div>
  );
}
