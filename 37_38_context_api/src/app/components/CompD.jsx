import { useContext } from "react";
import { DataContext } from "../context/page";
function CompD() {
  const data = useContext(DataContext);
  return (
    <div>
      CompD
      <p>Data is {data}</p>
    </div>
  );
}

export default CompD;
