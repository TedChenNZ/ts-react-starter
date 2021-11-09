import styled from "styled-components";

const AppWrapper = styled.div`
  padding: 1rem;
`;

function App() {
  return <AppWrapper>{new Date().toISOString()}</AppWrapper>;
}

export default App;
