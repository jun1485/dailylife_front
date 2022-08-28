import { useState } from "react";
import Cards from "../card/card";
import Paging from "../Pagination/Pagination";

export default function Main() {
  const [modalOpacity, setModalOpacity] = useState(0);

  return (
    <>
      <Cards setModalOpacity={setModalOpacity} modalOpacity={modalOpacity} />
      <Paging />
    </>
  );
}
