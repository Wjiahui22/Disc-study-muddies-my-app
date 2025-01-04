import Navbar from "../components/Navbar";
import Card from "../components/UserCard";
import Footer from "../components/Footer";
import ApiFetchUsers from "../hooks/ApiFetchUsers";
import addUser from '../hooks/addUser';
import UserCard from '../components/UserCard';

function ProfilePage() {
  const [users, setUsers] = ApiFetchUsers();

  return (
    <div>
      <Navbar />
      <h1 style={{ color: "white" }}>User List <br />
      <button class="save-profile" onClick={() => addUser({ id: 5, firstname: "New", lastname: "User", email: "new@user.com", bio: "", major: "Physics", graduationYear: 2026 })}>
        Add User
      </button>   
      </h1>
      <br />  

      <div className="container">
        {users.map((user) => (
          <UserCard
          key={user.id}
          avatar="https://i.postimg.cc/QNPj5JDp/39413-1000.jpg" // Replace with actual avatar URL
          firstname={user.firstname}
          lastname={user.lastname}
          email={user.email}
          bio={user.bio}
          major={user.major}
          graduationYear={user.graduationyear}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;