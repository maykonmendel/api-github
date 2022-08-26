import React from 'react';
import PropTypes from 'prop-types';
import { MdLaunch } from 'react-icons/md';
import {
  Container,
  Name,
  Description,
  Footer,
  LangProgramming,
  Link,
} from './styles';
import { langColors } from '../../../../services/config';

const Repository = ({ repository }) => {
  const color =
    langColors[repository.language && repository.language.toLowerCase()];

  return (
    <Container color={color}>
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>
      <Footer color={color}>
        <LangProgramming>{repository.language}</LangProgramming>
        <Link href={repository.html_url} target="_blank">
          <MdLaunch size="32" />
        </Link>
      </Footer>
    </Container>
  );
};

Repository.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string,
  }).isRequired,
};

export default Repository;
