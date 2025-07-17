export interface NewsDataType {
  article_id: string;
  title: string;
  link: string;
  keywords: string[];
  creator: null;
  video_url: null;
  description: string;
  content: string;
  pubDate: string;
  image_url: string;
  source_id: string;
  source_priority: number;
  source_name: string;
  source_url: string;
  source_icon: string;
  language: string;
  country: string[];
  category: string[];
  ai_tag: string[];
  ai_region: string[];
  ai_org: null;
  sentiment: string;
  sentiment_stats: Sentimentstats;
  duplicate: boolean;
}


export const fakeNewsList: NewsDataType[] = Array.from({ length: 5 }, (_, index) => ({
  article_id: `article-${index + 1}`,
  title: `Fake News Title ${index + 1}`,
  link: `https://example.com/article-${index + 1}`,
  keywords: ['AI', 'Technology'],
  creator: null,
  video_url: null,
  description: `This is a short description for article ${index + 1}.`,
  content: `This is the full content of the fake news article number ${index + 1}. It contains multiple sentences for realism.`,
  pubDate: new Date().toISOString(),
  image_url: `https://example.com/images/article-${index + 1}.jpg`,
  source_id: `source-${index + 1}`,
  source_priority: 1,
  source_name: `Example Source ${index + 1}`,
  source_url: `https://example.com`,
  source_icon: `https://example.com/icons/source-${index + 1}.png`,
  language: 'en',
  country: ['us'],
  category: ['technology'],
  ai_tag: ['AI', 'Innovation'],
  ai_region: ['North America'],
  ai_org: null,
  sentiment: index % 3 === 0 ? 'positive' : index % 3 === 1 ? 'neutral' : 'negative',
  sentiment_stats: {
    positive: Math.floor(Math.random() * 100),
    neutral: Math.floor(Math.random() * 100),
    negative: Math.floor(Math.random() * 100),
  },
  duplicate: false,
}));

interface Sentimentstats {
  positive: number;
  neutral: number;
  negative: number;
}

import { Tabs } from "expo-router";
export type CustomBottomTabBarProps = Parameters<NonNullable<Parameters<typeof Tabs>[0]["tabBar"]>>[0];