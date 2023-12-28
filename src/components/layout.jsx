import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <div className="text">{children}</div>
      </header>
    </div>
  );
}
