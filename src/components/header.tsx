"use client";

import React from "react";
import { UnifiedNav } from "@mdb/consistent-nav";

const Header = () => {
  const unifiedNavProperty = 'DOCS';
  // TODO: language selection
  return (
    <UnifiedNav
      fullWidth={true}
      hideSearch={true}
      position="relative"
      property={{ name: unifiedNavProperty, searchParams: [] }}
      showLanguageSelector={true}
      // onSelectLocale={onSelectLocale}
      locale={"en-us"}
      enabledLocales={["en-us"]}
      darkMode={false} />
  );
};

export default Header;