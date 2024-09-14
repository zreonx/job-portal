import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Button } from "./components/ui/button";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/landing";
import Onboarding from "./pages/onboarding";
import JobListing from "./pages/job-listing";
import Job from "./pages/job";
import PostJob from "./pages/post-job";
import SavedJob from "./pages/saved-job";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/onboarding", element: <Onboarding /> },
      { path: "/jobs", element: <JobListing /> },
      { path: "/job/:id", element: <Job /> },
      { path: "/post-job", element: <PostJob /> },
      { path: "/saved-job", element: <SavedJob /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
