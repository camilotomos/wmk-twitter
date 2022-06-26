import { useState } from "react";

import Header from "../header/Header";
import Content from "../content/Content";
import Footer from "../footer/Footer";

const Main = () => {

    const [name, setName] = useState ("Nhek Shadow");

    return<>
        <Header/>
        <Content/>
        <Footer/>
    </>
}

export default Main;