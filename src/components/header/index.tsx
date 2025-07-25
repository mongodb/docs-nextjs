"use client";

import React from "react";
import { UnifiedNav } from "@mdb/consistent-nav";
import { css } from "@leafygreen-ui/emotion";

const headerStyling = css`
  opacity: 0.5;
  grid-area: header;
  width: 100%;
  top: 0;
  z-index: $zindex-header;

  /* Targets nav dropdown for desktop nav. These properties were causing
  UX bugs in FF and Safari (DOP-5692) */
  li>div {
    max-width: unset;
    top: unset;
  }
`

const Header = () => {
  const unifiedNavProperty = 'DOCS';
  // TODO: language selection
  return (
    <header className={headerStyling}>
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
    </header>
  );
};

export default Header;