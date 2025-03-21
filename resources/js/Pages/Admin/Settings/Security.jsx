import React from 'react'
import SecurityCom from "../../../Components/Admin/Settings/Security";
import SettingLayout from "../../../Layout/SettingsLayout";
const Security = () => {
  return (
    <div>
      <SecurityCom />
    </div>
  )
}
Security.layout = page => <SettingLayout children={page} title="Security Settings" />
export default Security
