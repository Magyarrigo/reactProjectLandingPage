import Aboutus from "./elements/Aboutus/Aboutus";
import Footer from "./elements/Footer/Footer";
import Header from "./elements/Header/Header";
import Offer from "./elements/Offer/Offer";
import PageBanner from "./elements/Pagebanner/Pagebanner";

function App() {
  const pageTitle = "Nasza firma oferuje najwyższej jakości produkty";
  const description = "Nie wierz nam na słowo - sprawdź";
  const offerTitle = "Czym zajmuje się nasza Firma?";
  return (
    <>
      <Header />
      <PageBanner
        title={pageTitle}
        description={description}
        buttonText="oferta"
      />
      <Aboutus />
      <Offer offerTitle={offerTitle} />
      <Footer />
    </>
  );
}

export default App;
