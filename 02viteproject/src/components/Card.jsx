

// ProfileCard.jsx

const ProfileCard = ({ username, profession, image }) => {
  return (
    <div className="max-w-sm mx-20 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition transform hover:scale-105">
      <div className="flex flex-col items-center p-6">
        <img
          src={image}
          alt="User"
          className="w-28 h-28 rounded-full shadow-md object-cover mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          {username}
        </h2>
        <p className="text-gray-500 dark:text-gray-300 text-sm mt-1">
          {profession || "Still Learning"}
        </p>

        <div className="flex gap-4 mt-6">
          <button className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-700 transition duration-200">
            Follow
          </button>
          <button className="px-5 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
