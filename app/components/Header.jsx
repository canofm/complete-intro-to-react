// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';
import SearchInput from './SearchInput';

const Header = (props: {
  showSearch?: boolean,
  handleSearchTermChange?: Function,
  searchTerm?: string
}) => {
  const utilSpace = props.showSearch ? <SearchInput {...props} /> : <BackButton />;

  return (
    <header>
      <h1>
        <Link to="/">svideo</Link>
      </h1>
      {utilSpace}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false,
  handleSearchTermChange: function noop() {},
  searchTerm: ''
};

export default Header;
