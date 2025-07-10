"use client";

import { Theme } from "emoji-picker-react";

import { useTheme } from "next-themes";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import dynamic from "next/dynamic";
import { useState } from "react";

interface IconPickerProps {
  onChange: (icon: string) => void;
  children: React.ReactNode;
  asChild?: boolean;
}

export const IconPicker = ({
  onChange,
  children,
  asChild,
}: IconPickerProps) => {
  const { resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);

  //import emoji dynamically
  const EmojiPicker = dynamic(() => import("emoji-picker-react"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  });

  const curretTheme = (resolvedTheme || "light") as keyof typeof themeMap;

  const themeMap = {
    light: Theme.LIGHT,
    dark: Theme.DARK,
  };

  const theme = themeMap[curretTheme];

  return (
    <Popover>
      <PopoverTrigger asChild={asChild}>{children}</PopoverTrigger>
      <PopoverContent>
        <EmojiPicker
          height={350}
          theme={theme}
          onEmojiClick={(data) => {
            onChange(data.emoji);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
};
