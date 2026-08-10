<template>
  <div class="container">
    <nav>
      <ul>
        <li class="nav-home"><a :href="withBase('/')">Bo-Yu Yang</a></li>
        <li v-for="item in nav" :key="item.link">
            <a :href="withBase(formatLink(item.link))" :target="(item as any).target || '_self'" :rel="(item as any).target === '_blank' ? 'noopener noreferrer' : undefined">{{ item.text }}</a>
          </li>
      </ul>
    </nav>

    <div class="main-content">
      <div v-if="frontmatter.layout === 'home'">
        <header class="home-hero">
          <h1 id="title">
            {{ frontmatter.hero?.name || profile?.title }}
            <span v-if="frontmatter.hero?.nameZh" lang="zh-TW">{{ frontmatter.hero.nameZh }}</span>
          </h1>
        </header>
        
        <Content />
      </div>
      <div v-else>
         <div :class="{ 'article-page': frontmatter.date }">
           <header v-if="frontmatter.date" class="article-header">
             <h1>{{ frontmatter.title }}</h1>
             <p class="article-date">{{ frontmatter.date }}</p>
           </header>
           <Content />
         </div>
      </div>
    </div>

    <div style="margin-top: 3rem;"></div>
    <footer>
      <div class="footer-icons">
        <a v-for="link in profile?.links || []" :key="link.link" :href="link.link">
           <span v-if="typeof link.icon === 'object' && (link.icon as any).svg" v-html="(link.icon as any).svg" class="footer-icon-svg"></span>
           <span v-else class="footer-text-icon">{{ (typeof link.icon === 'string' ? link.icon : 'Link') }}</span>
        </a>
      </div>
      <div class="footer-text">
        <p>Last updated: {{ lastUpdated }}.</p>
        <p>2026, {{ profile?.title }}. Powered by VitePress.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import type { Profile } from './types'

const { site, frontmatter } = useData()

const nav = site.value.themeConfig.nav || []
const profile = site.value.themeConfig.profile as Profile | undefined
const lastUpdated = site.value.themeConfig.lastUpdated

// Strip .md extensions for VitePress routing
const formatLink = (link: string) => link.replace(/\.md$/, '.html')
</script>
