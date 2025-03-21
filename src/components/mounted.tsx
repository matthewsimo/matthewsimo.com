"use client";

import { PropsWithChildren, ReactElement, useEffect, useState } from "react";

const Mounted = ({
  children,
  initial = null,
}: PropsWithChildren<{ initial?: ReactElement<any> | null }>) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? children : initial;
};

Mounted.displayName = "Mounted";

export default Mounted;
