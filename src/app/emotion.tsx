"use client";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import LGProvider, {
    LeafyGreenProviderProps,
} from '@leafygreen-ui/leafygreen-provider';
import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cache] = useState(() => {
    const cache = createCache({ key: "css" });
    cache.compat = true;
    return cache;
  });

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(
        ' '
      )}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ));
  // const { theme } = useTheme();
  return (
    <CacheProvider value={cache}>
      <LGProvider
        darkMode={false}
        // baseFontSize={baseFontSize ?? BaseFontSize.Body2}
      >
        {/* <ToastProvider portalClassName={toastStyles}> */}
          {children}
        {/* </ToastProvider> */}
      </LGProvider>
    </CacheProvider>
  );
}