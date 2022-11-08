//import CategoryItem from "../category-item/CategoryItem.components";
import DirectroyItem from "../directory-item/DirectoryItem.components";
import "./Directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectroyItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
