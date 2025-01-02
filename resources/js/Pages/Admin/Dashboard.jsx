// import { Chart } from "react-google-charts";

const Dashboard = () => {
  const salesReportData = [
    ["Month", "Total Sales", "Total Visitors", "Total Orders"],
    ["Jan", 100, 200, 300],
    ["Feb", 150, 250, 350],
    ["Mar", 200, 300, 400],
    ["Apr", 250, 350, 450],
    ["May", 300, 400, 500],
    ["Jun", 400, 500, 600],
    ["Jul", 500, 600, 700],
  ];

  const salesReportOptions = {
    title: "",
    legend: { position: "top", alignment: "center" },
    hAxis: { title: "Months", textStyle: { color: "#000" } },
    vAxis: {
      title: "Values",
      textStyle: { color: "#000" },
      ticks: [100, 200, 300, 400, 500, 600, 700, 800],
    },
    colors: ["#000000", "#2ecc71", "#e0b0ff"],
    chartArea: { width: "80%", height: "70%" },
  };

  const customerData = [
    ["Customer Type", "Percentage"],
    ["Active", 55],
    ["New", 30],
    ["Retarget", 15],
  ];

  const customerOptions = {
    title: "Customer Breakdown",
    pieHole: 0.4,
    legend: { position: "bottom" },
    colors: ["#3498db", "#2ecc71", "#e74c3c"],
    chartArea: { width: "90%", height: "70%" },
    pieSliceText: "percentage",
  };

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          "Draft",
          "Booking",
          "Cancellation",
          "Message",
          "Total Sales",
          "Total Orders",
          "Total Visitors",
          "Total Revenue",
        ].map((title, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border shadow p-3 flex flex-col justify-between"
          >
            <div>
              <h3 className="flex justify-between items-center">
                {title}
                <span className="text-sm text-gray-500">2023-2024</span>
              </h3>
              <p className="text-2xl mt-2">36,987</p>
              <div className="flex items-center mt-1">
                {/* <Chart
                  chartType="LineChart"
                  data={[
                    ["Time", "Value"],
                    ["Jan", 100],
                    ["Feb", 200],
                    ["Mar", 150],
                    ["Apr", 250],
                    ["May", 400],
                    ["Jun", 300],
                    ["Jul", 450],
                  ]}
                  options={{
                    legend: { position: "none" },
                    hAxis: {
                      textPosition: "none",
                      gridlines: { color: "transparent" },
                    },
                    vAxis: {
                      textPosition: "none",
                      gridlines: { color: "transparent" },
                    },
                    chartArea: { width: "80%", height: "50%" },
                    colors: ["#1f1f1f"],
                    pointSize: 6,
                    lineWidth: 1,
                    curveType: "none",
                  }}
                  width="100%"
                  height="100px"
                /> */}
              </div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="text-sm">
                <span className="text-gray-500">+20% </span>
                Since Last Year
              </p>
              {index < 4 && <button className="text-sm">View Details</button>}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 bg-white border rounded-lg shadow p-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Sales Report</h3>
            <select
              className="border border-gray-300 rounded px-3 py-1 text-sm"
              defaultValue="Last 1 Year"
            >
              <option value="Last 1 Year">Last 1 Year</option>
              <option value="Jan - Jul">Jan - Jul</option>
            </select>
          </div>
          {/* <Chart
            chartType="ColumnChart"
            data={salesReportData}
            options={salesReportOptions}
            width="100%"
            height="400px"
          /> */}
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-lg border shadow p-4">
            <h3 className="text-lg font-semibold">Customer Breakdown</h3>
            {/* <Chart
              chartType="PieChart"
              data={customerData}
              options={customerOptions}
              width="100%"
              height="200px"
            /> */}
          </div>
          <div className="bg-white rounded-lg border shadow p-2">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Real-Time Growth</h3>
            </div>
            {/* <Chart
              chartType="AreaChart"
              data={[
                ["Month", "Customers"],
                ["Jan", 50],
                ["Feb", 100],
                ["Mar", 150],
                ["Apr", 250],
                ["May", 350],
                ["Jun", 450],
              ]}
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
                  ticks: [50, 150, 250, 350, 450],
                },
                colors: ["#9b59b6"],
                chartArea: { width: "85%", height: "70%" },
                areaOpacity: 0.1,
                lineWidth: 3,
              }}
              width="100%"
              height="300px"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
