import './App.css'
import React, { useEffect, useState } from 'react'
import api from './api/http-common'
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
    api
      .get(`/users/MatBSa/repos`)
      .then(response => setRepos(response.data))
  }, [])

  useEffect(() => {
    let newFilteredRepos = [...repos]
    if (filteredText.trim() !== '') {
      newFilteredRepos = newFilteredRepos.filter(repo => {
        return repo.name.toLowerCase().includes(filteredText)
      })
      if (currentFilter === 'Forks') {
        newFilteredRepos = newFilteredRepos.filter(repo => {
          return repo.fork === true
        })
      } else if (currentFilter === 'Tem issues') {
        newFilteredRepos = newFilteredRepos.filter(repo => {
          return repo.has_issues === true
        })
      } else if (currentFilter === 'Arquivado') {
        newFilteredRepos = newFilteredRepos.filter(repo => {
          return repo.archived === true
        })
      }
    } else if (currentFilter === 'Forks') {
      newFilteredRepos = newFilteredRepos.filter(repo => {
        return repo.fork === true
      })
    } else if (currentFilter === 'Tem issues') {
      newFilteredRepos = newFilteredRepos.filter(repo => {
        return repo.has_issues === true
      })
    } else if (currentFilter === 'Arquivado') {
      newFilteredRepos = newFilteredRepos.filter(repo => {
        return repo.archived === true
      })
    }

    setFilteredRepos(newFilteredRepos)
  }, [repos, filteredText, currentFilter, filteredRepos])

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
