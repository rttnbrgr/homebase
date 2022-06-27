import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";
import Author from "../types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      POST HEADER POST HEADER POST HEADER
      <PostTitle>{title}</PostTitle>
      <div className="mb-6 text-lg">
        <DateFormatter dateString={date} />
      </div>
      POST HEADER POST HEADER POST HEADER
    </div>
  );
};

export default PostHeader;
