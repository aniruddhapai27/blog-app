import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();
  console.log(profile);
  return (
    <div className="container mx-auto my-12 p-4 space-y-9">
      <h1 className="text-2xl font-bold mb-6">About</h1>
      <p>
        Creating this blog website has been an exciting journey, especially as I
        explored the intricacies of web development. Guided by the 'Learn
        Coding' channel, I learned how to build a platform where you can share
        my thoughts, ideas, and interests with others. This project has deepened
        my understanding of various web technologies and design principles,
        helping me transform a basic concept into an interactive, user-friendly
        website. Every detail, from structuring the content layout to managing
        the backend, has been a valuable learning experience.
      </p>
      <p>
        Beyond just coding, I've come to appreciate the importance of creating
        engaging, readable content and providing users with a seamless
        experience. My goal is for this blog to become a welcoming space for
        readers, where they can find valuable insights and relatable stories.
        I'm excited to continue developing and expanding this project, adding
        new features, and improving its functionality as I learn more. Thank you
        for visiting, and I hope you enjoy exploring the content as much as I
        enjoyed building this platform!
      </p>
    </div>
  );
}

export default About;
