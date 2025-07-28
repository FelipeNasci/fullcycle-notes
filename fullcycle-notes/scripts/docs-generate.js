const fs = require("fs");
const path = require("path");

const docs = [
  {
    subject: "Docker",
    topics: [
      { name: "Networks", path: "/docker/networks/networks.md" },
      {
        name: "Decrease images",
        path: "/docker/optimize-images/laravel-docker/decrease-image-size.md",
      },
      {
        name: "Node Docker",
        path: "/docker/prática/node-docker/node-docker.md",
      },
    ],
  },
];

export default (() => {
  const rootDir = path.dirname("../");
  const documentationPath = `${rootDir}/fullcycle-notes/docs`;

  const callback = (err) => {
    if (err) throw err;
    console.log("File copied!");
  };

  docs.forEach(({ subject, topics }) => {
    topics.forEach(({ name, path }) => {
      const filePath = `${rootDir}${path}`;
      const destination = `${documentationPath}/${subject}/${name}.md`;

      fs.copyFile(filePath, destination, callback);
    });
  });
  
})();
