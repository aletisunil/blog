import React from "react"
import {Link, graphql} from "gatsby"
import styled from "styled-components"
import {
  HeaderLogo,
  HeadingXL,
  HeadingL,
  Layout,
  SEO,
  TextBody,
  TextDate,
} from "../components"
import {BREAKPOINT} from "../utils/constants"
import {FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'; 


const Hero = styled.div`
  margin-bottom: 20vh;

  @media (max-width: ${BREAKPOINT}px) {
    margin-bottom: 15vh;
  }
`
const TextHome = styled.p`
  color: var(--dark-color-light);
  display: block;
  font-size: 22px;
  line-height: 1.6;
  margin-bottom: 10vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 28em;
  text-align: center;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 19px;
    margin-bottom: 7vh;
  }
`
const Post = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 50px;

  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 0;
  }
`

export default function Home({data}) {
  return (
    <>
      <SEO title="Blog" />
      <HeaderLogo />
      <Layout>
        <Hero>
          <HeadingXL>Sunil Aleti</HeadingXL>
          <TextHome>
          <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
              <a href="https://www.instagram.com/sunil_aleti" target="_blank" rel="noopener noreferrer" style={{marginRight: "10px"}}>
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com/aleti_sunil" target="_blank" rel="noopener noreferrer" style={{marginRight: "10px"}}>
                <FaTwitter size={24} />
              </a>
              <a href="https://github.com/aletisunil" target="_blank" rel="noopener noreferrer" style={{marginRight: "10px"}}>
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/sunilaleti" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              
            </div>
          </TextHome>
        </Hero>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <Link to={node.fields.slug} key={node.id}>
            <Post>
              <HeadingL>{node.frontmatter.title}</HeadingL>
              <TextBody>{node.excerpt}</TextBody>
              <TextDate>{node.frontmatter.date}</TextDate>
            </Post>
          </Link>
        ))}
      </Layout>
    </>
  )
}

export const data = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
