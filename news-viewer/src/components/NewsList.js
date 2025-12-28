import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticles = [
  {
    title: 'Sample News Title 1',
    description: 'This is a sample description for news article 1.',
    url: 'https://example.com/news1',
    urlToImage: 'https://placehold.co/160',
    publishedAt: '2024-06-01T12:00:00Z',
  },
  {
    title: 'Sample News Title 2',
    description: 'This is a sample description for news article 2.',
    url: 'https://example.com/news2',
    urlToImage: 'https://placehold.co/160',
    publishedAt: '2024-06-02T15:30:00Z',
  },
];

const NewsList = () => {
  return (
    <NewsListBlock>
      {sampleArticles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
