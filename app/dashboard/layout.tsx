/*
 * @Date: 2024-04-18 19:21:03
 * @LastEditTime: 2024-04-18 19:22:10
 */
import SideNav from "../ui/dashboard/sidenav";

export default function Layout({
  children,
}) {
  return (
    <div className="layout-wrap flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
