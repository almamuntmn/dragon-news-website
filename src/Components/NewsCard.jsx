import { FaEye, FaStar } from "react-icons/fa";
import { BsBookmark, BsShare } from "react-icons/bs";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    rating,
    total_view,
    thumbnail_url,
    details,
    tags,
  } = news;

  // Format date nicely
  const publishedDate = new Date(news.author.published_date).toLocaleDateString(
    "en-GB",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="card bg-base-100 shadow-md mb-6">
      {/* Header */}
      <div className="flex justify-between items-center px-4 pt-4 bg-base-300">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">{publishedDate}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500">
          <BsBookmark className="cursor-pointer hover:text-secondary" />
          <BsShare className="cursor-pointer hover:text-secondary" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 mt-3">
        <h2 className="font-bold text-lg leading-snug">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full h-60 object-cover"
        />
      </figure>

      {/* Details */}
      <div className="p-4 text-sm text-gray-700">
        <p>
          {details.slice(0, 200)}...
          <Link to={`/news-details/${id}`} className="text-secondary font-semibold cursor-pointer">
            Read More
          </Link>
        </p>

        {/* Tags */}
        <p className="mt-3 text-xs text-gray-500">
          <span className="font-medium">Tags:</span>{" "}
          {tags.join(", ")}
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t px-4 py-3 text-sm">
        <div className="flex items-center gap-1 text-secondary">
          <FaStar className="text-yellow-500" />
          <span className="font-semibold">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
