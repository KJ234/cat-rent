import React from "react";
import {ResponsiveContainer, BarChart, Bar, XAxis, Tooltip} from 'recharts'
import catStaticsData from '../assets/dummy-data/catStatics'


function mileChart() {
  return (

      <ResponsiveContainer width="100%">
        <BarChart data={catStaticsData}>
          <XAxis dataKey="name" stroke="#2884ff" />
          <Bar
            dataKey="usedDaily"
            stroke="#2884ff"
            fill="#2884ff"
            barSize={30}
          />
          <Tooltip wrapperClassName="tooltip_style" cursor={false} />
        </BarChart>
      </ResponsiveContainer>

  );
}

export default mileChart;
