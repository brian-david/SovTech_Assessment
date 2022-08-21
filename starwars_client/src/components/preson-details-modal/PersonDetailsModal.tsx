import { Person } from "../../types/Person"

type PersonDetailsModalProps = {
  person: Person
}

const PersonDetailsModal = ({ person }: PersonDetailsModalProps) => {
  return (
    <h1>This is the persons details modal</h1>
  )
}

export default PersonDetailsModal;