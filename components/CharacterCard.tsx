
export function CharacterCard(character: Data.Result): JSX.Element {
  return <div key={character.id} style={{
    background: '#3c3e44',
    color: '#fff',
    padding: '10px',
    margin: '3rem 0',
    borderRadius: '1rem',
    maxWidth: '300px',
    position: 'relative',
  }}>
    <img src={character.image} height={200} width={200} style={{
      borderRadius: '50%',
      position: 'absolute',
      top: '-30%',
      left: '20%',
      border: `5px solid ${character.status === 'Dead' ? '#F44336' : character.status === 'Alive' ? '#389e38' : 'gray'}`,
    }} />
    <div style={{
      margin: '110px 0',
    }}></div>
    <h1>{character.name}</h1>
    <div>
      <div style={{
        color: 'gray'
      }}>Status</div>
      <div>{character.status} - {character.species}</div>
    </div>
    <div>
      <div style={{
        color: 'gray'
      }}>Last known location</div>
      <div>{character.location.name}</div>
    </div>
    <div>
      <div style={{
        color: 'gray'
      }}>First seen in:</div>
      <div>{character.origin.name}</div>
    </div>
  </div>;
}

