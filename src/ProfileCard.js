function ProfileCard({title, handle, image}) {
  return (
      <div>
          <img src={image}/>
          <div>Title is {title}</div>
      {/*working with props in child component */}
      <div>Handle is {handle}</div>
      {/*working with props in child component */}
    </div>
  );
}

export default ProfileCard;
