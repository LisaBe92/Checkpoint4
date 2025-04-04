import { ToastContainer } from "react-toastify";
import RecipeDashboard from "../components/RecipeDashboard";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <RecipeDashboard />
      <ToastContainer /> {/* Pour afficher les notifications */}
    </div>
  );
};

export default Dashboard;
