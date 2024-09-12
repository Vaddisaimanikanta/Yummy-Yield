import '../Styles/Menu.css'
import { menu_list } from '../assets/frontend_assets/assets'; 

const CategorySection = () => {
  return (
    <div className="category-section" id='menu'>
      {menu_list.map((menu, index) => (
        <div key={index} className="category-item">
          <img src={menu.menu_image} alt={menu.menu_name} className="category-image" />
          <p className="category-name">{menu.menu_name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
