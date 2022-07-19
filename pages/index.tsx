import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { InferGetServerSidePropsType, NextPage } from "next";
import { CharacterCard, CharacterCardSkeleton, Head } from "components";
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchData } from "helper";

export async function getServerSideProps(context) {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  );
  const data = await fetchData()
  return {
    props: { data },
  }
}


const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ data }) => {
  const [characters, setCharacters] = useState(data.results);
  const [currentPage, setCurrentPage] = useState(1);
  const [meta, setMeta] = useState(data.info);
  const [hasMore, setHasMore] = useState(false);
  
  const fetchMoreData = async () => {
    setCurrentPage(currentPage + 1);
    const data = await fetchData(currentPage + 1)
    setCharacters([...characters, ...data.results]);
  }

  useEffect(() => {
    if (meta) {
      setHasMore(characters.length != meta.count)
    }
  }, [meta, currentPage, setCurrentPage]);

  return (
    <div>
      <Head />
      <main className={styles.main}>
        <div>
          <h2 style={{ textAlign: 'center', color: 'white' }}>Rick and Morty Characters</h2>
          <InfiniteScroll
            loader={
              <div className={styles.gridContainer}>
                <CharacterCardSkeleton />
                <CharacterCardSkeleton />
              </div>
            }
            dataLength={characters.length}
            hasMore={hasMore}
            next={fetchMoreData}
            endMessage={
              <div style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </div>
            }
          >
            <div className={styles.gridContainer} style={{
              paddingTop: '100px',
            }}>

              {characters && meta ? characters.map((character) => (
                CharacterCard(character)
              )) : null}
            </div>
          </InfiniteScroll>
        </div>
      </main>
    </div>
  );
}

export default Home;