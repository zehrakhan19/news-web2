import "./App.css";
import TopHeader from "./Components/top-header/TopHeader";
import Header from "./Components/header/Header";
import Banner from "./Components/banner/Banner";
import AdSection from "./Components/google-ad-section/AdSection";
import NewsSection from "./Components/news-section/NewsSection";
import FashionStyle from "./Components/fashion-and-style/FashionStyle";
import PoliticleWorld from "./Components/political-and-world/PoliticleWorld";
import EntertainmentFun from "./Components/entertainment-and-fun/EntertainmentFun";
import PaginationRounded from "./Components/pagination/Pagination";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div className="app-wrapper">
      <div className="ad">
        <div>Advertisement</div>
      </div>
      <div className="app">
        <TopHeader />
        <Header />
        <Banner />
        <div className="content-news-wrapper">
          <div className="left-content">
            <NewsSection />
            <AdSection />
            <FashionStyle />
            <PoliticleWorld />
            <EntertainmentFun />
            <PaginationRounded />
          </div>
          <div className="right-content">Advertisement</div>
        </div>

        <Footer />
      </div>
      <div className="ad">
        <div>Advertisement</div>
      </div>
    </div>
  );
}

export default App;
