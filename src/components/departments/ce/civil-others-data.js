import React from "react"

const home = "http://www.nitp.ac.in/"

const LabsTable = [
 {
  "Sl. No.": 1,
  "Name of Laboratories": "Transportation Engineering Lab",
  "Area (Sq. ft.)": 2299,
 },
 {
  "Sl. No.": 2,
  "Name of Laboratories": "Cement Concrete Lab",
  "Area (Sq. ft.)": 1437.7,
 },
 {
  "Sl. No.": 3,
  "Name of Laboratories": "Water Resources Engineering Lab",
  "Area (Sq. ft.)": 4626.36,
 },
 {
  "Sl. No.": 4,
  "Name of Laboratories": "Material Testing Lab",
  "Area (Sq. ft.)": 3909.29,
 },
 {
  "Sl. No.": 5,
  "Name of Laboratories": "Geotechnical Lab",
  "Area (Sq. ft.)": 2770.68,
 },
 {
  "Sl. No.": 6,
  "Name of Laboratories": "Environmental Engineering Lab",
  "Area (Sq. ft.)": 1389.52,
 },
 {
  "Sl. No.": 7,
  "Name of Laboratories": "Heavy Structures Lab",
  "Area (Sq. ft.)": 2357.04,
 },
 {
  "Sl. No.": 8,
  "Name of Laboratories": "Surveying Lab",
  "Area (Sq. ft.)": 1100,
 },
 {
  "Sl. No.": 9,
  "Name of Laboratories": "Civil Engineering Computer Lab",
  "Area (Sq. ft.)": 472.31,
 },
 {
  "Sl. No.": 10,
  "Name of Laboratories": "Earthquake and Safety Clinic",
  "Area (Sq. ft.)": 1930.5,
 },
]

