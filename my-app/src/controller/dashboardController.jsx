// src/controller/dashboardController.jsx
import { useNavigate } from "react-router-dom";

export const useDashboardController = () => {
  const navigate = useNavigate();

  const goToAddProgram = () => {
    navigate("/add-program");
  };

  return {
    goToAddProgram,
  };
};