import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      <div className='grid-background' />
      <Outlet />
    </div>
  );
}
