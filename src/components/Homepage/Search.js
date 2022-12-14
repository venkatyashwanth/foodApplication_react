import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");

  const [suggestion, setSuggestion] = useState([]);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  const handleInput = (event) => {
    setInput(event.target.value);
    const url = `https://api.spoonacular.com/recipes/autocomplete?apiKey=${process.env.REACT_APP_API_KEY}&number=10&query=${event.target.value}`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const doNetworkCall = async () => {
      try {
        const response = await fetch(url, options);
        const jsonData = await response.json();
        setSuggestion(jsonData);
      } catch (error) {
        console.log(error);
      }
    };

    doNetworkCall();
  };

  return (
    <>
      <FormStyle onSubmit={submitHandler}>
        <FaSearch />
        <input type="search" value={input} onChange={handleInput} />
      </FormStyle>
      <SearchStringContainer>
        {suggestion.length !== 0 ? (
          <>
          {suggestion.map((eachSuggestion) => 
            <li key={eachSuggestion.id} style={{cursor: "pointer"}} onClick={() => setInput(eachSuggestion.title)}>{eachSuggestion.title}</li>
          )}
          </>
        ) : (
          ""
        )}
      </SearchStringContainer>
    </>
  );
}

const FormStyle = styled.form`
  // margin: 0rem 20rem;
  margin: 0rem auto;
  position: relative;
  // width: 100%;
  width: 40%;
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    // border-radius: 1rem;
    // border-radius: 1rem 1rem 0px 0px;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

const SearchStringContainer = styled.ul`
  // position: absolute;
  // margin: 0rem 20rem;
  margin: 0rem auto;
  width: 40%;
  // width: 40%;
  // margin-left: 20%;
  z-index: 90;
  // background-color: blue;
  color: white;
  background: linear-gradient(35deg, #494949, #313131);
  list-style-type: none;
  li {
    padding: 10px;
  }
`;

export default Search;
