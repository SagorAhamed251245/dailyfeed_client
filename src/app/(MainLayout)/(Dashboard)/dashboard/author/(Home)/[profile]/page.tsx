import MarkdownEditor from "@/components/editor/MarkdownEditor";

const AuthorPage = ({ params }: { params: { profile: string } }) => {
  console.log(params);
  return (
    <>
      <MarkdownEditor />
    </>
  );
};

export default AuthorPage;
