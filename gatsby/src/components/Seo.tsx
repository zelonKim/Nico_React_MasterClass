import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

interface ISeoProps {
    title: string
}

export default function Seo({ title }: ISeoProps) {
    const data = useStaticQuery(graphql`
        query SeoQuery {
            site {
                siteMetadata{
                    title
                    siteUrl
                    description
                }
            }
        }
    `)

    return <title> {title} | {data.site?.siteMetadata?.title} </title>
}

