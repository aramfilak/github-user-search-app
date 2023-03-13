import "./SearchBox.sass";
import React, { useState } from "react";
import Result from "./Result";
import axios from "axios";

const defaultUser = {
  login: "octocat",
  avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
  html_url: "https://github.com/octocat",
  name: "The Octocat",
  company: "@github",
  blog: "https://github.blog",
  location: "San Francisco",
  bio: null,
  twitter_username: null,
  public_repos: 8,
  followers: 8606,
  following: 9,
  created_at: "2011-01-25T18:44:36Z",
};

const SearchBox = () => {
  const [queryString, setQueryString] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(defaultUser);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryString(e.target.value);
    setIsError(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/users/${queryString}`
      );
      setUser(response.data);
      setIsError(false);
    } catch (error) {
      setUser(defaultUser);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form className="search-box" onSubmit={handleSubmit}>
        <input
          className="search-box__box"
          value={queryString}
          onChange={handleInputChange}
          type="text"
          placeholder="Search GitHub username..."
        />
        {isError && <p className="err-msg">No results</p>}
        <button type="submit" className="search-box__btn">
          {isLoading ? "Loading..." : "Search"}
        </button>
      </form>
      <Result user={user}></Result>
    </>
  );
};

export default SearchBox;
