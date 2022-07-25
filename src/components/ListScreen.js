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
            <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">{repo.name}</span>
                  <p>
                      {'Atualizado em: '}
                      {repo.updated_at}
                      {' '}
                      {'Tamanho: '}
                      {repo.size}
                      {' '}
                      {'Possui forks? '}
                      {repo.fork}
                      {' '}
                      {'Arquivado? '}
                      {repo.archived}
                      </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
