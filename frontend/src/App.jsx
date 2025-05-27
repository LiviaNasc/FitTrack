import RoutesApp from "./routes";
import GlobalStyle from "./styles/global";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
      <RoutesApp />
      <GlobalStyle />
    </AuthProvider>
    </>
  );
}

export default App;