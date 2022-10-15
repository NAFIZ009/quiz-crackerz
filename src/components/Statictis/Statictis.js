import React from 'react';
import { Chart } from "react-google-charts";
import { useLoaderData } from 'react-router-dom';
const Statictis = () => {
    const loaderTopics =useLoaderData();
    let data = [
        ["Topics", "Questions"],
      ];
      loaderTopics.data.forEach(topics=>{
            data.push([topics.name, topics.total])
      })

      const options = {
        title: "Questions Analysis",
      };
    return (
        <div>
        <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"90vh"}
      />
        </div>
    );
};

export default Statictis;