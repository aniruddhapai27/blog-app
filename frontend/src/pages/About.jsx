import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();
  console.log(profile);
  return (
    <div className="container mx-auto my-12 p-4 space-y-9">
      <h1 className="text-2xl font-bold mb-6">About</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        amet quod atque et cupiditate. Modi, officiis eaque ut voluptate quos
        sapiente accusamus. Autem soluta, magnam, consectetur eius beatae cum
        obcaecati dolorum amet maxime delectus quo repudiandae quibusdam,
        perferendis vel totam natus ea consequuntur iusto voluptate
        necessitatibus at eum repellendus et? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Aut autem, eos, voluptate nostrum non
        maxime inventore sunt modi sapiente animi corrupti deleniti mollitia
        dignissimos cupiditate culpa expedita ab, accusamus assumenda veniam ut
        fugit! Unde recusandae ab nam laudantium modi dolorum inventore odit
        omnis expedita repellendus distinctio atque cupiditate ipsa, delectus
        sapiente quo pariatur suscipit vitae dolore nesciunt alias fugit quod
        consectetur. Doloribus, ipsam non. Sed, eligendi, provident quasi
        accusantium consequuntur esse porro magni reprehenderit quae nam, quia
        culpa numquam a laborum perspiciatis? Consequuntur vitae autem voluptas
        deleniti doloremque! Nostrum saepe et cupiditate obcaecati praesentium?
        Nesciunt iste perspiciatis voluptas itaque asperiores! Lorem ipsum dolor
        sit amet consectetur adipisicing elit.
      </p>
      <p>
        Velit praesentium similique perspiciatis beatae quidem at, qui sunt
        dolorem delectus aspernatur hic quas nihil officia maiores ea sed ex
        fugit impedit molestiae eius eum excepturi labore amet! Doloribus est in
        dolorum nihil fuga fugiat quam accusamus saepe obcaecati velit,
        voluptates molestias!
      </p>
    </div>
  );
}

export default About;
