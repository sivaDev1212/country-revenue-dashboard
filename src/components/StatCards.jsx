import { Card } from 'primereact/card';
import '../assets/css/cards.css'

const StatCard = ({ title, value, change }) => {
  const iconClass = change >= 0 ? 'pi pi-arrow-up text-green-500' : 'pi pi-arrow-down text-red-500';

  return (
    <Card className="p-col-12 p-md-3 card-size">
      <h4>{title}</h4>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm">
        <i className={iconClass}></i> {change}%
      </p>
    </Card>
  );
};

const StatCards = ({ stats }) => (
  
  <div className="p-grid cards-first">
    <StatCard title="Total Income" value={stats?.totalIncome?.value} change={stats?.totalIncome?.change} />
    <StatCard title="Profit" value={stats?.profit?.value} change={stats?.profit?.change} />
    <StatCard title="Total Views" value={stats?.totalViews?.value} change={stats?.totalViews?.change} />
    <StatCard title="Conversion Rate" value={`${stats?.conversionRate?.value}%`} change={stats?.conversionRate?.change} />
  </div>
);

export default StatCards;
