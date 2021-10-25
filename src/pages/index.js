import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/Card"

const IndexPage = ({ data }) => {
  const array = data.allDatoCmsBlog.nodes
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      {array.map(blog => (
        <Card
          key={blog.id}
          title={blog.title}
          slug={blog.slug}
          authorName={blog.author.name}
          categories={blog.category}
        />
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    allDatoCmsBlog {
      nodes {
        id
        title
        slug
        author {
          name
          slug
        }
        category {
          id
          name
          slug
        }
      }
    }
  }
`

export default IndexPage
