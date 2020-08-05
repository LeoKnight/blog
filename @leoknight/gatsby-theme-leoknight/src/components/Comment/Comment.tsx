import React from "react";
import { Disqus } from 'gatsby-plugin-disqus'

import Section from "@components/Section";

import styled from "@emotion/styled";

interface Props {
  config: object
}
const Comment: React.FC<Props> = ({config}) => {
  

  return (
    <Section narrow>
      <Container>
        <Content>
          <Disqus config={config} />
        </Content>
      </Container>
    </Section>
  );
};

export default Comment;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 10px auto 100px;
  background: ${p => p.theme.colors.card};
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  z-index: 1;
`;

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  padding:15px;
  background: white;
`;
