function ProfileCard(props) {
  return (
    <div>
      <div>Title is {props.title}</div>{" "}
      {/*working with props in child component */}
      <div>Handle is {props.handle}</div>
      {/*working with props in child component */}
    </div>
  );
}

export default ProfileCard;
