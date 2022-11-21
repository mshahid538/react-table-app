import React, { useState } from "react";
import TableComp from "../TableComp";
import GridComp from "../GridComp";
import TableRowsIcon from "@mui/icons-material/TableRows";
import GridViewIcon from "@mui/icons-material/GridView";

function CompoundComp() {
  const [isTable, setIsTable] = useState(true);
  const [data, setData] = useState([]);

  React.useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((items) => setData(items.products));
  }, []);

  const handleTableLayout = () => {
    setIsTable(true);
  };
  const handleGridLayout = () => {
    setIsTable(false);
  };
  return (
    <>
      <div style={{ textAlign: "right" }}>
        <button
          onClick={handleTableLayout}
          style={{ marginRight: "10px", marginBottom: "10px" }}
          title="Table View"
        >
          {<TableRowsIcon color="success" />}
        </button>
        <button
          title="Grid View"
          onClick={handleGridLayout}
          style={{ marginRight: "10px" }}
        >
          {<GridViewIcon color="success" />}
        </button>
      </div>

      {isTable ? <TableComp data={data} /> : <GridComp data={data} />}
    </>
  );
}

export default CompoundComp;
