import React from "react";
import Image from "next/image";

const Blog1: React.FC = () => {
  return <div>
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
  {/* Main content area */}
  <div className="col-span-3 space-y-4">
    <h1 className="text-2xl font-bold text-neutral-800">
      Main News Topic Here
    </h1>

    {/* Two sub-boxes side by side */}
    <div className="flex flex-col md:flex-row gap-4 items-start">
  {/* Image section */}
  <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md">
    <Image
      src="/images/agric.jpg"
      alt="Agricultural Project"
      width={500}
      height={300}
      className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
    />
  </div>

  {/* Text section */}
  <div className="md:w-1/2 rounded-lg p-4 text-neutral-700 leading-relaxed">
    <h2 className="text-xl font-semibold mb-2">
      Sustainable Farming: The Future of Agriculture
    </h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aut
      amet voluptates sed, molestias distinctio sint cumque minima expedita
      doloremque, at numquam cupiditate asperiores ducimus delectus corrupti
      magni sapiente!
    </p>
  </div>
</div>


    {/* Description or main text */}
    <div className="text-neutral-700 leading-relaxed">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum debitis,
      aliquid error nam atque inventore asperiores, sapiente vel sint repellat
      pariatur, ducimus impedit facere dolorem assumenda iusto? Accusamus,
      accusantium aliquid.

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti magnam libero 
        reiciendis quibusdam neque totam dolores voluptatum adipisci facilis! Non et officia atque iusto laudantium, quam corrupti doloremque magnam impedit minus culpa aspernatur necessitatibus ex asperiores optio omnis eius laboriosam explicabo corporis labore inventore. Ipsa dolore maiores vero voluptas optio alias quia laudantium odit eveniet, cupiditate sapiente laboriosam hic sint odio iusto rem possimus aliquid incidunt culpa nisi tenetur? Aperiam, quidem ducimus. Aspernatur quis corporis ratione ea, qui ipsam tempore debitis. Praesentium unde facere iure eius delectus ad vel id saepe reprehenderit. Temporibus dicta necessitatibus molestiae unde, a voluptatibus minima ratione facere molestias quas quibusdam sunt? Rerum dolorum numquam, dolores assumenda minus dolor deserunt mollitia voluptatum, commodi temporibus, iure placeat voluptates. Doloremque accusamus repellat ullam, provident ipsum odio suscipit. Dolores dolore sequi voluptatibus aliquid dignissimos quisquam suscipit optio vel deserunt cumque exercitationem cupiditate provident facere, veritatis culpa aperiam explicabo quasi harum, nihil voluptates quas debitis! In facilis voluptates fugit corrupti. Eligendi natus, aut aliquam inventore iure et ex impedit cumque. Esse provident aliquid alias iste neque ipsam, accusantium, atque ut quisquam in excepturi quod beatae dolorem fugiat veniam mollitia! Eaque consequuntur alias voluptas iste, aut sapiente cupiditate odit dolore in doloribus quis fugiat incidunt dolorem itaque? Neque praesentium velit tenetur aspernatur incidunt, asperiores, iste provident reiciendis nostrum harum enim maiores esse quaerat ratione. Suscipit sequi nostrum deserunt quibusdam aspernatur aliquam placeat, asperiores odit magni ipsam similique culpa natus praesentium reiciendis voluptatibus accusamus ea? Earum, quam molestiae aperiam nam accusantium doloremque saepe eos in voluptates
         necessitatibus cupiditate nemo assumenda omnis voluptatum ratione eligendi consequatur explicabo cumque vel illo cum vitae. Architecto fugit doloribus quos quas odit ut deserunt necessitatibus optio tenetur aut, hic iure quasi at expedita facilis illo, provident magni accusamus iusto suscipit recusandae officiis ipsa? Vitae ut maxime consectetur.
      </p>
    </div>
  </div>

  {/* Sidebar */}
  <div className="col-span-1 bg-neutral-50 rounded-xl shadow-inner p-4">
    Sidebar content (related news, ads, or categories)
  </div>
</div>

  </div>
};

export default Blog1;
