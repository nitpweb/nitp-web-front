const home = "http://www.nitp.ac.in"
export const Labs = [
  {
    content: (
      <>
        <h2>Operating System Lab(54 Systems)</h2>
        <br />
        Processor: Intel Corei7-3770, RAM: 6 GB, HDD: 500 GB Operating System
        lab uses the Linux OS (Fedora 18.0) to implement the operating system
        management process, memory function and shell programming related to OS
        functions.
      </>
    ),
    image: (
      <img
        src={`${home}/images/oslab.jpg`}
        id="oslab"
        height="250px"
        width="350px"
      />
    ),
  },
  {
    content: (
      <>
        <h2>Simulation Lab (54 Systems)</h2>
        <br />
        Processor: Intel Corei5-3770, RAM: 2 GB, HDD: 500 GB Simulation lab uses
        the IBM Rational Rose software and other software to design software
        modules.
      </>
    ),
    image: (
      <img
        src={`${home}/images/net.jpg`}
        id="oslab2"
        height="250px"
        width="350px"
      />
    ),
  },
  {
    content: (
      <>
        <h2>Network System Lab (20 Systems) </h2>
        <br />
        Processor: Intel Core2Duo, RAM: 4 GB, HDD: 320 GB Hardware: Network
        System Kit (5 no.). The lab has well equipped system for research, which
        include the Network Training Kit.
      </>
    ),
    image: (
      <img
        src={`${home}/images/simu.jpg`}
        id="simu"
        height="250px"
        width="350px"
      />
    ),
  },
  {
    content: (
      <>
        <h2>Soft Computing Lab (20 Systems)</h2>
        <br />
        Processor: Intel P4 3.00 GHz, RAM: 1 GB, HDD: 80GB Hardware: LAN Trainer
        Kit (10 no.). Soft Computing lab use Statistica software for supervised
        learning analysis and data mining and also used the LAN Trainer kit for
        network topology.
      </>
    ),
    image: (
      <img
        src={`${home}/images/soft.jpg`}
        id="soft"
        height="250px"
        width="350px"
      />
    ),
  },
  {
    content: (
      <>
        <h2>Research Scholar Lab (14 Systems)</h2>
        <br />
        Processor: Intel Core2 Duo, RAM: 4 GB, HDD: 320 GB The lab uses
        Statistica for supervised learning analysis and data mining work and
        Qualnet simulator for network simulation work.
      </>
    ),
    image: (
      <img
        src={`${home}/images/imagep.jpg`}
        id="imagep"
        height="250px"
        width="350px"
      />
    ),
  },
  {
    content: (
      <>
        <h2>Image Processing Lab</h2>
        <br />
        Hardware: Image Capture Camera, Image Grabber Card along with PCs. The
        analysis and manipulation of a digital image, in order to get an
        enhanced image or to extract some useful information from it with the
        help of “Image Processing Software”.
      </>
    ),
    image: (
      <img src={`${home}/images/hp.jpg`} id="hp" height="250px" width="350px" />
    ),
  },
  {
    content: (
      <>
        <h2>HP Center of Excellence (50 PCs, 2 Rack servers)</h2>
        <br />
        This lab will contain 50 PCs with latest configuration, two rack
        servers, one workstation, five laptops, two voice tabs, two iIPads, two
        large screen display units, two heavy duty printers and many other
        network connected devices. This lab will facilitate training, research,
        experiments in the domain of software testing, mobile application
        development, cloud computing, network security, Big Data analysis and
        Industrial Automation.
      </>
    ),
    image: (
      <img
        src={`${home}/images/oslab.jpg`}
        id="oslab3"
        height="250px"
        width="350px"
      />
    ),
  },
]

export const Achievements = [
  "ISEA Project Phase – I (Completed)",
  "ISEA Project Phase – II (Ongoing)",
  "ICT-Academy Project (Ongoing)",
  `“Digital Literacy” Course under Skill Development Program (PMRY scheme) Completed`,
]

export const Activities = [
  {
    title: <h2>Workshops / Seminars / Training / Course Conducted:</h2>,
    content: (
      <ul>
        <li> Short Term Training Program on "Information Security"</li>
        <li>Workshop on "Public Key Infrastructure (PKI)"</li>
        <li>
          Research Promotion Workshop on "Introduction to Graph and Geometric
          Algorithms"
        </li>
        <li>Workshop on "Wireless Network & Security"</li>
        <li>Workshop on "Image Processing and Pattern Recognition"</li>
        <li>Workshop on "Scientific documentation processing using Latex"</li>
        <li>
          National level workshop Cum Short Term course on "Time Series Analysis
          and its Application"
        </li>
        <li>Workshop on "Network Management and Ethical Hacking"</li>
      </ul>
    ),
  },
  ,
  {
    title: <h2>Expert Lectures Conducted:</h2>,
    content: (
      <ul>
        <li>
          Pattern Recognition with relevance to Soft Computing / Granular Data
          Mining with Applications to image processing and Bio-Informatics by
          Prof. Shankar K. Pal, Distinguished Scientist & Former Director, ISI
          Kolkata.
        </li>
        <li>Soft Computing by Prof. Paramartha Dutta, VBU, Shantineketan.</li>
        <li>
          ABC of Big Data by Prof. Shankar K. Pal, Distinguished Scientist &
          Former Director, ISI Kolkata
        </li>
      </ul>
    ),
  },
]
