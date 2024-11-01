import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  podcasts: defineTable({
    user: v.optional(v.id("users")),
    podcastTitle: v.string(),
    podcastDescription: v.string(),
    audioUrl: v.optional(v.string()),
    audioStorageId: v.optional(v.id('_storage')),
    imageUrl: v.optional(v.string()),
    imageStorageId: v.optional(v.id('_storage')),
    author: v.optional(v.string()),
    authorId: v.optional(v.string()),
    authorImageUrl: v.optional(v.string()),
    voicePrompt: v.string(),
    imagePrompt: v.string(),
    voiceType: v.string(),
    audioDuration: v.number(),
    views: v.number(),
    tags: v.optional(v.array(v.string())),
  })
    .searchIndex('search_author', { searchField: 'author' })
    .searchIndex('search_title', { searchField: 'podcastTitle' })
    .searchIndex('search_body', { searchField: 'podcastDescription' }),
    // .searchIndex('search_tags', {searchField: 'tags'}),
  users: defineTable({
    email: v.string(),
    imageUrl: v.string(),
    clerkId: v.string(),
    name: v.string(),
  })
})