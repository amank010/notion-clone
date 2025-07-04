"use client";

import { LucideIcon } from "lucide-react";

interface ItemProps {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
}

export const Item = ({ label, onClick, icon: Icon }: ItemProps) => {
  return (
    <div
      onClick={onClick}
      role="button"
      style={{ paddingLeft: "12px" }}
      className="flex items-center p-2 text-sm py-1 pr-3 w-full text-muted-foreground font-medium cursor-pointer hover:bg-primary/5"
    >
      <Icon className="shrink-0 h-[18px] mr-2 text-muted-foreground" />
      <span className="truncate">{label}</span>
    </div>
  );
};
