import React from "react";
import Navbar from "./components/Navbar";
import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import NewJobs from "./pages/NewJobs";
import Myjobs from "./pages/Myjobs";
import Job from "./pages/Job";
import Privatejob from "./pages/Privatejob";
import Edit from "./pages/Edit";
import Saved from "./pages/Saved";
import { Globalprovider } from "./context/Globalcontext";
const App = () => {
  return (
    <Globalprovider>
      <Box fontFamily="Poppins">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/jobs" element={<Myjobs />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/job/:id" element={<Job />} />
            <Route path="/job/private/:id" element={<Privatejob />} />
            <Route path="/job/edit/:id" element={<Edit />} />
            <Route path="/create/jobs" element={<NewJobs />} />
          </Routes>
        </Router>
      </Box>
    </Globalprovider>
  );
};

export default App;
