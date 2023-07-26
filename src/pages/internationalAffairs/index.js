import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import InternationalAffHome from "../../components/internationalAffairs/InternationalAffHome"
import {
 title,
 routeName,
 titleDescription,
 about,
 NewsAnnouncements,
 Partnership,
 StudentExchange,
 FacultyExchange,
 ContactDetails,
 Gallery,
 datalist,
} from "../../components/internationalAffairs/InternationalAffairs"

const InternationalAffairs = () => (
 <Layout>
  <SEO title="International Affairs" />
  <InternationalAffHome
   routeName={routeName}
   title={title}
   TitleDescription={titleDescription}
   About={about}
   NewsAnnouncements={NewsAnnouncements}
   Partnership={Partnership}
   FacultyExchange={FacultyExchange}
   StudentExchange={StudentExchange}
   ContactDetails={ContactDetails}
   Gallery={Gallery}
   datalist={datalist}
  />
 </Layout>
)

export default InternationalAffairs
