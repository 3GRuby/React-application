import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchCategoriesStartAsync } from "../../store/categories/category.action";
import CategoriesPreview from "../categories-preview/CategoriesPreview.component";
import Category from "../../components/category/Category.component";
import "./shop.style.scss";

const Shop = () => {
 const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchCategoriesStartAsync()); 
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
