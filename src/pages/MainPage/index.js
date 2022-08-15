import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Container, LogoGithub, Title, Form, Input, Button } from './styles';
import GitHubLogo from '../../assets/images/github-logo.svg';

const MainPage = () => (
  <Container>
    <LogoGithub src={GitHubLogo} alt="API Github" />
    <Title>API Github</Title>
    <Form>
      <Input placeholder="usuário" />
      <Button>
        <MdSearch size={42} />
      </Button>
    </Form>
  </Container>
);

export default MainPage;
