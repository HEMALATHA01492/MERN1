import { BrowserRouter, Route, Routes} from "react-router-dom";

import SignUp from "./components/SignUp";
import AccountActivation from "./components/AccountActivation";
import SignIn from "./components/SignIn";

import ForgotPassword from "./components/ForgotPassword";
import CheckEmail from "./components/CheckEmail";

import PasswordReset from "./components/PasswordReset";
import Password from "./components/Password";

import Home from "./components/Home";
import Collection from "./HomeComponent/Collection";
import TodaySuggest from "./HomeComponent/TodaySuggest";
import History from "./HomeComponent/History";
import Favorite from "./HomeComponent/Favorite";

function App() {
  const url="https://colorsuggest.onrender.com"

  return (
      <BrowserRouter>
          <Routes>
                <Route path="/" element={<SignUp url={url} />} />
                <Route path="/accountactivation/:id" element={<AccountActivation url={url} />} />
                <Route path="/signin" element={<SignIn  url={url}/>} />

                <Route path="/forgotPassword" element={<ForgotPassword  url={url}/> }/>
                <Route path="/mail" element={<CheckEmail url={url}/>} />

                <Route path="/PasswordReset/:id" element={<PasswordReset url={url} />}/>
                <Route path="/password" element={<Password  url={url}/>} />

                
                <Route path="/Home" element={<Home url={url} />} />
                <Route path="/todaysuggest" element={<TodaySuggest url={url} />} />

                <Route path="/collection" element={<Collection url={url} />} />
                <Route path="/history" element={<History url={url} />} />
                <Route path="/favorite" element={<Favorite url={url} />} />
          </Routes>
      </BrowserRouter>
      
  );
}

export default App;