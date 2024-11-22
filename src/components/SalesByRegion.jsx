import { Chart } from 'primereact/chart';
import '../assets/css/pendegan-chart.css'

const SalesByRegion = ({ regions, sales }) => {
    const chartData = {
      labels: regions,
      datasets: [
        {
          label: 'Sales',
          data: sales,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }
      ]
    };
  
    return <Chart className='pendegan-chart' type="radar" data={chartData} />;
  };
  
  export default SalesByRegion;
  