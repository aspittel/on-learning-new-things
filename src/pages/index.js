import React from 'react'
import PostLink from '../components/post-link'
import SideBar from '../components/SideBar'

const IndexPage = props => {
  const edges = props.data.allMarkdownRemark.edges
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  const tags = props.data.allMarkdownRemark.group
  return (
    <div>
      <div className='container'>
        <div className='left-column'>
          {Posts}
        </div>
        <div className='right-column'>
          <SideBar tags={tags} />
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 800)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }`
