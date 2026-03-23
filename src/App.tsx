import { Navigate, Route, Routes } from "react-router-dom";
import { DailyPullPage } from "./pages/DailyPullPage";
import { HomePage } from "./pages/HomePage";
import { MajorArcanaPage } from "./pages/MajorArcanaPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/daily-pull" element={<DailyPullPage />} />
      <Route path="/major-arcana" element={<MajorArcanaPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
