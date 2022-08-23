/*!

=========================================================
* Vision UI PRO Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-dashboard-pro-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
// Chakra imports
import {
  Box,
  Button,
  DarkMode,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Switch,
  Text,
} from "@chakra-ui/react";

// Assets
import basic from "../../../assets/img/basic-auth.png";

// Custom components
import GradientBorder from "../../../components/GradientBorder/GradientBorder";

// Icons
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

import { LogInScreen } from '../../../../screens/LogInScreen'

// Footer
import Footer from "../../../components/Footer/Footer";
import Card from "../../../components/Card/Card";

function SignInBasic() {
  const titleColor = "white";
  const textColor = "gray.400";
  return (


<div>


               {LogInScreen()}

               </div>
     
      


  );
}

export default SignInBasic;
