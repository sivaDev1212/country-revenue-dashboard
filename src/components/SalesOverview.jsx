import { Chart } from 'primereact/chart';
import '../assets/css/line-chart.css'

const SalesOverview = ({ data }) => {
  const chartData = {
    labels: data?.months,
    datasets: [
      {
        label: 'Total Revenue',
        data: data?.totalRevenue,
        borderColor: '#42A5F5',
        fill: false
      },
      {
        label: 'Total Target',
        data: data?.totalTarget,
        borderColor: '#FFA726',
        fill: false
      }
    ]
  };

  const options = {
    plugins: {
      tooltip: { callbacks: { label: (tooltipItem) => `$${tooltipItem.raw}` } }
    }
  };

  return <Chart className='line_cart' type="line" data={chartData} options={options} />;
};

export default SalesOverview;
