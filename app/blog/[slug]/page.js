import { use } from 'react'

export default function BlogPostPage(props) {
  const params = use(props.params);

  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>
    </main>
  );
}
