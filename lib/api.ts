export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface PostsResponse {
  success: boolean;
  data: BlogPost[];
  total: number;
}

const API_BASE_URL = 'http://localhost:3004';

export const postsApi = {
  async getPosts(): Promise<BlogPost[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/posts`);
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data: PostsResponse = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      // Fallback to empty array if API fails
      return [];
    }
  },

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
      const posts = await this.getPosts();
      return posts.find(post => post.slug === slug) || null;
    } catch (error) {
      console.error('Error fetching post by slug:', error);
      return null;
    }
  }
};
