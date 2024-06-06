import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {   
        id: 1,
        name: 'Endpoint Profile Database',
        description: "As a Software Engineer at LTIMindtree Ltd. in the Media & Entertainment business unit (Paramount Pictures), I worked as a Backend Engineer on the Endpoint Profiler Service (EPD) to develop and maintain REST endpoints that stored and managed data for partners, including user-configured packaging details, media (video, audio, ancillary, metadata, subtitle, caption) details, and technical specifications. This data directed workflows for content delivery via Linear Distribution (Broadcasting via Satellite), Non-Linear (OTT via CDN), or over Internet IP. I developed and maintained REST APIs in Spring Boot for data storage in PostgreSQL, implemented an Audit Revision and Rollback feature to manage partner data changes, and built a cost-effective AWS serverless utility using Lambda Functions in Python. Additionally, I optimized a time-consuming API using multithreading, analyzed and improved the structural quality of the EPD application with CAST AIP, implemented REST APIs in Django-Rest framework, and wrote an ingestion logic in Python for migrating production data from PostgreSQL to MongoDB, reducing migration time by 20%. ",
        tools: ['Java 8', 'SpringBoot', 'Liquibase', 'Gradle', 'Hazelcast Cache', 'JHipster', 'NewRelic', 'Swagger', 'HELM', 'SonarQube' , 'Cast API', 'JUnit', 'Python', 'Django REST', 'AWS S3', 'AWS Lambda', 'Jenkins', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Postman', 'Figma', 'Spring Tool Suite', 'PyCharm', 'Confluence', 'Jira'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Interactive System for Product Purchase',
        description: "My team and I developed an interactive system for product purchases through gesture and voice, aimed at creating a virtual humanoid attendant for electronic stores. We captured hand gesture images, identified hand regions using the YCbCr color model, and preprocessed these images by converting them to grayscale. Image segmentation was performed to prepare datasets for training, and data generators were created for both training and validation. A CNN was implemented using TensorFlow and Keras to detect and identify hand gestures, while an NLP model using NLTK was developed to comprehend user commands and simulate human-like behavior. ",
        tools: ['Java', 'SwingAPI', 'Python', 'Tensorflow', 'Keras', 'Natural Language ToolKit', 'MySQL'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 3,
        name: 'Hospital Transparency',
        description: 'I developed a Java Swing API-based system that allows users to register patients, assign doctors to patients, and update illness information for loyal customers. Doctors can view patients, see other doctors, and check patient treatment status, with all records stored in and retrieved from a MySQL database.',
        tools: ['Java', 'SwingAPI', "MySQL", "JDBC", "IntellIJ", "MySQL"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 4,
        name: 'Media Transfer With UDP',
        description: 'I developed a robust client-server application enabling seamless real-time transfer of files, audio, or video between two hosts over an Internet Protocol (IP) network. Each data packet undergoes meticulous analysis and validation using traces recorded with the Wireshark tool, ensuring the utmost integrity and reliability throughout the transfer process.',
        tools: ['Java', 'DatagramSocket', 'Wireshark', 'EclipseIDE'],
        code: '',
        role: 'CLI developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 5,
        name: 'P2P Chat Application with TCP',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['Java', 'Socket', 'ServerSocket', 'Wireshark', "EclipseIDE"],
        code: '',
        role: 'CLI developer',
        demo: '',
        image: ayla,
    },
    {
        id: 6,
        name: 'Location Tracer - Android Application',
        description: "Location Tracer is a mobile application developed using Java and Android Studio. It is designed to track and display the user's real-time location on a map interface. Leveraging Google Maps API and GPS technology, the app provides accurate location tracking, allowing users to monitor their movements. Users can customize map views, add markers for points of interest, and explore various map types such as Normal, Hybrid, Satellite, and Terrain.",
        tools: ["Java", "Android Studio", "Google Maps API", "GPS"],
        code: '',
        role: 'Android Application Developer',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: "ABGR Fruit Shop - Automation Testing",
        description: "ABGR Fruit Shop - Automation Testing is a project aimed at automating the testing of a website using Selenium and TestNG. The website was thoroughly tested for functionality, usability, and performance. The tests, written in Java, cover various aspects of the website's functionality, including navigation, form submission, and data validation. TestNG framework is utilized for test execution, providing comprehensive reporting and test management capabilities.",
        tools: ["Selenium", "TestNG", "Java"],
        role: "Quality Assurance",
        code: "",
        demo: "",
        image: crefin
    }   
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },