import './App.css';
import React, { useEffect, useState } from 'react';
import api from './api/apiService.js';
import ListScreen from './componentes/ListScreen.js';

export default function App() {
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [filteredText, setFilteredText] = useState('');

  useEffect(() => {
    const fetchRepos = async () => {
      await api.get().then(response => setRepos(response.data))
    };
    fetchRepos();
  });

  useEffect(() => {
    let newFilteredRepos = [...repos];
    if (filteredText.trim() !== '') {
      newFilteredRepos = newFilteredRepos.filter(repo => {
        return repo.name.toLowerCase().includes(filteredText);
      });
    }
    setFilteredRepos
    (newFilteredRepos);
  }, [repos, filteredText]);

  useEffect(() => {
    let newFilteredRepos = [...repos];
    if (filteredText.trim() !== '') {
      newFilteredRepos = newFilteredRepos.filter(repo => {
        return repo.description.toLowerCase().includes(filteredText);
      });
    }
    setFilteredRepos(newFilteredRepos);
  }, [repos, filteredText]);

  const handleFilterChange = (event) => {
    const text = event.target.value.trim();
    setFilteredText(text.toLowerCase());
  };

  return (
    <div className='container'>
      <h1 className='center' >Lista de Repositórios - MatBSa</h1>;

      <ListScreen
          repos={filteredRepos}
          filteredText={filteredText}
          onFilterChange={handleFilterChange}
        />
    </div >
  );
}
