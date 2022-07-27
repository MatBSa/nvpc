import React from "react"

export default function ListScreen({ repos, onFilterChange, filteredText }) {

  return (
    <>
      <input
        type="text"
        placeholder="Filtro..."
        value={filteredText}
        onChange={onFilterChange}
        style={{ marginTop: "20px", marginBottom: "20px" }}
      />

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
                      {'Possui forks? '}
                      {repo.fork === true ? 'Sim' : 'Não'}
                      {' - '}
                      {'Arquivado? '}
                      {repo.archived ? 'Sim' : 'Não'}
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