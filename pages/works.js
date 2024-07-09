import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { ExperienceGridItem } from '../components/grid-item'
import { Text } from '@chakra-ui/react'
import LoadingThumbnail from '../public/images/Loading.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h1" fontSize={35} mb={4}>
        Experience
      </Heading>
      <SimpleGrid columns={1} gap={3}>
        <Section>
          <ExperienceGridItem
            id="psymate"
            position={'Software Developer'}
            company={'Psymate Healthcare'}
          >
            <Text>
              At Psymate Healthcare, I worked as a Software Developer where I
              utilized technologies like Node.js, React.js, Next.js, and
              MongoDB. I spearheaded real-time data integration for enhanced CRM
              user experiences, developed custom Next.js components, and
              integrated third-party APIs. I implemented various RESTful APIs
              for the backend and created scripts for financial data
              integration. My work ensured up-to-date information availability,
              optimized front-end performance, and expanded the functionality of
              the Psymate Healthcare ecosystem.
            </Text>
          </ExperienceGridItem>
        </Section>
        <Section>
          <ExperienceGridItem
            id="salesforce"
            position={'Intern'}
            company={'Salesforce'}
          >
            <Text>
              During my Salesforce internship, I completed an 8-week virtual
              program where I mastered key Salesforce Trailhead Modules,
              including Salesforce Fundamentals, Organization Setup, and
              Relationship & Process Automation. I gained hands-on experience
              with Apex Testing & Debugging, VS Code Setup, CLI Setup, and
              Lightning Web Components (LWC). I also completed the Developer
              Super Set, which enhanced my understanding of Salesforce
              development and its applications in real-world scenarios.
            </Text>
          </ExperienceGridItem>
        </Section>
      </SimpleGrid>
      <Heading as="h3" fontSize={35} mb={4}>
        Work
      </Heading>
      <SimpleGrid columns={1} gap={12}>
        <Section>
          <WorkGridItem id="bodi-rann-attendance" title="Attendance System">
            <Text>
              Developed an app to automate attendance for my classes, featuring
              a secure login system, user profiles, and attendance tracking.
              Built with React Native, Node.js, and MongoDB, it is currently
              being enhanced with new features.
            </Text>
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem id="hive-chat-app" title="Hive Chat App">
            <Text>
              I developed a Flutter-based chat application for Android and iOS,
              featuring user authentication, profile creation, and secure
              messaging. Built with Flutter, it provides a seamless
              cross-platform experience and is continuously being enhanced with
              new features.{' '}
            </Text>
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem
            id="e-commerice-application"
            title="Ecommerce Appplication"
          >
            <Text>
              I developed a responsive E-commerce application for Unicare
              Automation & Controls using React.js, Node.js, MongoDB, and
              Tailwind CSS. The platform includes user account management, cart
              functionality, order placement, and automated email notifications.
              It also features a well-designed database schema to manage user
              accounts, product information, and order details, ensuring a
              seamless user experience and improving operational efficiency for
              both clients and traders at Unicare Automation & Controls.
            </Text>
          </WorkGridItem>
        </Section>
        <Section deplay={0.6}>
          <WorkGridItem id="natours-api" title="Natours travel API">
            I developed the Natours API using Node.js, Express.js, and MongoDB.
            The API features secure user registration with password hashing and
            encryption, and a login mechanism using JSON Web Tokens for
            authorized access. It supports CRUD operations for user profiles and
            adventure tours, including image uploads and user reviews, ensuring
            secure and efficient management of tours and providing insightful
            feedback from users.
          </WorkGridItem>
        </Section>
        <Section deplay={0.7}>
          <WorkGridItem id="cancer-detection" title="Breast Cancer Detection">
            I developed a breast cancer detection system using machine learning
            and deep learning techniques. The project involved data
            preprocessing, feature selection, and dimensionality reduction. I
            designed and trained Convolutional Neural Networks (CNNs) to enhance
            accuracy, conducted comprehensive evaluations to compare model
            performance, and identified the best-performing model for reliable
            early-stage cancer detection, significantly improving diagnostic
            precision.
          </WorkGridItem>
        </Section>
        <Section delay={0.8}>
          <WorkGridItem
            id="cryptography"
            title="Image Encryption and Decryption Using Chaotic Maps Research"
          >
            Medical images are regarded as important and sensitive data in the
            medical informatics systems. For transferring medical images over an
            insecure network, developing a secure encryption algorithm is
            necessary.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="loading"
            title="Loading"
            thumbnail={LoadingThumbnail}
          >
            Still Working...
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
