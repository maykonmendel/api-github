import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import Repository from './Repository';

const Repositories = ({ repositories, currentLanguage }) => {
  const listRepositories = repositories
    .filter(
      (repository) =>
        currentLanguage === undefined || repository.language === currentLanguage
    )
    .map((repository) => (
      <Repository key={Repository.id} repository={repository} />
    ));

  return <Container>{listRepositories}</Container>;
};

Repositories.defaultProps = {
  currentLanguage: undefined,
};

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentLanguage: PropTypes.string,
};

export default Repositories;
