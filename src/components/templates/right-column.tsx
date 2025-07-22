"use client";
// TODO: make this a server side component using data as a prop
// NOTE: notice hydration happening in the browser when using "use client"

import React, { ReactNode } from 'react';
import { theme } from '@/styles/theme';
import styled from 'styled-components';
// import { DISMISSIBLE_SKILLS_CARD_CLASSNAME } from './DismissibleSkillsCard';

const Container = styled.div<{ hasDismissibleSkillsCard: boolean }>(
  ({ hasDismissibleSkillsCard }) => `
    margin: 70px ${theme.size.medium} 40px 5px;
    min-width: ${hasDismissibleSkillsCard ? '250px' : '180px'};
    max-width: 250px;
    z-index: ${theme.zIndexes.content + 2};
  `
);


const RightColumn = ({
  hasDismissibleSkillsCard,
  children,
}: {
  hasDismissibleSkillsCard: boolean;
  children: ReactNode;
}) => {

  return (
    <Container hasDismissibleSkillsCard={hasDismissibleSkillsCard}>
      Right Column
      {children}
    </Container>
  );
};

export default RightColumn;
