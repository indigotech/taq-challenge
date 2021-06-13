import { AppDiv, GlobalStyle } from "./styled";
import Router from "./routes/Router"
//importar styled global
function App() {
  return (
    <AppDiv>
      <GlobalStyle/>
      <Router />
    </AppDiv>
  );
}

export default App;
