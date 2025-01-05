function UserCard({ avatar, firstname, lastname, email, bio, major, graduationYear }) {
    return (
      <div className="card">
        <div className="avatar">
          <img src={avatar} alt="User Avatar" />
        </div>
        <h3>
          {firstname} {lastname}
        </h3>
        <p><strong>Email: </strong>{email}</p>
        <p><strong>Bio:</strong> {bio || "Not provided"}</p>
        <p><strong>Major:</strong> {major}</p>
        <p><strong>Graduation Year:</strong> {graduationYear || "Not provided"}</p>
      </div>
    );
  }

  export default UserCard;