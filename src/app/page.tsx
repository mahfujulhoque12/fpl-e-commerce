import BestSelling from "@/components/organisms/best-selling/BestSelling";
import Brand from "@/components/organisms/brand/Brand";
import Delivary from "@/components/organisms/delivery/Delivary";
import FeatureCategory from "@/components/organisms/feature-category/FeatureCategory";
import FeatureProducts from "@/components/organisms/feature-products/FeatureProducts";
import Feedback from "@/components/organisms/feedback/Feedback";
import Hero from "@/components/organisms/hero/Hero";
import NewArraival from "@/components/organisms/new-arraival/NewArraival";
import StoreAddress from "@/components/organisms/store-address/StoreAddress";

export default function Page() {
  return (
    <div className="">
    <Hero/>
    <Feedback/>
    <FeatureCategory/>
    <StoreAddress/>
    <FeatureProducts/>
    <NewArraival/>
    <Delivary/>
    <BestSelling/>
    <Brand/>
    </div>
  );
}
