type Person = {
  id: number
  firstName: string
  lastName: string
}

type TableProps = {
  people: Person[]
  onDelete: (id: number) => void
}

function Table({ people, onDelete }: TableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>ชื่อ</th>
          <th>นามสกุล</th>
          <th>จัดการ</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person) => (
          <tr key={person.id}>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>
              <button onClick={() => onDelete(person.id)}>
                ลบ
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table