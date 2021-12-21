import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Profile from '../components/Profile'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from "react";
import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {
	const { user } = useUser()
	//console.log('index user', user)
  return (
    <div className={styles.container}>
      <Head>
        <title>SimFestival</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          SimFestival
        </h1>

        <p className={styles.description}>
          Login to create and share your own festival
        </p>

        {user && <Link href="/game/splash">Create Your Own Festival</Link>}

        {!user && <a href="/api/auth/login" className={styles.card}>Login</a>}

        {user && <a href="/api/auth/logout" className={styles.card}>Logout</a>}

        <Profile />

        <div className={styles.grid}>
          <span className={styles.card}>
            <h2>Pick your Lineup</h2>
            <p>Pick the lineup that you want to see, starting from scratch or a real lineup.</p>
          </span>

          <span className={styles.card}>
            <h2>Set your Schedule</h2>
            <p>Set up a schedule the way you think they should be done.</p>
          </span>

          <span
            className={styles.card}
          >
            <h2>Dates and Venues</h2>
            <p>Use real-world venues and stages or make up your own. Pick a date to go live and invite your friends!</p>
          </span>

          <span
            className={styles.card}
          >
            <h2>Share your Festival</h2>
            <p>
              Share your ideal festival and check out what your friends would put together!
            </p>
          </span>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://festigram.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by FestiGram
        </a>
      </footer>
    </div>
  )
}
