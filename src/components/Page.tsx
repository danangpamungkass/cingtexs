import Header from "./common/Header";
import HeroSection from "./common/HeroSection";
import ProfileGrid from "./collection/ProfileGrid";
import ProductSection from "./productList/ProductSection";
import Footer from "./common/Footer";

const Pages = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <ProfileGrid />
            <ProductSection />
            <Footer />
        </>
    );
};

export default Pages;