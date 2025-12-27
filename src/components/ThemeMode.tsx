"use client";

import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Switch } from "./ui/switch";
import { Spinner } from "./ui/spinner";

export default function ThemeMode() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  if(!mounted) {
    return <div><Spinner className="size-4"/></div>
  };

  return (
    <div>
      <Switch
        checked={isDark}
        onCheckedChange={(e) => {
          setTheme(e ? "dark" : "light");
        }}
      >
        {isDark ? (<Moon className="size-3"/>) : (<Sun className="size-3"/>)}
      </Switch>
    </div>
  );
}
