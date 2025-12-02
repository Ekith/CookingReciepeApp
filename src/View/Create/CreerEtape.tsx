

function CreerEtape(
    {
        index,
        id,
        onRemove
    }: {
        index: number,
        id: number,
        onRemove: (id: number) => void
    }) {
  return (
      <div>
            <label>
                Étape {index + 1}:
                <br />
                <textarea name={`etape-description-${index}`} rows={4} cols={50} />
            </label>
            <br />
          <button type="button" onClick={() => onRemove(id)}>Supprimer cette étape</button>
      </div>
  );
}

export default CreerEtape;