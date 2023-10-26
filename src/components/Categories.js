const categoryList = [
  {
    bgImg: '/anime.png',
    title: 'Anime',
  },
  {
    bgImg: '/comedy.png',
    title: 'Comedy',
  },
  {
    bgImg: '/documentary.png',
    title: 'Documentary',
  },
  {
    bgImg: '/drama.png',
    title: 'Drama',
  },
  {
    bgImg: '/fantasy.png',
    title: 'Fantasy',
  },
  {
    bgImg: '/horror.png',
    title: 'Horror',
  },
  {
    bgImg: '/romance.png',
    title: 'Romance',
  },
  {
    bgImg: '/thriller.png',
    title: 'Thriller',
  },
  {
    bgImg: '/sci-fi.png',
    title: 'Sci-fi',
  },
  {
    bgImg: '/kids.png',
    title: 'Kids',
  },
];

const Categories = () => (
  <div className="categories container">
    {categoryList.map((category) => (
      <div
        className="card"
        style={{ backgroundImage: `url(${category.bgImg})` }}
      >
        <div className="category-title"> {category.title} </div>
      </div>
    ))}
  </div>
);

export default Categories;
