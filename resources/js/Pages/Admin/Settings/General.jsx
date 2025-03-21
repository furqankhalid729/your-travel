import React from 'react'
import GeneralCom from "../../../Components/Admin/Settings/General";
import SettingLayout from "../../../Layout/SettingsLayout";
const General = () => {
  return (
    <div>
      <GeneralCom />
    </div>
  )
}
General.layout = page => <SettingLayout children={page} title="General Settings" />
export default General
