import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";
function ProductivityChart({ notes, tasks, goals, events }) {

  const data = [
    { name: "Notes", value: notes },
    { name: "Tasks", value: tasks },
    { name: "Goals", value: goals },
    { name: "Events", value: events }
  ];

  return (

    <div className="productivity-chart">

      <h2>📊 Productivity Overview</h2>

        <ResponsiveContainer width="100%" height={320}>

    <BarChart
        data={data}
        margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 10
        }}
    >

        <CartesianGrid
            stroke="#1f2937"
            vertical={false}
        />

        <XAxis
            dataKey="name"
            stroke="#9ca3af"
            tickLine={false}
            axisLine={false}
        />

        <YAxis
            stroke="#9ca3af"
            tickLine={false}
            axisLine={false}
        />

        <Tooltip
            cursor={{ fill: "#1e293b" }}
            contentStyle={{
                background: "#111827",
                border: "1px solid #374151",
                borderRadius: "12px",
                color: "#fff"
            }}
        />

        <Bar
            dataKey="value"
            fill="#3b82f6"
            radius={[10, 10, 0, 0]}
            animationDuration={1200}
        />

    </BarChart>

</ResponsiveContainer>

    </div>

  );

}

export default ProductivityChart;