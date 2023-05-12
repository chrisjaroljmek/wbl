import "./App.css";
import { Header } from "./components/Header.jsx";

export function App() {
  return (
    <>
      <Header />
      <div className="border h-96 relative">
        <h2 className="absolute top-0 bottom-0 m-auto">
          wbl digital creates web engagements and purposeful products that are
          used by real people
        </h2>
      </div>
      <h2>What we do</h2>
      <div className="flex">
        <div className="border rounded-full w-24 h-24"></div>
        <div>
          <h3>Purposing</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="border rounded-full w-24 h-24"></div>
        <div>
          <h3>Purposing</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="shrink-0 grow-0 border rounded-full w-[150px] h-[150px]"></div>
        <div className="w-full">
          <h3>Purposing</h3>
          <h3>Purposing</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
    </>
  );
}
