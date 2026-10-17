export default function SolicitudCard({id, titulo, prioridad, estado, onResolver}) {
    return (
        <article>
            <h3>{titulo}</h3>
            <p><strong>Prioridad:</strong> {prioridad}</p>
            <p><strong>Estado: </strong> {estado}</p>
            <button
                type="button"
                onClick={() => onResolver(id)}
                disabled={estado === 'Resuelta'}
            >
                Resolver
            </button>
        </article>
    )
}