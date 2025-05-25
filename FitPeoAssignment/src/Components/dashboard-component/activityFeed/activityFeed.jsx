import React from 'react';
import Chart from 'react-apexcharts';

const ActivityFeed = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const appointments = days.map(() => Math.floor(Math.random() * 5) + 1);

  const chartOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 500
      }
    },
    xaxis: {
      categories: days,
      labels: {
        style: {
          colors: '#6c757d',
          fontSize: '14px',
        },
      }
    },
    yaxis: { show: false },
    plotOptions: {
      bar: {
        columnWidth: '35%',
        borderRadius: 4,
      }
    },
    dataLabels: { enabled: false },
    colors: ['#008FFB'],
    grid: { show: false },
    responsive: [
      {
        breakpoint: 768,
        options: {
          plotOptions: {
            bar: { columnWidth: '50%' }
          },
          chart: {
            height: 150
          }
        }
      }
    ]
  };

  const chartSeries = [
    {
      name: 'Appointments',
      data: appointments
    }
  ];

  return (
    <div className="activity-feed" style={{ width: '100%' }}>
      <p className="d-flex align-items-center justify-content-end mb-4">
        3 appointments on this week
      </p>
      <div style={{ width: '90%' }}>
        <Chart options={chartOptions} series={chartSeries} type="bar" width="100%" height={200} />
      </div>
    </div>
  );
};

export default ActivityFeed;
