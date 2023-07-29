import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import HiChathumbnail from '../public/images/Wee-chat.png'
import HiveChathumbnail from '../public/images/Hive-Chat-App.png'
import MinorThumbnail from '../public/images/Minor.png'
import LoadingThumbnail from '../public/images/Loading.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Work
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="wee-chat"
            title="Wee-Chat"
            thumbnail={HiChathumbnail}
          >
            A Real-time Chat-Web-Application
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="hive-chat-app"
            title="Hive-Chat-App"
            thumbnail={HiveChathumbnail}
          >
            A Flutter Based Chat-Application. Only for Android and IOS.
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem
            id="cead"
            title="Image Encryption and Decryption Using Chaotic Maps"
            thumbnail={MinorThumbnail}
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
