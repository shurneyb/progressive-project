import Table from "../Table"
import duke_drg from "../../data/duke/drg"

class DukeTable extends Table {
  tableData = duke_drg;
  columns = [
    { titile: "code", field: "drg_code" },
    { title: "Description", field: "drg_description" },
    { title: "Average Price", field: "avg_price" }
  ];
  tableHeader = "Duke University Hospital DRG";
}

export default DukeTable;