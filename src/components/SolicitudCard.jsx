export default function SolicitudCard({ titulo, prioridad, estado }) {
    return (
        <article>
            <h3>{titulo}</h3>
            <p><strong>Prioridad:</strong> {prioridad}</p>
            <p><strong>Estado: </strong> {estado}</p>

        </article>
    )
}