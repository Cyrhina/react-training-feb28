import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./components/store/StoreContext";
import { devNavUrl } from "./components/helpers/functions-general";
import Header from "./components/pages/frontend/Header";
import Signup from "./components/pages/backend/admin/Signup";
import CreateAccount from "./components/pages/backend/admin/create-account/CreateAccount";
import ForgotPass from "./components/pages/backend/admin/forgot-pass/ForgotPass";
import CreateAccPass from "./components/pages/backend/admin/create-account/CreateAccPass";
import CreateCheckEmail from "./components/pages/backend/admin/create-account/CreateCheckEmail";
import CreatedAccount from "./components/pages/backend/admin/create-account/CreatedAccount";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Router>
          <Routes>
            <Route path={`${devNavUrl}/dunkin`} element={<Header />} />
            <Route path={`${devNavUrl}/login`} element={<Signup />} />
            <Route
              path={`${devNavUrl}/createaccount`}
              element={<CreateAccount />}
            />
            <Route
              path={`${devNavUrl}/createaccpass`}
              element={<CreateAccPass />}
            />
            <Route
              path={`${devNavUrl}/createcheck`}
              element={<CreateCheckEmail />}
            />
            <Route
              path={`${devNavUrl}/createdaccount`}
              element={<CreatedAccount />}
            />
            <Route path={`${devNavUrl}/forgotpass`} element={<ForgotPass />} />
          </Routes>
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
