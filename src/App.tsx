import { Navigate, Route, Routes } from "react-router-dom";
import { CardDetailPage } from "./pages/CardDetailPage";
import { DailyPullPage } from "./pages/DailyPullPage";
import { HomePage } from "./pages/HomePage";
import { MajorArcanaPage } from "./pages/MajorArcanaPage";
import { MinorArcanaPage } from "./pages/MinorArcanaPage";
import { MinorArcanaInterpretingPage } from "./pages/MinorArcanaInterpretingPage";
import { ZodiacSignsPage } from "./pages/ZodiacSignsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/daily-pull" element={<DailyPullPage />} />
      <Route path="/major-arcana" element={<MajorArcanaPage />} />
      <Route path="/major-arcana/:slug" element={<CardDetailPage />} />
      <Route path="/minor-arcana" element={<MinorArcanaPage />} />
      <Route path="/minor-arcana/interpreting" element={<MinorArcanaInterpretingPage />} />
      <Route path="/zodiac" element={<ZodiacSignsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
