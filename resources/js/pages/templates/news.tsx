import Layout from '@/front-end/Layout/Layout'
import FeaturedArticles from '@/front-end/news/FeaturedArticle'
import LatestNewsGrid from '@/front-end/news/LatestNews'
import NewsArchivesSection from '@/front-end/news/NewsArchivesSection'
import NewsCategoriesSection from '@/front-end/news/NewsCategoriesSection'
import NewsHeroSection from '@/front-end/news/NewsHeroSection'
import NewsletterSection from '@/front-end/news/NewsletterSection'
import NewsSearchFilter from '@/front-end/news/NewsSearch'
import PressContactSection from '@/front-end/news/PressContactSection'
import SocialMediaLinks from '@/front-end/news/SocialMediaLinks'
import React from 'react'

type Props = {}

const news = (props: Props) => {
  return (
    <Layout title='News' >
        <NewsHeroSection />
        <NewsSearchFilter />
        <LatestNewsGrid />
        <FeaturedArticles />
        <NewsletterSection />
        <NewsCategoriesSection />
        <NewsArchivesSection />
        <PressContactSection />
        <SocialMediaLinks />
    </Layout>
  )
}

export default news
