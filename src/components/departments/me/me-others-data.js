const home = "http://www.nitp.ac.in/php/"

export const Labs = [
  {
    title: (
      <h2>
        <b>LIST OF LABORATORIES</b>
      </h2>
    ),
    content: (
      <ol type="1" style={{ fontSize: `1.2rem` }}>
        <li>
          <p>Strength of Material.</p>
        </li>
        <li>
          <p>Internal Combustion Gas Turbine Lab.</p>
        </li>
        <li>
          <p>Engine Testing Lab.</p>
        </li>
        <li>
          <p>Heat and Mass Transfer Lab.</p>
        </li>
        <li>
          <p>Renewable Energy Lab.</p>
        </li>
        <li>
          <p>Applied Thermodynamics Lab.</p>
        </li>
        <li>
          <p>Refrigeration and Air Conditioning Lab.</p>
        </li>
        <li>
          <p>Dynamics of Machinery Lab.</p>
        </li>
        <li>
          <p>Fuel Cell Lab.</p>
        </li>
        <li>
          <p>CAM Lab.</p>
        </li>
        <li>
          <p>Flexible Manufacturing System Lab.</p>
        </li>
        <li>
          <p>Welding Shop.</p>
        </li>
        <li>
          <p>Fitting Shop.</p>
        </li>
        <li>
          <p>Carpentry Shop.</p>
        </li>
        <li>
          <p>Black Smithy Shop.</p>
        </li>
        <li>
          <p>Machine Shop.</p>
        </li>
      </ol>
    ),
  },
]

export const LabImages = [
  <img src={`${home}mech_lab_pics/01.jpg`} alt="image" />,

  <img src={`${home}mech_lab_pics/02.jpg`} alt="image" />,

  <img src={`${home}mech_lab_pics/03.jpg`} alt="image" />,

  <img src={`${home}mech_lab_pics/04.jpg`} alt="image" />,

  <img src={`${home}mech_lab_pics/05.jpg`} alt="image" />,

  <img src={`${home}mech_lab_pics/06.jpg`} alt="image" />,

  <img src={`${home}mech_lab_pics/07.jpg`} alt="image" />,

  <img src={`${home}mech_lab_pics/08.jpg`} alt="image" />,

  <img src={`${home}mech_lab_pics/09.jpg`} alt="image" />,

  <img src={`${home}mech_lab_pics/10.jpg`} alt="image" />,

  <img src={`${home}mech_lab_pics/11.jpg`} alt="image" />,

  <img src={`${home}mech_lab_pics/12.jpg`} alt="image" />,

  <img src={`${home}mech_lab_pics/13.jpg`} alt="image" />,

  <img src={`${home}mech_lab_pics/14.jpg`} alt="image" />,

  <img src={`${home}mech_lab_pics/15.jpg`} alt="image" />,

  <img src={`${home}mech_lab_pics/16.jpg`} alt="image" />,

  <img src={`${home}mech_lab_pics/19.jpg`} alt="image" />,

  <img src={`${home}mech_lab_pics/20.jpg`} alt="image" />,

  <img src={`${home}mech_lab_pics/21.jpg`} alt="image" />,

  <img src={`${home}mech_lab_pics/22.jpg`} alt="image" />,
]

