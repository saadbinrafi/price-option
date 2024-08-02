
import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {

    const mathMarksData = [
        {id: 1, name: 'Alice', math: 78, chemistry: 90, physics: 85 },
        {id: 2, name: 'Bob', math: 80, chemistry: 85, physics:78 },
        {id: 3, name: 'Charlie', math: 95, chemistry: 88, physics: 92 },
        {id: 4, name: 'David', math: 90, chemistry: 84, physics: 90 },
        {id: 5, name: 'Emma', math: 68, chemistry: 70, physics: 75 },
        {id: 6, name: 'Frank', math: 97, chemistry: 91, physics: 95 },
        {id: 7, name: 'Grace', math: 85, chemistry: 78, physics: 82 },
        {id: 8, name: 'Hannah', math: 77, chemistry: 83, physics: 79 },
        {id: 9, name: 'ian', math: 84, chemistry: 89, physics: 87 },
        {id: 10, name: 'Jack', math: 92, chemistry: 88, physics: 90 },
    ];


    return (
        <div className="p-5 md:mx-5 lg:mx-12 my-5">
            <LChart width={800} height={400} data={mathMarksData}>
               <Line dataKey="math" stroke="gray"></Line>
               <XAxis dataKey="name"></XAxis>
               <YAxis></YAxis>
               <Line dataKey="physics" stroke="pink"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;