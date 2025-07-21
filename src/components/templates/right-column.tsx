"use client";
// TODO: can make this a server side component using page data

import React, { ReactNode } from 'react';
import { cx, css } from '@leafygreen-ui/emotion';
import { theme } from '@/styles/theme';
// import { DISMISSIBLE_SKILLS_CARD_CLASSNAME } from './DismissibleSkillsCard';

const RightColumn = ({
  hasDismissibleSkillsCard,
  children,
}: {
  hasDismissibleSkillsCard: boolean;
  children: ReactNode;
}) => {

  return (
    <div
      className={cx(css`
        margin: 70px ${theme.size.medium} 40px 5px;
        min-width: ${hasDismissibleSkillsCard ? '250px' : '180px'};
        max-width: 250px;
        z-index: ${theme.zIndexes.content + 2};

        `)}
        // TODO: for right column component
        // ${displayNone.onMobileAndTablet};
    >
      <div
        // @ts-ignore
        className={cx(css`
          height: calc(100vh - 120px);
          position: sticky;
        `)}
        // top: calc(${topLarge} + ${theme.size.medium});

        //   & > *:not(.${DISMISSIBLE_SKILLS_CARD_CLASSNAME}) {
        //     margin-bottom: 30px;
        //     margin-right: 24px;
        //   }
      >
        
        {children}
      </div>
    </div>
  );
};

export default RightColumn;
