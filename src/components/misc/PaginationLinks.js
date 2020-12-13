import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { PaginationItem, PaginationLink } from 'reactstrap'

const PaginationLinks = ({ currentPage, numberOfPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const previousPage =
    currentPage - 1 === 1 ? '/blog/' : `/blog/${(currentPage - 1).toString()}`
  const nextPage = `/blog/${(currentPage + 1).toString()}`
  return (
    <Pagination>
      {isFirst ? (
        <PaginationItem disabled>
          <PaginationLink previous href="/blog/" />
        </PaginationItem>
      ) : (
        <PaginationItem>
          <PaginationLink previous href={previousPage} />
        </PaginationItem>
      )}
      {Array.from({ length: numberOfPages }, (_, i) =>
        currentPage === i + 1 ? (
          <PaginationItem active key={`blog-number${i + 1}`}>
            <PaginationLink href={`/blog/${i === 0 ? '' : `blog/${i + 1}`}`}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ) : (
          <PaginationItem key={`blog-number${i + 1}`}>
            <PaginationLink href={`/${i === 0 ? '' : `/${i + 1}`}`}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        )
      )}
      {isLast ? (
        <PaginationItem disabled>
          <PaginationLink next href={nextPage} />
        </PaginationItem>
      ) : (
        <PaginationItem>
          <PaginationLink next href={nextPage} />
        </PaginationItem>
      )}
    </Pagination>
  )
}
PaginationLinks.propTypes = {
  currentPage: PropTypes.number,
  numberOfPages: PropTypes.number,
}
const Pagination = styled.ul`
  display: flex;
  margin: 0 0 20px 20px;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
`
// const PaginationItem = styled.li`
//   display: list-item;
//   margin-bottom: 10px;
//   line-height: 1.667em;
//   text-align: -webkit-match-parent;
//   &.active,
//   &:hover {
//     z-index: 3;
//     color: #fff;
//     background-color: #007bff;
//     border-color: #007bff;
//   }
// `
// const PaginationLink = styled(Link)`
//   position: relative;
//   display: block;
//   padding: 0.5rem 0.75rem;
//   margin-left: -1px;
//   line-height: 1.25;
//   color: #007bff;
//   background-color: #fff;
//   border: 1px solid #dee2e6;
//   &.active,
//   &:hover {
//     z-index: 3;
//     color: #fff;
//     background-color: #007bff;
//     border-color: #007bff;
//   }
//   &:last-child .PaginationLink {
//     border-top-right-radius: 0.25rem;
//     border-bottom-right-radius: 0.25rem;
//   }
// `

export default PaginationLinks
