import {
  LucideLayoutDashboard,
  Computer,
  LineChart,
  Clock,
  FireExtinguisherIcon,
  Camera,
} from "lucide-react";

// Define types for sidebar data
export type SidebarItem = {
  title: string;
  Icon: JSX.Element;
  color: string;
};

export type SidebarSection = {
  suggestion: string;
  info: SidebarItem[];
};

export const sidebarData: SidebarSection[] = [
  {
    suggestion: "General",
    info: [
      {
        title: "Dashboard",
        Icon: <LucideLayoutDashboard />,
        color: "text-indigo-500",
      },
    ],
  },
  {
    suggestion: "Portfolio",
    info: [
      {
        title: "Overview",
        Icon: <Computer />,
        color: "text-emerald-300",
      },
      {
        title: "Position",
        Icon: <LineChart />,
        color: "text-purple-600",
      },
      {
        title: "History",
        Icon: <Clock />,
        color: "text-pink-500",
      },
    ],
  },
  {
    suggestion: "Tools",
    info: [
      {
        title: "Exchanges",
        Icon: <FireExtinguisherIcon />,
        color: "text-gray-300",
      },
      {
        title: "Plans",
        Icon: <Camera />,
        color: "text-red-300",
      },
    ],
  },
];
