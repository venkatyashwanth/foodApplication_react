import styled from "styled-components";

export const MealContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProfileInfoCard = styled.div`
  width: 100%;
  margin: 0px auto;
  display: flex;
  // flex-direction: column;
  // align-items: center;
  min-height: 65vh;
`;
export const InputBox = styled.input`
  width: 400px;
  padding: 5px 5px;
  margin: 10px 0px;
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
`;

export const SelectBox = styled.select`
width:  400px;
  padding: 5px 5px;
  margin: 10px 0px;
  border-radius: 5px;
  border: 1px solid black;
`

export const SideWindow = styled.div`
  background-color: #e8e6e6;
  width: 20%;
  padding: 10px;
`;



export const AddMealContainer = styled.div`
   display: flex;
   flex-direction: column;
    width: 100%;
    margin-left: 30px;
`

export const LinkList = styled.ul`
    text-decoration: none;
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    font-weight: 600;
    li{
        margin-bottom: 20px;
    }
    
`
