import React,{useState} from 'react'

const Category = () => {

    const [categories, setCategories] = useState([{ name: 'Parent', subcategories: [] }]);

    const addCategory = () => {
      const name = prompt('Enter category name:');
      setCategories([...categories, { name, subcategories: [] }]);
    };
  
    const addSubcategory = (index) => {
      const name = prompt('Enter subcategory name:');
      const newCategories = [...categories];
      newCategories[index].subcategories.push({ name });
      setCategories(newCategories);
    };

  return (
    <div>
     <h1>Categories</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={category.name}>
            {category.name}
            <button onClick={() => addSubcategory(index)}>Add Subcategory</button>
            <ul>
              {category.subcategories.map((subcategory) => (
                <li key={subcategory.name}>{subcategory.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <button onClick={addCategory}>Add Category</button>
    </div>
  )
}

export default Category