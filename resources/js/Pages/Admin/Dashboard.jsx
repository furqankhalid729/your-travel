import { Chart } from "react-google-charts";
import AdminLayout from "../../Layout/AdminLayout";

const Dashboard = ({
  totalValueYearly,
  totalValueMonthly,
  currentYear,
  currentMonth,
  totalBookingsYearly,
  activeBookingsTotal,
  cancelBookingsTotal,
  salesReportData,
  userData,
  customerData }) => {

  const salesReportOptions = {
    title: "",
    legend: { position: "top", alignment: "center" },
    hAxis: { title: "Months", textStyle: { color: "#000" } },
    vAxis: {
      title: "Values",
      textStyle: { color: "#000" },

    },
    colors: ["#000000", "#2ecc71", "#e0b0ff"],
    chartArea: { width: "80%", height: "70%" },
  };


  const customerOptions = {
    title: "Customer Breakdown",
    pieHole: 0.4,
    legend: { position: "bottom" },
    colors: ["#3498db", "#2ecc71", "#e74c3c"],
    chartArea: { width: "90%", height: "70%" },
    pieSliceText: "percentage",
  };

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "CHF",
    minimumFractionDigits: 2,
  });
  const statsData = [
    { title: "Draft", value: 36987, date: "2023-2024" },
    { title: "Booking", value: activeBookingsTotal, date: "2023-2024" },
    { title: "Cancellation", value: cancelBookingsTotal, date: "2023-2024" },
    { title: "Message", value: 8450, date: "2023-2024" },
    { title: "Total Sales Yearly", value: totalValueYearly, date: "2023-2024" },
    { title: "Total Orders", value: totalBookingsYearly, date: "2023-2024" },
    { title: "Total Visitors", value: 785230, date: "2023-2024" },
    { title: "Total Revenue Monthly", value: totalValueMonthly, date: "2023-2024" },
  ].map((item) => ({
    ...item,
    value:
      ["Booking", "Total Sales Yearly", "Total Revenue Monthly", "Cancellation"].includes(item.title)
        ? currencyFormatter.format(item.value)
        : item.value,
  }));

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border shadow p-3 flex flex-col justify-between"
          >
            <div>
              <h3 className="flex justify-between items-center">
                {stat.title}
                <span className="text-sm text-gray-500">{stat.date}</span>
              </h3>
              <p className="text-2xl mt-2">{stat.value.toLocaleString()}</p>
            </div>
            
          </div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 bg-white border rounded-lg shadow p-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Sales Report</h3>
          </div>
          <Chart
            chartType="ColumnChart"
            data={salesReportData}
            options={salesReportOptions}
            width="100%"
            height="400px"
          />
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-lg border shadow p-4">
            <h3 className="text-lg font-semibold">Customer Breakdown</h3>
            <Chart
              chartType="PieChart"
              data={customerData}
              options={customerOptions}
              width="100%"
              height="200px"
            />
          </div>
          <div className="bg-white rounded-lg border shadow p-2">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Real-Time Growth</h3>
            </div>
            <Chart
              chartType="AreaChart"
              data={userData}
              options={{
                legend: { position: "top", alignment: "center" },
                hAxis: {
                  title: "Months",
                  textStyle: { color: "#6b7280" },
                  gridlines: { count: 6 },
                },
                vAxis: {
                  title: "Customers",
                  textStyle: { color: "#6b7280" },
                  minValue: 0,
                },
                colors: ["#9b59b6"],
                chartArea: { width: "85%", height: "70%" },
                areaOpacity: 0.1,
                lineWidth: 3,
              }}
              width="100%"
              height="300px"
            />;
          </div>
        </div>
      </div>
    </div>
  );
};
Dashboard.layout = page => <AdminLayout children={page} title="Dashboard" />
export default Dashboard;
