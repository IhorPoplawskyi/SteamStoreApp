import useDebounce from "../../hooks/useDebounce";

import { FC, useEffect, useState, ChangeEvent } from "react";

import styled from "styled-components";

const StyledSearchBar = styled.input`
  height: 40px;
  outline: none;
  border: none;
  border-radius: 10px;
  background: #837f7f;
  color: white;
  padding-left: 10px;
  &::placeholder {
    color: white;
  }
  @media only screen and (max-width: 600px) {
    width: 95%;
  }
  @media only screen and (min-width: 600px) {
    width: 95%;
  }
  @media only screen and (min-width: 768px) {
    width: 95%;
  }
  @media only screen and (min-width: 992px) {
    width: 55%;
  }
  @media only screen and (min-width: 1200px) {
    width: 45%;
  }
`;
interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  value?: string;
}

export const SearchBar: FC<SearchBarProps> = ({
  value,
  onSearch,
}): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState(value);
  const debouncedSearchTerm = useDebounce(searchTerm, 800);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const nextSearchTerm = event.target.value;
    if (nextSearchTerm === searchTerm) return;
    setSearchTerm(nextSearchTerm);
  };

  useEffect(() => {
    if (debouncedSearchTerm.length !== 0) onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  return (
    <StyledSearchBar
      placeholder="Enter an app name..."
      value={searchTerm}
      onChange={onChangeHandler}
    />
  );
};
