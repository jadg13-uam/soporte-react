export default function SolicitudCard({id, titulo, prioridad, estado, onResolver, onPendiente}) {
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

            <button
            type="button"
            onClick={() => onPendiente(id)}
            disabled={estado !== 'Resuelta'}
            >Pendiente</button>
        </article>
    )
}