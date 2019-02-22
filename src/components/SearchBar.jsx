import React  from 'react';
import styled from 'styled-components';

const wikiStyles = {
  transform: "scale(2)",
  border: "1px solid #242424"
};

const Form = styled.form`
  margin-left: 3rem;
  display: flex;
  border: 1px solid #242424;
  border-radius: 4px;
`;

const Input = styled.input`
  background-color: #292929;
  border: none;
  height: 4.4rem;
  width: 55rem;
  padding: .5rem 1rem;
  color: white;
`;

const I = styled.i`
  color: white;
`;

const IconButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.4rem;
  height: 4.4rem;
  border: none;
  background-color: #292929;
`;

const SearchBar = () => (
  <>
    <div><i style={wikiStyles} className="fab fa-wikipedia-w" /></div>
    <Form>
      <Input type="search" />
      <IconButton type="submit">
        <I className="fas fa-search" />
      </IconButton>
      <IconButton type="button">
        <I className="fas fa-random" />
      </IconButton>
    </Form>
  </>
);

export default SearchBar;