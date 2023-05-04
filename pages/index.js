import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Banner from '../components/banner/banner'
import Navbar from '../components/nav/navbar'
import SectionCards from '../components/section-cards/section-cards'

import { getVideos } from '@/lib/videos'

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps() {
  return {
    props: {
      cards: [
        {
          title: "Disney",
          size: "large",
          cards: await getVideos("disney trailers")
        }
      ]
    }
  }
}

export default function Home({ cards }) {

  return (
    <>
      <Head>
        <title>VS Videos Stream</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner 
        title="Star Wars"
        subtitle="A new journey is comming!"
        imgUrl="/static/starWars.jpg"
      />
      {
        cards.map(section => (
          <SectionCards key={section.title} title={section.title} cards={section.cards} size={section.size} />
        ))
      }
    </>
  )
}
