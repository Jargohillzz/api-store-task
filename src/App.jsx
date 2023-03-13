import { QueryClient, QueryClientProvider } from "react-query";

import { Route, Routes } from "react-router-dom";
import Credentials from "./Components/Credentials";
import Home from "./Components/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cred" element={<Credentials />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