export const Labs = [
 {
  title: (
   <h2>
    <strong>LABORATORY DETAILS</strong>
   </h2>
  ),

  text: (
   <p>
    Civil Engineering Department, NIT Patna has state-of-the-art laboratories in
    the following specializations.These laboratories are well-equipped to cater
    the academic and research requirements of both UG and PG students.
   </p>
  ),
  table: (
   <table className="table-act">
    <tr className="syllabus-table-head">
     <th>Sl. No.</th>
     <th>Name of Laboratories</th>
     <th>Area (Sq. ft.)</th>
    </tr>
    {LabsTable.map((row, idx) => {
     return (
      <tr key={idx}>
       <td>{row["Sl. No."]}</td>
       <td>{row["Name of Laboratories"]}</td>
       <td>{row["Area (Sq. ft.)"]}</td>
      </tr>
     )
    })}
   </table>
  ),
 },
 {
  content: (
   <>
    <h2>
     <strong>Heavy Structure Laboratory</strong>
    </h2>
    <p>
     Heavy Structure Laboratory is fully dedicated for M. Tech and PhD research
     scholar. Equipment available in this lab are rebound hammer testing
     apparatus, ultrasonic pulse velocity testing apparatus, corrosion analyzer,
     bar locator and cover meter, universal testing machine (50 tons), actuator
     & loading frame (50 tons) and shake table (up to 6 degree of freedom)
    </p>
    <br />
   </>
  ),
  image: (
   <>
    <img src={`${process.env.GATSBY_BASE_URL}civil/labs/image013.jpg`} />
   </>
  ),
 },

 {
  content: (
   <>
    <h2>
     <strong>Cement Concrete Laboratory</strong>
    </h2>
    <p>
     Structural Engineering is one of the five specializations offered by the
     department. Faculty members are also working in other research areas
     related to structural mechanics, fracture mechanics, finite element
     analysis, durability of structures, construction management and
     non-destructive testing. This department boasts of a state-of-the-art
     concrete laboratory which can meet the present-day testing and research
     requirements. The lab is equipped with digital compressive testing machine,
     flexural strength testing machine for concrete, concrete permeability
     apparatus, Vee bee testing apparatus, flow table, compaction factor
     apparatus, slump test apparatus, table vibrator, L-box apparatus, V-funnel
     apparatus, J-ring apparatus, rapid chloride penetration testing apparatus
     and autoclave
    </p>
    <br />
   </>
  ),
  image: (
   <>
    <img src={`${process.env.GATSBY_BASE_URL}civil/labs/image007.jpg`} />
   </>
  ),
 },

 {
  content: (
   <>
    <h2>
     <strong>Transportation Engineering Laboratory</strong>
    </h2>
    <p>
     Two separate laboratories for Traffic Engineering and Pavement Engineering
     are functional with important equipment to provide best laboratory
     facilities to cater to the needs of the students and researchers. The
     faculties in this department are engaged in various consultancy works
     including the very prestigious project like PMGSY and contribute to the
     development of the nation.
    </p>
    <br />
   </>
  ),
  image: (
   <>
    <img src={`${process.env.GATSBY_BASE_URL}civil/labs/image008.jpg`} />
   </>
  ),
 },

 {
  content: (
   <>
    <h2>
     <strong>Material Testing Laboratory</strong>
    </h2>
    <p>
     Material testing laboratory has been set up to fulfil the needs of testing
     and researching on various materials like steel, metals etc. The laboratory
     works for the courses like Engineering Mechanics, Theory of structures etc.
     are conducted in this laboratory. It has state of the art equipment like
     100 tons universal testing machine along with other equipment like Izod
     impact testing machine, Brinell’s hardness testing machine, torsion testing
     machine, Amsler wood testing machine, universal testing machine (30 tons),
     and loading frame up to 50 tons.
    </p>
    <br />
   </>
  ),
  image: (
   <>
    <img src={`${process.env.GATSBY_BASE_URL}civil/labs/image009.jpg`} />
   </>
  ),
 },

 {
  content: (
   <>
    <h2>
     <strong>Geotechnical EngineeringLaboratory</strong>
    </h2>
    <p>
     Geotechnical engineering laboratory is equipped to perform all the
     necessary basic characterization of soils and several advanced testing
     facilities. A typical geotechnical engineering laboratory helps in
     identifying the engineering behavior of geomaterials (soils and rocks) and
     by-products such as fly ash etc. There are different physical, chemical and
     geotechnical properties determined in the laboratory that is required for
     identifying the geomaterials. This information is used by geotechnical
     engineer for designing the type of foundations, earthworks such as dams,
     embankments, tunnels, reservoirs, pavement subgrades etc. The preciseness
     of such design is entirely based on the experimental information obtained
     from a geotechnical laboratory. Therefore, geotechnical engineering
     laboratory has a great role to play in rendering the subsurface a safe and
     stable load bearing medium
    </p>
    <br />
   </>
  ),
  image: (
   <>
    <img src={`${process.env.GATSBY_BASE_URL}civil/labs/image010.jpg`} />
   </>
  ),
 },

 {
  content: (
   <>
    <h2>
     <strong>Water Resource Engineering Laboratory</strong>
    </h2>
    <p>
     The laboratory provides support to both undergraduate and postgraduate,
     teaching so that students have the opportunity to visualize by themselves
     the essential fluid mechanics principles. The hydraulics laboratory has
     flumes for undertaking cutting edge research in the area of open channel
     flow, sediment transport processes and other dedicated equipment like
     Venturimeter, Pelton wheel, Kaplan and Francis turbines and Reynolds
     apparatus. Work is also being carried out in land use and land cover
     classification, river migration, water-shed delineation, flow accumulation
     and hill slope hydrology. The major areas of current research in this field
     include flood flow forecasting, bank protection measures, river training
     works etc
    </p>
    <br />
   </>
  ),
  image: (
   <>
    <img src={`${process.env.GATSBY_BASE_URL}civil/labs/image011.jpg`} />
   </>
  ),
 },

 {
  content: (
   <>
    <h2>
     <strong>Environmental Engineering Laboratory</strong>
    </h2>
    <p>
     Environmental Engineering research spans the treatment of water and
     wastewater, through to air quality modelling to solid waste management. The
     undergraduate and graduate students work in a state-of-the-art laboratory,
     exploring exciting questions related to the acidification of surface
     waters, to discharges of waste gases from thermal power plants, to the
     composting of water hyacinth.
    </p>
    <br />
   </>
  ),
  image: (
   <>
    <img src={`${process.env.GATSBY_BASE_URL}civil/labs/image012.jpg`} />
   </>
  ),
 },

 {
  content: (
   <>
    <h2>
     <strong>Surveying Laboratory</strong>
    </h2>
    <p>
     Surveying is the first step of any engineering project. The department
     boasts of a very good surveying laboratory which has all the required
     instruments for carrying out various survey works. It caters to the need of
     the under graduate course on survey. It has instruments like theodolites,
     plane table and total station etc.
    </p>
    <br />
   </>
  ),
  image: (
   <>
    <img src={`${process.env.GATSBY_BASE_URL}civil/labs/DSC_0045.jpg`} />
   </>
  ),
 },

 {
  content: (
   <>
    <h2>
     <strong>Computational Laboratory</strong>
    </h2>
    <p>
     Any branch of engineering and science is incomplete if it does not address
     the need of modelling a problem. Civil engineering is no different. A
     computational laboratory for civil engineering has been setup. It has sixty
     numbers of desktop computers with internet connections, so that the M. Tech
     and PhD students may carry out their research activities. Following
     software are available in the laboratory: GMS, WMS, PLAXIS, ABAQUS, SAP
     2000 STADD PRO, Geo Studio and MATLAB
    </p>
    <br />
   </>
  ),
  image: (
   <>
    <img src={`${process.env.GATSBY_BASE_URL}civil/labs/DSC_0051.jpg`} />
   </>
  ),
 },
]
export const Activities = [
 {
  content: (
   <>
    <h2>Earthquake Safety Clinic and Centre (EqSC):</h2>
    <p>
     In the collaboration of NITP and BSDMA for their joint efforts, the EqSC
     was inaugurated on 20th January 2015 by the Chairperson of BSDMA and Chief
     Minister of Bihar. EqSC at NIT Patna recognizes the importance of research
     and development in the areas of disaster risk reduction (DRR), as well as,
     involvement of engineeringfaculty & students in dissemination of DRR
     knowledge to the grass-root stakeholders. It embraces the need for
     awareness in vulnerable groups, creation of qualified man power in all
     fields related to DRR and meet societal expectations of disaster
     resilience. Currently, the center is doing a project on Rapid Visual
     Screening (RVS) of 400 school buildings in Seismic Zone V under National
     School Safety Program (NSSP) sponsored by NDMA, Govt. of India.
    </p>
   </>
  ),
  image: (
   <img
    className="img-fluid"
    src={`${process.env.GATSBY_BASE_URL}civil/image014.jpg`}
   />
  ),
 },
 {
  content: (
   <>
    <h2>Centre for Water Resources Studies (CWRS):</h2>
    <p>
     The CWRS was set up at erstwhile Bihar College of Engineering under Patna
     University in response to perceived needs of the people of this region. The
     CWRS complex has a total floor area of 2000 m2 (Approximately).CWRS is
     involved in carrying out the research activity for Water Resources. A
     number of projects and research works have been undertaken and completed
     through CWRS. The centre has presently a very prestigious Chair named as
     DrRajendra Prasad Chair for Water Resources. TheChair has been established
     by Ministry of Water Resources, for the study of Impact of Climate Change
     on Water Resources. The main objective of the Chair is to carry out studies
     on water resources with special emphasis on assessment of effect of climate
     change and adaptation strategies in respect of planning, design and
     management of water resources systems of particularly Ganga Basin.
    </p>
   </>
  ),
  image: <img src={`${process.env.GATSBY_BASE_URL}civil/image015.jpg`} />,
 },
]
