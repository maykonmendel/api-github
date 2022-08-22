import React from 'react';
import { MdLaunch } from 'react-icons/md';
import {
  Container,
  Name,
  Description,
  Footer,
  LangProgramming,
  Link,
} from './styles';

const Repository = () => (
  <Container color="#f37272">
    <Name>Repository Name</Name>
    <Description>Repository Description</Description>
    <Footer color="#f37272">
      <LangProgramming>Repository Lang</LangProgramming>
      <Link href="https://maykonmendel.github.io" target="_blank">
        <MdLaunch size="32" />
      </Link>
    </Footer>
  </Container>
);

export default Repository;
