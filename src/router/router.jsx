import { Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout/MainLayout";
import Main from "../components/pages/Main/Main";
import About from "../components/pages/About/About";
import ProgramOverview from "../components/pages/ProgramOverview/ProgramOverview";
import JoinUs from "../components/pages/JoinUs/JoinUs";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/program-overview" element={<ProgramOverview />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
