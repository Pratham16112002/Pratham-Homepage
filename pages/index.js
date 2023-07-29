import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
const Pages = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello , I am a full stack developer based in india!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Pratham Dhiman
            </Heading>
            <p>Developer / CyberSecurity Enthusiast</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlph.800"
              borderWidth={2}
              boxSize="150px"
              borderStyle="solid"
              display="inline-block"
              borderRadius="full"
              src="/images/pratham.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading variant="section-title" as="h3">
            Work
          </Heading>
          <Paragraph>
            Pratham is a Full Stack Web/App Developer and a freelancer I love
            working on problems, building efficient approaches & algorithms. I
            create user-friendly, well crafted experiences with strong focus on
            usability, performance, security and maintainability. I like
            exploring new languages and work methods to get the job done.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" varient="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2002</BioYear>
            Born in Chandigarh (चंडीगढ़) , India.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed Senior Secondary Education in DPSMK.
          </BioSection>
          <BioSection>
            <BioYear>2020 to present</BioYear>
            Pursuing Bachelor Degree at Manipal University Jaipur
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Gaming, Movies , Badminton, CyberSecurity, Development
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Pages