export const Achievements = [
  {
    title: <h2>Sponsored Project List:</h2>,
    content: (
      <table className="table-act">
        <thead>
          <tr className="syllabus-table-head">
            <th style={{ padding: `8px` }}>S.No.</th>
            <th style={{ padding: `8px` }}>Name of the Project</th>
            <th style={{ padding: `8px` }}>Name of the PI</th>
            <th style={{ padding: `8px` }}>Sponsoring Agency</th>
            <th style={{ padding: `8px` }}>Sanctioned Amount(in lakh)</th>
            <th style={{ padding: `8px` }}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: `8px` }}>1</td>
            <td style={{ padding: `8px` }}>
              Modelling and nonlinear dynamic analysis of wrinkled graphene
              resonators
            </td>
            <td style={{ padding: `8px` }}>Dr. Anand Bhushan</td>
            <td style={{ padding: `8px` }}>
              Science and Engineering Research Board
            </td>
            <td style={{ padding: `8px` }}>12.9275</td>
            <td style={{ padding: `8px` }}>Completed</td>
          </tr>
          <tr>
            <td style={{ padding: `8px` }}>2</td>
            <td style={{ padding: `8px` }}>
              Friction Stir Welding of Dissimilar Heat Treatable Aluminium
              Alloys
            </td>
            <td style={{ padding: `8px` }}>Dr. Vikas Upadhyay</td>
            <td style={{ padding: `8px` }}>
              Science and Engineering Research Board, DST, GOI
            </td>
            <td style={{ padding: `8px` }}>8.41</td>
            <td style={{ padding: `8px` }}>Completed (2017-2020)</td>
          </tr>
          <tr>
            <td style={{ padding: `8px` }}>3</td>
            <td style={{ padding: `8px` }}>
              Experiment and Analysis of Energy Saving Variable Displacement
              Electro-Hydrostatics Actuation (VDEHA) System
            </td>
            <td style={{ padding: `8px` }}>Dr. Nimai Pada Mandal</td>
            <td style={{ padding: `8px` }}>DST</td>
            <td style={{ padding: `8px` }}>24.2468</td>
            <td style={{ padding: `8px` }}>Ongoing</td>
          </tr>
          <tr>
            <td style={{ padding: `8px` }}>4</td>
            <td style={{ padding: `8px` }}>SEED Project</td>
            <td style={{ padding: `8px` }}>Dr. Anindya Malas</td>
            <td style={{ padding: `8px` }}>NIT Patna, TEQIP III</td>
            <td style={{ padding: `8px` }}>6</td>
            <td style={{ padding: `8px` }}>Ongoing</td>
          </tr>
          <tr>
            <td style={{ padding: `8px` }}>5</td>
            <td style={{ padding: `8px` }}>
              Studies on hard-facing of Inconel 718 on stainless steel 321 and
              347 grades for nuclear reactor components
            </td>
            <td style={{ padding: `8px` }}>Dr. A. Karpagaraj</td>
            <td style={{ padding: `8px` }}>SERB</td>
            <td style={{ padding: `8px` }}>29.74</td>
            <td style={{ padding: `8px` }}>Ongoing</td>
          </tr>
          <tr>
            <td style={{ padding: `8px` }}>6</td>
            <td style={{ padding: `8px` }}>
              Wire Arc Additive Manufacturing (WAAM) of Stainless Steel 316L
              Components for Nuclear Plant Applications.{" "}
            </td>
            <td style={{ padding: `8px` }}>Dr. A. Karpagaraj</td>
            <td style={{ padding: `8px` }}>TEQIP-III/NITP</td>
            <td style={{ padding: `8px` }}>10</td>
            <td style={{ padding: `8px` }}>Ongoing</td>
          </tr>
        </tbody>
      </table>
    ),
  },

  {
    title: <h2>CLUBS ACHIEVEMENTS </h2>,
    content: (
      <ul>
        <li>
          In HPVC INDIA 2014, we stood 6th overall from all the 41 colleges
          participating, ranging from IITs to BITSs and NITs and various other
          prestigious colleges.
        </li>
        <li>5th position in ENDURANCE Event in HPVC - 2014.</li>
        <li>5th position in DRAG Event in HPVC - 2014.</li>
        <li>
          ASME HPVC Secured an overall rank of 7th in 2019 and 10th in 2020.
        </li>
        <li>
          4th Position in Student Design Competition(SDC) in ASME E-Fest 2020.
        </li>
        <li>4th Position in IAM3D in ASME 2020.</li>
        <li>Team AAVEGA stood 55th in Virtual Supra SAEINDIA 2015.</li>
        <li>
          Team AAVEGA stood 19th in Supra SAEINDIA 2015 and 2nd among all the
          NITs and IITs.
        </li>
        <li>2nd Rank in the design Event in HPVC 2015.</li>
      </ul>
    ),
  },
]
export const Activities = [
  {
    title: (
      <h2>
        {" "}
        List of Short - Term Courses / Faculty Development Program / Workshop /
        Gian Program:
      </h2>
    ),

    content: (
      <table className="table-act">
        <tbody>
          <tr className="syllabus-table-head">
            <th>S.No.</th>
            <th>Name of the Faculty</th>
            <th>Organized Workshop/FDP/STC/Conference/GIAN program</th>
            <th>Duration</th>
          </tr>

          <tr>
            <td>1. </td>
            <td>
              <b>Coordinator:</b> Dr. Abhishek Singh and Dr. Sharifuddin Mondal
              <br />
              <b>Organizing secretary:</b> Prof. Om Prakash
            </td>
            <td>
              Short Term Course on Gas Turbine - Development, Operation and
              Maintenance for Power & Propulsion - 2015 (GT-DOMPP-2015){" "}
            </td>
            <td>May 18-22, 2015</td>
          </tr>

          <tr>
            <td>2.</td>
            <td>
              <b>Coordinator:</b> Dr. Vikas Upadhyay, Dr. Nilamber Kumar Singh
            </td>
            <td>
              Advanced Materials, Processing and Characterization (AMPC-2016)
              organized under the aegis of TEQIP-II from{" "}
            </td>
            <td>February 18 - 20, 2016</td>
          </tr>

          <tr>
            <td>3.</td>
            <td>
              <b>Joint Secretary:</b> Dr. Abhishek Singh and Dr. Anupam Das
              <br />
              <b>Organizing Secretary:</b> Dr. A.N Sinha
            </td>
            <td>
              SHORT TERM COURSE ON ADVANCED MANUFACTURING PRACTICES - 2016,
              (AMP-2016)
            </td>
            <td>March 07-12, 2016</td>
          </tr>

          <tr>
            <td>4.</td>
            <td>
              <b>Chairman:</b> Dr. Amit Kumar and Dr. M.P. Singh <br />
              <b>Secretary:</b> Dr. Abhishek Singh, Mr. Arun Kumar, Dr. Vikas
              Upadhyay and Dr. Gowrisankar S.
            </td>
            <td>
              International Conference on Advances and Soft Computing
              Applications in Design and Manufacturing (ASCADM-2018)
            </td>
            <td>June 04-06, 2018</td>
          </tr>

          <tr>
            <td>5.</td>
            <td>
              <b>Chairman:</b> Prof. Om Prakash <br />
              <b>Coordinators:</b> Dr. A. Karpagaraj, Dr. A.K. Das, Dr. Rahul
              Goyal <br />
              <b>Organizing Secretary:</b> Dr. Vimal K E K
            </td>
            <td>Renewable Energy and Applications-2018 (REA 2018)</td>
            <td>December 19-23, 2018</td>
          </tr>

          <tr>
            <td>6.</td>
            <td>
              <b>Coordinator:</b> Dr. Abhishek Singh and Dr. Amit Kumar
            </td>
            <td>
              One-week e-workshop on “Recent Trends in Mechanical Engineering –
              2020 (RTME-2020)
            </td>
            <td> July 20-24, 2020</td>
          </tr>

          <tr>
            <td>7.</td>
            <td>
              <b>Coordinator:</b> Dr. Abhishek Singh and Dr. Amit Kumar <br />
              <b>Convener:</b> Dr. Shailesh Mani Pandey and Dr. Ambrish Maurya
            </td>
            <td>
              One-week online e-short term course on “Advances in Design &
              Manufacturing Engineering – 2020 (ADME-2020)
            </td>
            <td>August 03 – 07- 2020</td>
          </tr>

          <tr>
            <td>8.</td>
            <td>
              <b>Chairman:</b> Prof. S. K. Verma <br />
              <b>Coordinator:</b> Dr. Yogesh Kumar <br />
              <b>Convener:</b> Dr. Amit Kumar
            </td>
            <td>Online FDP on DEEKSHARAMBH (Student Induction Program)</td>
            <td> August 10-14, 2020</td>
          </tr>

          <tr>
            <td>9.</td>
            <td>
              <b>Chairman:</b> Prof. S. K. Verma <br />
              <b>Coordinator:</b> Dr. Yogesh Kumar <br />
              <b>Convener:</b> Dr. Amit Kumar
            </td>
            <td>
              Online FDP on Universal Human Values for DEEKSHARAMBH (Student
              Induction Program)
            </td>
            <td> September 21-25, 2020</td>
          </tr>
        </tbody>
      </table>
    ),
  },
]
