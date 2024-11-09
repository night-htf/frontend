import { Routes, Route } from "react-router-dom";
function Nav() {
  return (
    <>
    <nav>  
    <Link to="/signin">sign in</Link>
    <Link to="/createaccount">create account</Link>
    </nav>
    <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/createaccount" element={<CreateAccount />} />
    </Routes>
    </>
  );
}

export default Nav;