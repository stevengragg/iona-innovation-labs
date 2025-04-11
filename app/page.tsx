import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Iona innovation labs
      </h1>
      <p className="mb-4">
        {`Hey, I am Steven, I founded Iona Innovation Labs to help startups and
        small businesses build and scale their products. Iona Innovation Labs is a
        team of design and development experts who can help you transform and
        scale your business to the next level.`}
      </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  );
}
