'use client'
import allData from "@/util/blog.json"
import React, { useEffect, useState } from "react"
import Pagination from "./Pagination"
import PostCard from "./PostCard"

export default function BlogPost({ style, showItem, showPagination, startFrom, toEnd }) {
    const data = allData.slice(startFrom, toEnd)
    let [currentPage, setCurrentPage] = useState(1)
    let showLimit = showItem,
        paginationItem = 4

    let [pagination, setPagination] = useState([])
    let [limit, setLimit] = useState(showLimit)
    let [pages, setPages] = useState(Math.ceil(data.length / limit))

    useEffect(() => {
        cratePagination()
    }, [limit, pages, data.length])

    const cratePagination = () => {
        let arr = new Array(Math.ceil(data.length / limit))
            .fill()
            .map((_, idx) => idx + 1)

        setPagination(arr)
        setPages(Math.ceil(data.length / limit))
    }

    const startIndex = currentPage * limit - limit
    const endIndex = startIndex + limit
    const getPaginatedProducts = data.slice(startIndex, endIndex)

    let start = Math.floor((currentPage - 1) / paginationItem) * paginationItem
    let end = start + paginationItem
    const getPaginationGroup = pagination.slice(start, end)

    const next = () => {
        setCurrentPage((page) => page + 1)
    }

    const prev = () => {
        setCurrentPage((page) => page - 1)
    }

    const handleActive = (item) => {
        setCurrentPage(item)
    }

    return (
        <>
            {getPaginatedProducts.length === 0 && (
                <h3>No Products Found </h3>
            )}

            {getPaginatedProducts.map(post => (
                <React.Fragment key={post.id}>
                    {!style && <PostCard post={post} />}
                    
                    {/* {style === 9 && <PostCard9 post={post} />} */}
            
                    
                </React.Fragment>
            ))}
            <br />
            {showPagination &&
                <Pagination
                    getPaginationGroup={getPaginationGroup}
                    currentPage={currentPage}
                    pages={pages}
                    next={next}
                    prev={prev}
                    handleActive={handleActive}
                />
            }
        </>
    )
}
