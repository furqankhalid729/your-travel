import React from 'react';
import AdminLayout from "../../Layout/AdminLayout";
import DraftsCom from "../../Components/Admin/Drafts";

const Drafts = () => {
  return (
    <div>
      <DraftsCom />
    </div>
  )
}
Drafts.layout = page => <AdminLayout children={page} title="Drafts" />
export default Drafts
