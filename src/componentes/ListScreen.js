import React from "react";

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
            <div className="row" key={repo.id}>
            <div className="col s12 m15">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{repo.name}</span>
                  <br/>
                  <div>
                    <p>
                      {'Descrição: '}
                    </p>
                    <p>
                      {repo.description}
                    </p>
                  </div>
                  <br/>
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
        );
      })}
    </>
  );
}
