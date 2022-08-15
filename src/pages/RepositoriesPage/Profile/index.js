import React from 'react';
import { Container, Header, Login, Name, Avatar } from './styles';

const Profile = () => (
  <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/10732321?v=4" />
      <Login>maykonmendel</Login>
      <Name>Maykon Mendel</Name>
    </Header>
  </Container>
);

export default Profile;
