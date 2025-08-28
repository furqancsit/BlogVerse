import BlogPostCard from "./BlogPostCard";
const samplePosts = [
  {
    id: 1,
    title: "Why I Started Blogging",
    content: "It all began with a need to express, to share, to connect...",
    author: "Jane Doe",
    date: "Aug 26, 2025",
  },
  {
    id: 2,
    title: "Mastering Focus in a Digital World",
    content: "In a world of distractions, here’s how I reclaimed my time...",
    author: "Alex Green",
    date: "Aug 24, 2025",
  }, {
    id: 3,
    title: "Mastering Focus in a Digital World",
    content: "In a world of distractions, here’s how I reclaimed my time...",
    author: "Alex Green",
    date: "Aug 24, 2025",
  }, {
    id: 4,
    title: "Mastering Focus in a Digital World",
    content: "In a world of distractions, here’s how I reclaimed my time...",
    author: "Alex Green",
    date: "Aug 24, 2025",
  }, {
    id: 5,
    title: "Mastering Focus in a Digital World",
    content: "In a world of distractions, here’s how I reclaimed my time...",
    author: "Alex Green",
    date: "Aug 24, 2025",
  },
  // Add more dummy data or fetch dynamically
];

const RecentPost = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto md:px-8 lg:px-16  bg-neutral-800">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">Recent Posts</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {samplePosts.map((post) => (
          <BlogPostCard
            key={post.id}
            title={post.title}
            content={post.content}
            author={post.author}
            date={post.date}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentPost;
