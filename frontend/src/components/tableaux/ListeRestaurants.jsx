import "./restaurant.css";
import React, { useEffect, useState } from "react";
import Restaurant from './Restaurant';
import SearchBar from './searchbar/SearchBar';
import { getAllTableaux, getAllCategories } from "../../../service/api"; // Assurez-vous que cette fonction existe dans votre service API
import pageResto from "../../assets/pageResto.jpg";

const ListeTableaux = () => {
  const [tableaux, setTableaux] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredTableaux, setFilteredTableaux] = useState([]);

  useEffect(() => {
    getAllTableaux().then((result) => {
      setTableaux(result.data);
      setFilteredTableaux(result.data);
    });

    getAllCategories().then((result) => {
      setCategories(result.data);
    });
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = tableaux.filter((tableau) => {
      return Object.values(tableau).some((value) =>
        value !== null && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setFilteredTableaux(filtered);
  };

  const getCategoryName = (id) => {
    const category = categories.find(cat => cat.id === id);
    return category ? category.nom : 'Unknown';
  };

  return (
    <>
      <main id="resto">
        <SearchBar onSearch={handleSearch} />
        <section>
          {filteredTableaux.map((tableau, index) => (
            <Restaurant
              key={index}
              nom={tableau.nom}
              prix={tableau.prix}
              image={tableau.image}
              description={tableau.description}
              categories={getCategoryName(tableau.categories_id)}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default ListeTableaux;
