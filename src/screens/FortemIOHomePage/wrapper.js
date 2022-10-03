import React from 'react'
import PropTypes from "prop-types";
import ScrollToTop from "./scroll-to-top/";
import { ToastContainer } from "react-toastify";

const Wrapper = ({ children }) => (
    <>
        {children}
        <ScrollToTop />
    </>
);

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Wrapper;
