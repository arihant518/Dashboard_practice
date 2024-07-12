import React from "react";
import MUIDataTable from "mui-datatables";
import Chip from '@mui/material/Chip';
import moment from 'moment';

const columns = [
  {
    name: "name",
    label: "Name",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "order_date",
    label: "Order Date",
    options: {
      filter: false,
      sort: true,
      customBodyRender: (value) => moment(value).format('MMMM Do YYYY'),
    },
  },
  {
    name: "order_type",
    label: "Order Type",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "tracking_id",
    label: "Tracking ID",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "order_total",
    label: "Order Total",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "status",
    label: "Status",
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value) => (
        <Chip
        label={value}
        style={{
          backgroundColor: value === "Pending" ? '#FFF2E2' : '#519C66',
          color: value === "Pending" ? '#D45D5D' : '#FFFFFF',
          variant: 'outlined',
          height:'20px'
        }}
      />
      ),
    },
  },
];

const data = [
  { name: "Joe James", order_date: "2023-01-15", order_type: "Online", tracking_id: "ABC123", order_total: "$100", status: "Pending" },
  { name: "John Walsh", order_date: "2023-02-10", order_type: "In-Store", tracking_id: "XYZ456", order_total: "$200", status: "Complete" },
  { name: "Bob Herm", order_date: "2023-03-05", order_type: "Online", tracking_id: "LMN789", order_total: "$150", status: "Pending" },
  { name: "James Houston", order_date: "2023-04-20", order_type: "In-Store", tracking_id: "QRS012", order_total: "$250", status: "Complete" },
  { name: "James Houston", order_date: "2023-04-20", order_type: "In-Store", tracking_id: "QRS012", order_total: "$250", status: "Pending" },
  { name: "James Houston", order_date: "2023-04-20", order_type: "In-Store", tracking_id: "QRS012", order_total: "$250", status: "Complete" },
  { name: "James Houston", order_date: "2023-04-20", order_type: "In-Store", tracking_id: "QRS012", order_total: "$250", status: "Pending" },
  { name: "James Houston", order_date: "2023-04-20", order_type: "In-Store", tracking_id: "QRS012", order_total: "$250", status: "Complete" },
  { name: "James Houston", order_date: "2023-04-20", order_type: "In-Store", tracking_id: "QRS012", order_total: "$250", status: "Pending" },
  { name: "James Houston", order_date: "2023-04-20", order_type: "In-Store", tracking_id: "QRS012", order_total: "$250", status: "Complete" },
];

 const options = {
    elevation: 0,
    filterType: 'checkbox',
    selectableRows: 'none',
    selectableRowsHeader: false,
    download: true,
    print: true,
    scrollY: '300px',
    responsive: 'standard',
    // search: true,
    searchPlaceholder: 'Enter search key',
    searchAlwaysOpen: true,
    rowsPerPageOptions: [10, 20, 30],
}

export default function OrderTable() {
  return (
    <div style={{ marginTop: '12px' }}>
      <MUIDataTable
        title={"Order List"}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
}
