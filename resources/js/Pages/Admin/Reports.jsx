import React from 'react';
import AdminLayout from "../../Layout/AdminLayout";
import ReportsCom from "../../Components/Admin/Reports";

const Reports = () => {
  return (
    <div>
      <ReportsCom />
    </div>
  )
}
Reports.layout = page => <AdminLayout children={page} title="Reports" />
export default Reports;
