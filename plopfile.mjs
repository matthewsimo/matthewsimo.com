export default function (plop) {
  const d = new Date();
  const s = {
    minimumIntegerDigits: 2,
    useGrouping: false,
  };
  plop.setGenerator("draft", {
    description: "Draft a blog post",
    prompts: [
      {
        type: "input",
        name: "title",
        message: "What is the title of the post?",
      },
      {
        type: "input",
        name: "slug",
        message: "What is the slug of the post?",
        default: "draft",
      },
      {
        type: "input",
        name: "date",
        message: "What date would you like this post to have?",
        default: `${d.getFullYear()}-${Number(d.getMonth() + 1).toLocaleString(
          "en-US",
          s
        )}-${d.getDate().toLocaleString("en-US", s)}`,
      },
      {
        type: "input",
        name: "img",
        message: "What is the URL of the main post image",
      },
      {
        type: "input",
        name: "attribution",
        message: "What is the attribution text of the main post image",
      },
    ],
    actions: [
      {
        type: "add",
        path: "./_posts/{{kebabCase date}}-{{kebabCase slug}}.mdx",
        templateFile: "_templates/draft.hbs",
      },
    ],
  });
}
