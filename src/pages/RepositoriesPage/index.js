import React from 'react';
import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';
import { Container, Sidebar, Main } from './styles';
import { getLangsFrom } from '../../services/api';

const RepositoriesPage = () => {
  const user = {
    login: 'maykonmendel',
    avatar_url: 'https://avatars.githubusercontent.com/u/10732321?v=4',
    followers: 12,
    following: 18,
    company: null,
    blog: 'https://maykonmendel.github.io',
    location: 'Alegre',
  };

  const repositories = [
    {
      name: 'Repo 1',
      description: 'Descrição',
      html_url: 'https://maykonmendel.github.io',
      language: 'JavaScript',
    },
    {
      name: 'Repo 2',
      description: 'Descrição',
      html_url: 'https://maykonmendel.github.io',
      language: 'C#',
    },
    {
      name: 'Repo 3',
      description: 'Descrição',
      html_url: 'https://maykonmendel.github.io',
      language: 'PHP',
    },
  ];

  const languages = getLangsFrom(repositories);

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
