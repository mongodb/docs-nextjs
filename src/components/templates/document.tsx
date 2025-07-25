import React from "react";
// import documentStyling from "./document.module.scss";
import { css, cx } from "@leafygreen-ui/emotion";
import { theme } from '@/styles/theme';
import MainColumn from "./main-column";
import RightColumn from "./right-column";

const MAX_ON_THIS_PAGE_WIDTH = '200px';
const MAX_CONTENT_WIDTH = '775px';
const MAX_CONTENT_WIDTH_LARGE_SCREEN = '884px';
// (max content width along with padding + max "On This Page" width along with padding)
export const DOCUMENT_TEMPLATE_MAX_WIDTH_VALUE = `(${MAX_CONTENT_WIDTH} + ${theme.size.xlarge} * 2) + (${MAX_ON_THIS_PAGE_WIDTH} + 5px + ${theme.size.medium})`;
export const DOCUMENT_TEMPLATE_MAX_WIDTH_VALUE_LARGE_SCREEN = `(${MAX_CONTENT_WIDTH_LARGE_SCREEN} + ${theme.size.xlarge} * 2) + (${MAX_ON_THIS_PAGE_WIDTH} + 5px + ${theme.size.medium})`;


export const documentStyling = css`
  display: grid;
  grid-template-areas: 'main right';
  grid-template-columns: minmax(0, calc(${MAX_CONTENT_WIDTH} + ${theme.size.xlarge} * 2)) 1fr;
  margin: 0 auto;
  width: 100%;
  max-width: calc(${DOCUMENT_TEMPLATE_MAX_WIDTH_VALUE});

  @media ${theme.screenSize['3XLargeAndUp']} {
    grid-template-columns: minmax(0, calc(${MAX_CONTENT_WIDTH_LARGE_SCREEN} + ${theme.size.xlarge} * 2)) 1fr;
    max-width: calc(${DOCUMENT_TEMPLATE_MAX_WIDTH_VALUE_LARGE_SCREEN});
  }
`;

const mainColumnStyling = css`
  grid-area: main;
  max-width: ${MAX_CONTENT_WIDTH};

  @media ${theme.screenSize['3XLargeAndUp']} {
    max-width: ${MAX_CONTENT_WIDTH_LARGE_SCREEN};
  }
`;

export default function DocumentTemplate({ children }: {
  children?: React.ReactNode;
}) {

  return (
    <div className={cx(documentStyling, 'document-template')}>
      <MainColumn className={cx(mainColumnStyling)}>
        <div className="body">
          {/* TODO: breadcrumbs components */}
          {/* <Breadcrumbs siteTitle={title} slug={slug} /> */}
          {children}
          {/* TODO: prev next components */}
          {/* {showPrevNext && (
            <InternalPageNav slug={slug} slugTitleMapping={slugToBreadcrumbLabel ?? {}} toctreeOrder={toctreeOrder} />
          )} */}
        </div>
      </MainColumn>
      <RightColumn hasDismissibleSkillsCard={false}>
        <div>CONTENTS HERE</div>

      </RightColumn>
    </div>
  );
}