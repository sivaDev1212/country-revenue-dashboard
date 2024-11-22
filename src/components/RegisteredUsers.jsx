import { ProgressBar } from 'primereact/progressbar';
import '../assets/css/registerd-users.css'

const RegisteredUsers = ({ users }) => {
  const premiumPercentage = (users?.premiumUsers / users?.totalUsers) * 100;

  return (
    <div className="p-grid registerd-users">
      <div className="p-col-6">
        <h4>Total Registered Users: {users?.totalUsers}</h4>
        <ProgressBar value={premiumPercentage} />
        <p>Premium Users: {users?.premiumUsers}</p>
        <p>Basic Users: {users?.basicUsers}</p>
      </div>
    </div>
  );
};

export default RegisteredUsers;
