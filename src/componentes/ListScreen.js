import React from "react"

export default function ListScreen({ repos, filters, onSelectedFilterChange, currentFilter, onFilterChange, filteredText, sorts, onSortChange, currentSort }) {

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Pesquisar"
          value={filteredText}
          onChange={onFilterChange}
          style={{ marginTop: "20px", marginBottom: "20px" }}
        />
      </div>
      <div class="input-field col s12" style={{ display: 'inline-block' }}>
        <select className="browser-default" value={currentFilter} onChange={onSelectedFilterChange} >
          {filters.map(filter => {
            return <option key={filter}>{filter}</option>
          })}
        </select>
      </div>
      <div class="input-field col s12" style={{ display: 'inline-block', margin: "10px" }}>
        <select className="browser-default" value={currentSort} onChange={onSortChange} >
          {sorts.map(sort => {
            return <option key={sort}>{sort}</option>
          })}
        </select>
      </div>

      {repos.map((repo) => {

        return (
          <div className="row blue lighten-5" key={repo.id} style={{ padding: '5px', margin: '5px', border: '1px solid lightgray', borderRadius: '15px', }}>
            <div className="col s12 m15">
              <div className="card teal lighten-2">
                <div className="card-content white-text">
                  <span className="card-title">{repo.name}</span>
                  <br />
                  <div>
                    <p>
                      {'Descrição: '}
                    </p>
                    <p>
                      {repo.description}
                    </p>
                  </div>
                  <br />
                  <div>
                    <p>
                      {'Atualizado em: '}
                      {repo.updated_at.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1')}
                      {' - '}
                      {'Tamanho: '}
                      {repo.size}{' mb'}
                      {' - '}
                      {'Possui forks: '}
                      {repo.fork === true ? 'Sim' : 'Não'}
                      {' - '}
                      {'Arquivado: '}
                      {repo.archived === true ? 'Sim' : 'Não'}
                      {' - '}
                      {'Possui issues: '}
                      {repo.has_issues === true ? 'Sim' : 'Não'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}