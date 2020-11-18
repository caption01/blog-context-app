import { FunctionComponent } from "react";

const MainPage: FunctionComponent = () => {
  return (
    <>
      <main id="index" style={{ height: "70vh", backgroundColor: "#EBF2F4" }}>
        index secton
      </main>

      <section
        id="article"
        style={{ height: "70vh", backgroundColor: "#EBF2F4" }}
      >
        article secton
      </section>

      <section
        id="footer"
        style={{ height: "70vh", backgroundColor: "#EBF2F4" }}
      >
        footer secton
      </section>
    </>
  );
};

export default MainPage;
