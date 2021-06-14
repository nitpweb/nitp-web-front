const home = "http://www.nitp.ac.in"
import React from "react"

const btn_style = {
  backgroundColor: `red`,
  border: "none",
  borderRadius: "20px",
  padding: `8px`,
  fontSize: `1.5rem`,
  textDecoration: "none",
  color: "white",
  width: "80px",
  textAlign: "center",
  margin: `1rem`,
}

export const Labs = [
  {
    title: <h2>Departmental Laboratories</h2>,
    content: (
      <ol type="1.">
        <li>Electronic Devices and Circuit Lab</li>
        <li>Digital Electronics Lab.</li>
        <li>Semiconductor Device Lab</li>
        <li>Communication Engineering Lab</li>
        <li>VLSI Lab</li>
        <li>Digital Signal Processing Lab </li>
        <li>Microwave Engineering Lab</li>
        <li>Electromagnetic Computation and Simulation Lab</li>
        <li>Project Lab</li>
        <li>Signal Processing Research Lab.</li>
        <li>Wireless Propagation Lab.</li>
        <li>Optical Fiber Communication & Photonics Research Lab</li>
        <li>Microprocessor & Microcontroller Lab</li>
        <li>VLSI Fabrication Lab</li>
        <li>WSN Lab</li>
        <li> Image Processing Lab</li>
      </ol>
    ),
    images: (
      <>
        <img
          src={`${home}/images/eceimage002.jpg`}
          height="250px"
          width="350px"
        />{" "}
        <br />
        <img
          src={`${home}/images/eceimage003.jpg`}
          height="250px"
          width="350px"
        />
      </>
    ),
  },
  {
    title: <h2>Important Software:</h2>,
    content: (
      <ol type="1">
        <li>CST(full package)</li>
        <li>HFSS(full package)</li>

        <li>IE3D</li>
        <li>MATLAB</li>
        <li>NI LAB View</li>
        <li>Multisim</li>
        <li>OptiSuite(full package)</li>
        <li>Cadence</li>
        <li>Synopsis</li>
        <li>Mentor graphics</li>
        <li>Vivado Xilinx</li>
        <li>RSoft FemSIM</li>
        <li>COMSOL with Wave Optics module</li>
        <li>Xilinx SDSOC</li>
        <li>Mentor Catapult (C/C++/SystemC HLS)</li>
        <li>Xilinx Vivado System Edition with Partial Reconfiguration</li>
      </ol>
    ),
    images: (
      <>
        <img
          src={`${home}/images/eceimage005.jpg`}
          height="250px"
          width="350px"
        />
        <br />

        <img
          src={`${home}/images/eceimage006.jpg`}
          height="250px"
          width="350px"
        />
      </>
    ),
  },
  {
    title: <h2>Major Equipment:</h2>,
    content: (
      <ol type="1">
        <li>Dell Blade Server</li>
        <li>HP Blade Server</li>
        <li>Agilent E8257D PSG Analog Signal Generator (250 kHz to 40 GHz)</li>
        <li>Agilent N5222A PNA Vector Network Analyzer (10 MHz to 26.5 GHz)</li>
        <li>Agilent N9020A MXA Signal Analyzer (10 Hz to 26.5 GHz)</li>
        <li>
          Rudimentary Antenna Radiation Pattern Measurement Setup (40 MHz to
          12.4 GHz) from Amitec
        </li>
        <li>
          MITS ELEVEN-Lab PCB Prototyping Machine (Resolution: 0.625 micron)
        </li>
        <li>
          ERSA i-CON VARIO 4 High Precision 4 Channel Soldering/De-soldering
          Station{" "}
        </li>

        <li>
          NI USRP-Rio Software Defined Radio Platform (440 MHz to 4.4 GHz)
        </li>
        <li>Tektronix 1 GHz Mixed Signal Oscilloscope</li>
        <li>Kithley Semiconductor Characterization System</li>
        <li>
          Two SMC 100A Signal Generators (9 kHz to 3 GHz) from Rohde & Schwarz
        </li>
        <li>
          Anritsu VNA MS2037C (5 kHz to 15 GHz) and Spectrum Analyzer (9 kHz to
          15 GHz)
        </li>
        <li>2231A-30-3 Triple Channel DC Power Supply from Keithley</li>
        <li>
          Software Controlled Motorized Antenna Positioner (azimuth and
          elevation) from Holmarc
        </li>

        <li>Zedboard (For Embedded Application)</li>
        <li>Xilinx Zynq UltraScale+ MPSoC ZCU102 Evaluation Kit</li>
        <li>Xilinx Zynq 7000 AP SoC ZC702 Evaluation Kit</li>
        <li>Zybo Board (For Internet of Things Lab)</li>
        <li>Multiple Instrumentation Lab</li>
        <li>
          NI 9792: WSN Gateway with NI WSN 3214, NI WSN 3226, and NI WSN 3212
        </li>
        <li>OTDR and Optical Network Building Block system</li>
        <li>Physics of Fiber Optics Lab Setup</li>
        <li>Soldering De-soldering Station</li>
      </ol>
    ),
    images: (
      <>
        <img
          src={`${home}/images/eceimage007.jpg`}
          height="250px"
          width="350px"
        />{" "}
        <br />
        <img
          src={`${home}/images/eceimage008.jpg`}
          height="250px"
          width="350px"
        />
      </>
    ),
  },
]
export const Achievements = [
  {
    title: (
      <h2>
        List of Short-Term Courses / Faculty Development Program / Workshop /
        Gian Program:
      </h2>
    ),
    content: (
      <table
        border="1"
        style={{
          display: "block",
          overflowX: "auto",
          margin: `auto 4vw`,
          maxWidth: `90%`,
        }}
      >
        <tr className="syllabus-table-head">
          <th style={{ padding: "8px" }}>S.No.</th>
          <th style={{ padding: "8px" }}>Name of the Faculty</th>
          <th style={{ padding: "8px" }}>
            Organized Workshop/FDP/STC/GIAN program
          </th>
          <th style={{ padding: "8px" }}>Duration</th>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            1.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. D.K. Singh and Mr. B.C. Sahana
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            National Mission on Education through Information and communication
            tech.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2013, June 06-07
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Prof. D.K. Singh
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            National Mission on Education through Information and communication
            tech.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2014, January 17-18
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            3.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Prof. M.P. Tripathi, Dr. Rakesh Ranjan and Dr. P. Kishore Kumar
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Analog Integrated Circuits
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2015, June 15-22
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            4.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Gayadhar Pradhan, Dr. Rakesh Ranjan and Dr. P. Kishore Kumar
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Recent trends in Speech & Image Processing
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2015, June 23-27
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            5.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Puli Kishore Kumar and Dr. Rakesh Ranjan
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Microwaves and antennas
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2015, June 29 to July 03
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            6.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. (Md.) Waseem Akram and Dr. Gaurav Kaushal
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            VLSI & EMBEDDED SYSTEM
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2015, December 09-18
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            7.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. (Md.) Waseem Akram and Dr. Gaurav Kaushal
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Summer Internship Programme on Microcontroller based Embedded System
            Design
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2016, July 11 to August 02
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            8.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Priyanka Mondal
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Smart Antennas and Space-time Adaptive Processing
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2016, March 28 to April 1
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            9.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Priyanka Mondal
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Terahertz Technology and its application (NIT Patna)
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2016, August 01-05
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            10.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Priyanka Mondal
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Microwave Wireless Components for Transmitter and Receiver Systems
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2016, May 30 to June 3
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            11.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Seemant Saha, Dr. Bharat Gupta and Dr. Rajarshi Battacharya
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            TOWARDS 5G: THE KEY ENABLING TECHNOLOGIES
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2016, December 05-14
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            12.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Bharat Gupta, Mr S. Sasmal and Mrs. M. Bhatacharyya(PI)
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            IOT, BIGDATA AND CLOUD COMPUTING
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2017, February 08-18
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            13.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Seemanti saha (PI)
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Fundamentals of Analog and Digital Communication Systems
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2017, May 13-22
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            14.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Bharat Gupta and Mr. S Sasmal
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Embedded Systems-Design and Development
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2017, May 18-24
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            15.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Bharat Gupta
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Digital VLSI Circuit Design
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2017, June 03-12
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            16.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Bharat Gupta & Mr. Soumitra Sasmal
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Big Data Annalytics and Machine Learning
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2017, July 04-14
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            17.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Bharat Gupta and Dr. S. Bhattacharyya
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Hybrid Computational Intelligence
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2017, July 17-27
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            18.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Bharat Gupta & Mr. Soumitra Sasmal
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Advanced Java and Android
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2018, January 04-11
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            19.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Bikash Chandra Sahana and Dr. Rajeev Kumar Arya (Coordinator)
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            DSP and Sensors{" "}
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2018,December 10-14
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            20.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Subodh Srivastava(Coordinator)
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Embedded System and Interfacing hands-on
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2019, June 10-14
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            21.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Ritesh Kumar Mishra
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            VLSI ASIC Design ( Under the aegis of TEQIP)
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2019, June 26-30
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            22.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Jayanta Ghosh
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            {" "}
            Antenna Trends{" "}
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2019, July 01-05{" "}
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            23.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Rakesh Ranjan (Co-ordinator)
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Photonics Communication and Its Applications
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2019, July 9-13{" "}
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            24.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Subodh Srivastava (Coordinator)
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Distinguished lecture by Dr. R Venkatesha Prasad from Delft
            University of Technology (TU Delft), Netherlands
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2019, August 22
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            25.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Subodh Srivastava (Coordinator)
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Distinguished lecture by Prof. Mohamed Rawidean Mohd Kassim
            (MIMOS,the Ministry of Science, Technology and Innovation Malaysia)
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2019, September 25
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            26.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Subodh Srivastava (Coordinator & PI)
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Cloud Computing
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2019, October 16-20
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            27.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Manpuran Mahto (Convener)
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            National symposium on Vacuum Electronic Devices and Applications
            (VEDA-2019)
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2019, November 21-23
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            28.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Subodh Srivastava (Coordinator)
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Deep Learning and Applications
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2019, December 09-13{" "}
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            29.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Bal Chand Nagar (Coordinator)
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            VLSI Chip Design Hands on using Open Source EDA
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2019, December 16-20
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            30.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Rajeev Kumar Arya and Dr.Bikash Chandra Sahana
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            AI & Machine Learning
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2019, December 23-27
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            31.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Rajeev Kumar Arya and Dr.Bikash Chandra Sahana
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            4th International Conference SoCTA-2019 (Soft Computing: Theories
            and Applications)
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2019, December 27-29
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            32.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Bharat Gupta (Principal Coordinator)
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            ICT Tools for Teaching, Learning Process & Institutes
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2020, January 13-17
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            33.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Subodh Srivastava (Coordinator) & Dr. Manpuran Mahto
            (Coordinator)
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Hands on WorkShop on Internet of Things (IOT)/Embedded System
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2020, February 14-18
          </td>
        </tr>

        <tr>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            34.
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Dr. Ritesh Kumar Mishra (Coordinator)
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            Digital System Design, Verification and Synthesis Algorithm ( Under
            the aegis of TEQIP){" "}
          </td>
          <td style={{ padding: `8px` }} style={{ padding: "8px" }}>
            2020, February 26- March 01
          </td>
        </tr>
      </table>
    ),
  },
]
export const Activities = [
  {
    title: <h2>Inter Departmental Activity:</h2>,
    content: (
      <ul>
        <li>
          ICT academy has been established for development/upgradation to
          improve the employability of the graduates/diploma holders in various
          streams in cooperation with other departments.
        </li>
      </ul>
    ),
  },

  {
    title: <h2>Sponsored Project List:</h2>,
    content: (
      <table
        border="1"
        style={{
          display: "block",
          overflowX: "auto",
          margin: `auto 4vw`,
          maxWidth: `90%`,
        }}
      >
        <tr className="syllabus-table-head">
          <th colspan="2" style={{ padding: `8px` }}>
            Name of the Project
          </th>
          <th style={{ padding: `8px` }}>Name of the PI</th>
          <th style={{ padding: `8px` }}>Sponsoring Agency</th>
          <th style={{ padding: `8px` }}>Sanctioned Amount(in lakh)</th>
          <th style={{ padding: `8px` }} colspan="2">
            Status
          </th>
        </tr>

        <tr align="center">
          <td style={{ padding: `8px` }} colspan="2">
            Development of Signal Processing algorithms for remote detection of
            humans trapped under Debris in disaster affected areas using RF
            sensing of cardiopulmonary motion{" "}
          </td>
          <td style={{ padding: `8px` }}>
            Dr. G. Pradhan (PI), Dr. B. Gupta (Co-PI), Dr. P. Kishore Kumar
            (Co-PI)
          </td>
          <td style={{ padding: `8px` }}>DeitY Under SMDP</td>
          <td style={{ padding: `8px` }}>98.4</td>
          <td style={{ padding: `8px` }} colspan="2">
            On going
          </td>
        </tr>

        <tr align="center">
          <td style={{ padding: `8px` }} colspan="2">
            Design and Optimization of CPW-Fed Multiband MIMO Antenna for
            Handheld Mobile Terminals
          </td>
          <td style={{ padding: `8px` }}>Dr. R. Bhattacharya (PI)</td>
          <td style={{ padding: `8px` }}>DST (SERB Young Scientist Scheme)</td>
          <td style={{ padding: `8px` }}>26.8</td>
          <td style={{ padding: `8px` }} colspan="2">
            On Going
          </td>
        </tr>

        <tr align="center">
          <td style={{ padding: `8px` }} colspan="2">
            Development of Algorithms for Speech based Bilingual Keyword Search
            to Detect Fraud/Spam Calls
          </td>
          <td style={{ padding: `8px` }}>Dr. G. Pradhan (PI)</td>
          <td style={{ padding: `8px` }}>DeitY</td>
          <td style={{ padding: `8px` }}>41.1</td>
          <td style={{ padding: `8px` }} colspan="2">
            Completed
          </td>
        </tr>

        <tr align="center">
          <td style={{ padding: `8px` }} colspan="2">
            A 94 GHZ Front End for Passive Millimeter wave Imaging with Enhanced
            Antenna Gain
          </td>
          <td style={{ padding: `8px` }}>Dr. P. Mondal (PI)</td>
          <td style={{ padding: `8px` }}>SERB-DST</td>
          <td style={{ padding: `8px` }}>20.74</td>
          <td style={{ padding: `8px` }} colspan="2">
            On going
          </td>
        </tr>

        <tr align="center">
          <td style={{ padding: `8px` }} colspan="2">
            A low noise subharmonic mixer for millimeter-wave space-borne
            applications
          </td>
          <td style={{ padding: `8px` }}>Dr. P. Mondal (PI)</td>
          <td style={{ padding: `8px` }}>ISRO RESPOND scheme</td>
          <td style={{ padding: `8px` }}>17.48</td>
          <td style={{ padding: `8px` }} colspan="2">
            On going
          </td>
        </tr>

        <tr align="center">
          <td style={{ padding: `8px` }} colspan="2">
            Design Optimization of Multicore Fibers for High Capacity Optical
            Communications
          </td>
          <td style={{ padding: `8px` }}>Dr. R. Ranjan (PI)</td>
          <td style={{ padding: `8px` }}>SERB_DST</td>
          <td style={{ padding: `8px` }}>7.48</td>
          <td style={{ padding: `8px` }} colspan="2">
            On going
          </td>
        </tr>

        <tr align="center">
          <td style={{ padding: `8px` }} colspan="2">
            Resource Optimization and Interference management for Green
            ultra-dense 5G Cognitive Radio Networks
          </td>
          <td style={{ padding: `8px` }}>Dr. S. Saha (PI)</td>
          <td style={{ padding: `8px` }}>SERB_DST</td>
          <td style={{ padding: `8px` }}>27.33</td>
          <td style={{ padding: `8px` }} colspan="2">
            On going
          </td>
        </tr>

        <tr align="center">
          <td style={{ padding: `8px` }} colspan="2">
            Development of Signal Processing Algorithms for Ultra-Wideband
            Through-the-Wall Radar Imaging using Compressive Sensing
          </td>
          <td style={{ padding: `8px` }}>Dr. P. Kishore Kumar (PI)</td>
          <td style={{ padding: `8px` }}>SERB_DST</td>
          <td style={{ padding: `8px` }}>21.07</td>
          <td style={{ padding: `8px` }} colspan="2">
            On going
          </td>
        </tr>

        <tr align="center">
          <td style={{ padding: `8px` }} colspan="2">
            Development of Chirp Scaling Algorithm and Range Doppler Algorithm
            for Processing High Squint SAR raw data and its Simulation
          </td>
          <td style={{ padding: `8px` }}>Dr. P. Kishore Kumar (Co-PI)</td>
          <td style={{ padding: `8px` }}>RCI Hyderabad</td>
          <td style={{ padding: `8px` }}>9.5</td>
          <td style={{ padding: `8px` }} colspan="2">
            Completed
          </td>
        </tr>

        <tr align="center">
          <td style={{ padding: `8px` }} colspan="2">
            Developing E-Learning material for UG students across India in
            collaboration with IIT Kharagpur
          </td>
          <td style={{ padding: `8px` }}>Dr. P. Kishore Kumar (Co-PI)</td>
          <td style={{ padding: `8px` }}>NMEICT, MHRD, Govt. of India</td>
          <td style={{ padding: `8px` }}>7.0</td>
          <td style={{ padding: `8px` }} colspan="2">
            Completed
          </td>
        </tr>

        <tr align="center">
          <td style={{ padding: `8px` }} colspan="2">
            NMEICT
          </td>
          <td style={{ padding: `8px` }}>Prof. D. K. Singh</td>
          <td style={{ padding: `8px` }}>MHRD</td>
          <td style={{ padding: `8px` }}>10</td>
          <td style={{ padding: `8px` }} colspan="2">
            Completed
          </td>
        </tr>

        <tr align="center">
          <td style={{ padding: `8px` }} colspan="2">
            ICT Academy
          </td>
          <td style={{ padding: `8px` }}>Dr. B. Gupta (PI)</td>
          <td style={{ padding: `8px` }}>DeitY</td>
          <td style={{ padding: `8px` }}>1750</td>
          <td style={{ padding: `8px` }} colspan="2">
            On going
          </td>
        </tr>

        <tr align="center">
          <td style={{ padding: `8px` }} colspan="2">
            Applied design studies on HPM oscillator-MILO{" "}
          </td>
          <td style={{ padding: `8px` }}>Prof. Pradip Kumar Jain</td>
          <td style={{ padding: `8px` }}>DRDO</td>
          <td style={{ padding: `8px` }}>99</td>
          <td style={{ padding: `8px` }} colspan="2">
            On going
          </td>
        </tr>

        <tr align="center">
          <td style={{ padding: `8px` }} colspan="2">
            Design and Simulation of Integrated Optoelectronics Filters in
            Silicon-on-Insulator Substrate
          </td>
          <td style={{ padding: `8px` }}>Dr. Rakesh Ranjan (Co-PI)</td>
          <td style={{ padding: `8px` }}>NPIU, New Delhi Under TEQIP CRS</td>
          <td style={{ padding: `8px` }}>10.08</td>
          <td style={{ padding: `8px` }} colspan="2">
            On going
          </td>
        </tr>

        <tr align="center">
          <td style={{ padding: `8px` }} colspan="2">
            Engineering the tunable Au-Bi2Se3-Au metamaterial perfect absorber
            (MMPA)
          </td>
          <td style={{ padding: `8px` }}>Dr. Manpuran Mahto(Co-PI)</td>
          <td style={{ padding: `8px` }}>
            TEQIP Collaborative Research Scheme.
          </td>
          <td style={{ padding: `8px` }}>10</td>
          <td style={{ padding: `8px` }} colspan="2">
            On going
          </td>
        </tr>

        <tr align="center">
          <td style={{ padding: `8px` }} colspan="2">
            Development of multi-stacked PLZT material for Aerospace actuator
            applications
          </td>
          <td style={{ padding: `8px` }}>Dr. Manpuran Mahto(Co-PI)</td>
          <td style={{ padding: `8px` }}>Aeronautics R & D Board, DRDO</td>
          <td style={{ padding: `8px` }}>23</td>
          <td style={{ padding: `8px` }} colspan="2">
            On going
          </td>
        </tr>

        <tr align="center">
          <td style={{ padding: `8px` }} colspan="2">
            Image Processing and Machine Learning Algorithms based Automatic
            Bimodal Computer Aided Diagnostics (BCAD) Tool for Breast Cancer
            Detection(Seed Money )
          </td>
          <td style={{ padding: `8px` }}>Dr. Subodh Srivastava(PI)</td>
          <td style={{ padding: `8px` }}>TEQIP-III</td>
          <td style={{ padding: `8px` }}>9.70</td>
          <td style={{ padding: `8px` }} colspan="2">
            On going
          </td>
        </tr>

        <tr align="center">
          <td style={{ padding: `8px` }} colspan="2">
            Low power D2D communication with QoS constrains for IoB/IoT
            applications in 5G Network{" "}
          </td>
          <td style={{ padding: `8px` }}>Dr. Rajeev Kumar Arya (PI)</td>
          <td style={{ padding: `8px` }}>SERB-DST</td>
          <td style={{ padding: `8px` }}>21.48</td>
          <td style={{ padding: `8px` }} colspan="2">
            On going
          </td>
        </tr>

        <tr align="center">
          <td style={{ padding: `8px` }} colspan="2">
            Design and fabrication of current mode CMOS based Low Power IC
            (Integrated Circuit)
          </td>
          <td style={{ padding: `8px` }}>Dr. Rajeev Kumar Arya(Co-PI)</td>
          <td style={{ padding: `8px` }}>NPIU -TEQIP-III, CRS</td>
          <td style={{ padding: `8px` }}>16.92</td>
          <td style={{ padding: `8px` }} colspan="2">
            On going
          </td>
        </tr>
      </table>
    ),
  },

  {
    title: <h2>List of Publications:</h2>,
    content: (
      <>
        <a
          href=".http://www.nitp.ac.in/php/ece/publications/year_2020.pdf"
          style={btn_style}
        >
          2020
        </a>{" "}
        <a
          href=".http://www.nitp.ac.in/php/ece/publications/year_2019.pdf"
          style={btn_style}
        >
          2019
        </a>{" "}
        <a href="http://www.nitp.ac.in/php/year_2018.pdf" style={btn_style}>
          2018
        </a>{" "}
        <a href="http://www.nitp.ac.in/php/year_2017.pdf" style={btn_style}>
          2017
        </a>{" "}
        <a href="http://www.nitp.ac.in/php/year_2016.pdf" style={btn_style}>
          2016
        </a>{" "}
        <a href="http://www.nitp.ac.in/php/year_2015.pdf" style={btn_style}>
          2015
        </a>{" "}
      </>
    ),
  },
]
