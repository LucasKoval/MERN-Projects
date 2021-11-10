import React from 'react'
import { MainSection, PageContainer, ErrorContainer, Title } from '../../styles/globalStyles'

export default function Custom404() {
  return (
    <MainSection className="MainSection">
      <PageContainer className="PageContainer">
        <ErrorContainer>
          <Title className="notFound">
            Oops!.. <br /> Something went wrong (404)
          </Title>
          <img src="/img/not-found.gif" alt="Not found" />
        </ErrorContainer>
      </PageContainer>
    </MainSection>
  )
}
