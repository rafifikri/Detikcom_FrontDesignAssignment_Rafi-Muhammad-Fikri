import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="text overflow-auto">{children}</div>
    </div>
  );
}
