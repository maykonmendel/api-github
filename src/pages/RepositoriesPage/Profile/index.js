import React from 'react';
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';
import { Container, Header, Login, Name, Avatar, Inner, Data } from './styles';

const Profile = () => (
  <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/10732321?v=4" />
      <Login>maykonmendel</Login>
      <Name>Maykon Mendel</Name>
    </Header>
    <Inner>
      <Data>
        <MdGroup size={20} />
        30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp;<i>seguindo</i>
      </Data>
      <Data>
        <MdWork size={20} />
        Grupo MM
      </Data>
      <Data>
        <MdLocationCity size={20} />
        HomeOffice
      </Data>
      <Data>
        <MdLink size={20} />
        <a href="https://maykonmendel.github.io">maykonmendel</a>
      </Data>
    </Inner>
  </Container>
);

export default Profile;
