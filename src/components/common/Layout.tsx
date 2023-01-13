import { Sidebar } from "../Sidebar";
import { Navbar } from "./Navbar";

export const Layout = ({ children }: any) => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex h-full">
        <Sidebar />
        <div className="w-full h-full flex items-center justify-center">
          {children}
        </div>
      </main>
    </div>
  );
};