import NextLink from 'next/link'
import Image from 'next/image'

import { Box, Text, LinkBox, LinkOverlay, Heading } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title }) => (
  <Box w="100%" textAlign="left">
    <LinkBox
      as={NextLink}
      href={`/works/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <LinkOverlay as="div" href={`/works/${id}`}>
        <Heading size="lg" my={3}>
          {title}
        </Heading>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const ExperienceGridItem = ({ children, id, position, company }) => (
  <Box w="100%" textAlign="left">
    <LinkBox
      as={NextLink}
      href={`/works/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <LinkOverlay as="div" href={`/works/${id}`}>
        <Heading size="lg" my={3}>
          {position}
        </Heading>
        <Heading size="md" my={3}>
          {company}
        </Heading>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>{' '}
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
        .grid-item-thumbnail {
        border-radius: 12px;
      }
`}
  />
)
