import styled from 'styled-components/macro';

/* These are the styling components for Pages */

// This will affect the elements in the specific pages in Pages-folder
export const Container = styled.section`
  background-color: #000;
  border: 3px solid #ed8b00;
  height: 65px;
  padding-right: 66rem;
  padding-left: 66rem;
  margin-right: auto;
  margin-left: auto;
  margin: 20px;
`;

// Styling for the content (which can also be used for all the pages)
export const StyleDeluxe1 = styled.section`
  background-color: #8ac0ff;
  border: 2px solid red;
  color: #000;
  width: 66rem;
  margin: 15px;
  margin-right: auto;
  margin-left: auto;
`;

// Styling for the header content//
// Specific meant for NavAbove.js, but it can also be applied for all the pages//
export const StyleDeluxe2 = styled.section`
  background-color: #fff;
  margin-top: 25px;
`;
// Styling for footer section//
export const StyleDeluxe3 = styled.section`
  background-color: #000;
  color: white;
  height: 100px;
`;

export const HeaderStyling = styled.header`
  padding: 1vh;
  margin-left: 86px;
`;

export const StyleDeluxe5 = styled.article`
  margin: auto;
  margin-top: 25px;
`;

export const StyleDeluxe6 = styled.article`
  margin: 10px;
`;

export const StyledFooter = styled.article`
  padding: 44px;
  text-align: center;
  background-color: #000;
  color: white;
`;

export const StyleHorizontalLine = styled.article`
  margin-left: 111px;
`;

/* export const StyledNav = styled.nav`
  width: 154rem;
`;
*/

// <img src={horizonLine} />
