"use client";

// TODO: This file is a placeholder for the right column component.
// It should be replaced with the actual implementation when available.
import { ReactNode } from 'react';
import { cx, css } from '@leafygreen-ui/emotion';
import { theme } from '@/styles/theme';
import { H1 } from '@leafygreen-ui/typography';


const RightColumn = ({
  hasDismissibleSkillsCard,
  children,
}: {
  hasDismissibleSkillsCard: boolean;
  children: ReactNode;
}): React.JSX.Element => {

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
      <div className={cx(css``)}

      // height: calc(100vh - 120px);
      // position: sticky;
      // top: calc(${topLarge} + ${theme.size.medium});

      //   & > *:not(.${DISMISSIBLE_SKILLS_CARD_CLASSNAME}) {
      //     margin-bottom: 30px;
      //     margin-right: 24px;
      //   }
      ><H1 className={'heading-class'}
        as={'h1'} >This is a heading</H1>

        {children}
      </div>
    </div>
  )
};

export default RightColumn;
