import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
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
      <PostTitle>{title}</PostTitle>
      <div className="mb-6 text-lg">
        <DateFormatter dateString={date} />
      </div>
    </div>
  );
};

export default PostHeader;
