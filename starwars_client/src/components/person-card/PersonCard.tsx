type PersonCardProps = {
  personName: string,
}

const PersonCard = ({personName} : PersonCardProps) => {
  return (
    <div className="card">
      {personName}
    </div>
  )
}

export default PersonCard;