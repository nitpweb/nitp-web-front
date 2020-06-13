import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Chemhomepage from "../components/departments/chem/chemhome";

const Chemhome = () => (
    <Layout>
        <SEO title="Chemistry" />
        <Chemhomepage />
    </Layout>
)

export default Chemhome
