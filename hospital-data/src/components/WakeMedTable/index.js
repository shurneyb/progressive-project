import Table from "../Table"
import wakemed_drg from "../../data/wakemed/drg"

class WakeMedTable extends Table {
  tableData = wakemed_drg;
  columns = [
    { titile: "code", field: "drg_code" },
    { title: "Description", field: "drg_description" },
    { title: "Average Price", field: "avg_price" }
  ];
  tableHeader = "WakeMed Hospital DRG";
}

export default WakeMedTable;