import Header from "@/components/header";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <div className='px-4'>
        <div className='grid-background' />
        <main className='min-h-screen container mx-auto'>
          <Header />
          <Outlet />
        </main>
      </div>
      <div className='p-10 text-center bg-gray-800 mt-10'>
        Made with 💖 by Zreon
      </div>
    </>
  );
}
