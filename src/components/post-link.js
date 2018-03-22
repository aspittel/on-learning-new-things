import React from 'react'
import Link from 'gatsby-link'

const PostLink = ({ post }) => (
  <div>
    <h2 className='article-link'>
      <Link to={post.frontmatter.path}>
        {post.frontmatter.title}
      </Link>
    </h2>
    <p>
      {post.excerpt}
    </p>
    <Link to={post.frontmatter.path} className='continue-reading'>Continue reading...</Link>
  </div>
)

export default PostLink
