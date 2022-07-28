import './App.css'
import React, { useEffect, useState } from 'react'
import api from './api/apiService.js'
import ListScreen from './componentes/ListScreen.js'

const FIRLTERS = [
  'Escolha um filtro',
  'Forks',
  'Tem issues',
  'Arquivado'
]

const SORTERS = [
  'Ordenar',
  'Alfabético',
  'Último commit'
]

export default function App() {
  const [repos, setRepos] = useState([])
  const [filteredRepos, setFilteredRepos] = useState([])
  const [filteredText, setFilteredText] = useState('')
  const [currentFilter, setCurrentFilter] = useState(FIRLTERS[0])
  const [currentSort, setCurrentSort] = useState(SORTERS[0])

  useEffect(() => {
    const fetchRepos = async () => {
      await api.get().then(response => setRepos(response.data))
    }
    fetchRepos()
  })

  useEffect(() => {
    let newFilteredRepos = [...repos]
    if (filteredText.trim() !== '') {
      newFilteredRepos = newFilteredRepos.filter(repo => {
        return repo.name.toLowerCase().includes(filteredText)
      })
    }
    setFilteredRepos(newFilteredRepos)
  }, [repos, filteredText])

  useEffect(() => {
    let newFilterRepos = filteredRepos
    if (currentFilter === 'Forks') {
      newFilterRepos = newFilterRepos.filter(repo => {
        return repo.fork === true
      })
    } else if (currentFilter === 'Tem issues') {
      newFilterRepos = newFilterRepos.filter(repo => {
        return repo.has_issues === true
      })
    } else if (currentFilter === 'Arquivado') {
      newFilterRepos = newFilterRepos.filter(repo => {
        return repo.archived === true
      })
    } else if (currentFilter === 'Escolha un filtro' && filteredText.trim().length === 0) {
      newFilterRepos = [...repos]
    }
    setFilteredRepos(newFilterRepos)
  }, [repos, currentFilter, filteredRepos, filteredText])

  // TO DO: Fazer o useEffect do sort !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const handleFilterChange = (event) => {
    const text = event.target.value.trim()
    setFilteredText(text.toLowerCase())
  }

  const handleSelectedFilterChange = (event) => {
    const newFilter = event.target.value
    setCurrentFilter(newFilter)
  }

  const handleSortChange = (event) => {
    const newSort = event.target.value
    setCurrentSort(newSort)
  }

  return (
    <div className='container'>
      <h1 className='center' >Lista de Repositórios - MatBSa</h1>

      <ListScreen
        filters={FIRLTERS}
        currentFilter={currentFilter}
        repos={filteredRepos}
        filteredText={filteredText}
        sorts={SORTERS}
        onSortChange={handleSortChange}
        currentSort={currentSort}
        onSelectedFilterChange={handleSelectedFilterChange}
        onFilterChange={handleFilterChange}
      />
    </div >
  )
}
